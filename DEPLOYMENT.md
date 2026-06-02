# Deployment

The site is a **static Astro build** deployed to **AWS S3 + CloudFront** via GitHub Actions
([.github/workflows/deploy.yml](.github/workflows/deploy.yml)). On every push to `main`, the
workflow builds with pnpm, syncs `dist/` to S3, and invalidates the CloudFront cache.

## One-time AWS setup

1. **S3 bucket** — private bucket to hold the build output. Keep public access blocked; serve
   it only through CloudFront using an **Origin Access Control (OAC)**.
2. **CloudFront distribution** — origin = the S3 bucket (REST endpoint + OAC). Set the
   **Default root object** to `index.html`.
3. **Clean URLs** — the build emits `<route>.html` files (`build.format: 'file'`), but internal
   links and canonical tags use clean paths (`/product`). Create a **CloudFront Function**
   (viewer-request) from [infra/cloudfront-rewrite.js](infra/cloudfront-rewrite.js) and attach it
   to the default behavior so `/product` resolves to `/product.html`.
4. **404 handling** — add a **Custom Error Response**: HTTP error code `404` →
   response page path `/404.html` → HTTP response code `404`.
5. **GitHub OIDC role** — create an IAM role the GitHub Action can assume via OIDC
   (trust policy scoped to this repo). Grant it `s3:PutObject`/`s3:DeleteObject`/`s3:ListBucket`
   on the bucket and `cloudfront:CreateInvalidation` on the distribution. No long-lived AWS keys.

## GitHub repo configuration

Set these under **Settings → Secrets and variables → Actions**. The workflow targets a
`production` environment, so add them there (or as repo-level secrets/vars).

| Kind     | Name                         | Example                                            |
| -------- | ---------------------------- | -------------------------------------------------- |
| Secret   | `AWS_ROLE_ARN`               | `arn:aws:iam::123456789012:role/associum-deploy`   |
| Variable | `AWS_REGION`                 | `us-east-1`                                         |
| Variable | `S3_BUCKET`                  | `associum-landing-prod`                            |
| Variable | `CLOUDFRONT_DISTRIBUTION_ID` | `E1ABCDEF2GHIJ`                                     |

## Caching

The S3 sync sets long-lived immutable caching on fingerprinted assets (`_astro/*`) and
`no-cache` on HTML/XML/TXT, then a `/*` CloudFront invalidation makes each deploy go live
immediately.

## Contact form (not wired yet)

The contact form (`src/components/ContactSupportSection.jsx`) POSTs to `/api/contact`. That
endpoint does **not** exist on static hosting. The original Vercel serverless handler that
upserts to Attio is preserved at [api/contact.js](api/contact.js) for reference. To re-enable,
stand up a backend that keeps the `ATTIO_API_KEY` server-side (e.g. an AWS Lambda Function URL
or a Strapi endpoint) and update the fetch target in `ContactSupportSection.jsx`.

## Local development

Requires **Node 18.20.8+ / 20 / 22** (Astro 5 will not build on older Node — Node 12 OOMs).

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # output to dist/
pnpm preview  # serve dist/ locally
```
