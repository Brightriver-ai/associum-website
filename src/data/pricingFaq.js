// Pricing FAQ content. Imported by both PricingFaqSection.jsx (rendered accordion)
// and pricing.astro (FAQPage JSON-LD), so the structured data can never drift
// from what users actually see.
export const pricingFaqGroups = [
  {
    title: 'Plans & Pricing',
    items: [
      {
        question: 'Is there a free trial?',
        answer:
          'No trial period needed. Associum has a free plan — no credit card required. All new users receive 100 credits on sign-up, so you can run real tasks and experience the difference firsthand.',
      },
      {
        question: 'Which plan is right for me?',
        answer:
          "Start with the Free plan if you're evaluating Associum. Starter suits solo analysts running regular tasks and reports. Pro is built for higher output volume or document-heavy workflows. Max is for power users who need full capacity across tasks, reports, and file processing. Not sure? Contact us and we'll help you find the right fit.",
      },
    ],
  },
  {
    title: 'Credits',
    items: [
      {
        question: 'What is a credit and how does it work?',
        answer:
          'A credit is the unit of compute on Associum. Credit charges for any action on the platform vary based on the compute required to complete them. A task costs on average 3 credits, a report costs on average 40, and processing 50 pages of documents costs 1 credit. Use your credits however you work: tasks, reports, and file uploads in any combination.',
      },
      {
        question: "What's the difference between daily and monthly credits?",
        answer:
          "Daily credits are allocated each day and expire at midnight. Monthly credits are allocated at the start of your billing cycle and roll over up to your plan's cap.",
      },
      {
        question: 'Do unused credits roll over?',
        answer:
          "Monthly credits roll over up to your plan's rollover cap — 15 on Free, 500 on Starter, 2,000 on Pro, and 6,000 on Max. Daily credits expire at end of day. Add-on credits never expire.",
      },
      {
        question: 'What happens when I hit my credit limit?',
        answer:
          "You'll receive a notification before your credits run out. Once your limit is reached, you can purchase add-on credits to continue without interruption, or wait for your next billing cycle to replenish.",
      },
      {
        question: 'Can I buy more credits if I run out?',
        answer:
          'Yes. Starter, Pro, and Max subscribers can purchase add-on credit packs from $100 for 250 credits. Add-on credits never expire.',
      },
      {
        question: 'Can I switch plans mid-month?',
        answer:
          'Yes. Upgrades take effect immediately with prorated billing. Downgrades take effect at the next billing cycle.',
      },
    ],
  },
  {
    title: 'Teams & Workspaces',
    items: [
      {
        question: 'Can I share my workspace with other users?',
        answer:
          'Yes. On all paid plans, you can invite members to share a unified workspace — documents, knowledge base, and add-on credits are all accessible across the workspace. Credits consumed by members are deducted from your plan. Access controls let you define exactly who can view, edit, or export within the workspace.',
      },
      {
        question: 'Is there a team or enterprise plan?',
        answer:
          'Yes. Team plans are available across all paid tiers. The team admin assigns each member their own plan — a team of five could have one Max and four Starters, for example. Add-on credits are shared across all team members. For team or enterprise pricing, contact us for a custom quote.',
      },
      {
        question: 'How do team discounts work?',
        answer:
          'Volume discounts apply to paid seats only. Discounts are calculated on the number of paid seats and applied automatically on your consolidated invoice once you cross the relevant threshold.',
      },
    ],
  },
  {
    title: 'Files & Security',
    items: [
      {
        question: 'What file types does Associum support?',
        answer:
          'Associum supports PDFs, Word documents, Excel files, PowerPoint presentations, plain text files, CSVs, images, and HTML. Users can upload any number of documents up to 2GB each, so Associum fits your 10-Ks, contracts, research decks, financial models, and large datasets. URL ingestion is also supported — paste a link and Associum indexes the content immediately.',
      },
      {
        question: 'Is my data private and secure?',
        answer:
          "Yes. Associum is SOC 2 certified and ISO 27001 compliant. We never train our models on your data — your documents, inputs, and outputs do not persist on any provider's infrastructure after processing. All data is encrypted at rest with AES-256 and in transit with TLS 1.2+.",
      },
    ],
  },
];
