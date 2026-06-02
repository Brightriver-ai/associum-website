// CloudFront Function (viewer-request) — clean URL rewriting for the Astro
// static build, which emits page files as `<route>.html` (build.format: 'file').
//
// Without this, S3 (REST origin behind OAC) would 404 on `/product` because the
// object key is `product.html`, not `product`. Internal links and canonicals all
// use clean paths, so this maps them to the real objects.
//
// Deploy: create a CloudFront Function, paste this code, publish, and associate it
// with the distribution's default behavior on the "Viewer request" event.
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  if (uri.endsWith('/')) {
    // "/" -> "/index.html", "/foo/" -> "/foo/index.html"
    request.uri = uri + 'index.html';
  } else if (!uri.includes('.')) {
    // "/product" -> "/product.html" (only when there is no file extension)
    request.uri = uri + '.html';
  }

  return request;
}
