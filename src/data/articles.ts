export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  topic: string;
  read: string;
  published: string; // ISO date
  linkedinUrl: string;
  // Long-form body sections shown on the on-site article page.
  // Source: author's LinkedIn essay (canonical hosted here).
  body: { heading?: string; paragraphs: string[] }[];
  keywords: string[];
}

export const articles: Article[] = [
  {
    slug: "why-every-company-needs-an-ai-attorney",
    title:
      "Why Every Company Needs an Artificial Intelligence (AI) Attorney in the Age of Regulation",
    excerpt:
      "Business requires AI, and AI is becoming embedded across business operations and organizations. As AI expands, so does the growing set of legal, regulatory, and governance obligations that follow it.",
    topic: "AI Governance",
    read: "5 min read",
    published: "2025-03-12",
    linkedinUrl:
      "https://www.linkedin.com/in/fanyayoung/recent-activity/articles/",
    keywords: [
      "AI attorney",
      "AI governance",
      "AI regulation",
      "general counsel AI",
      "EU AI Act",
      "Colorado AI Act",
      "AI compliance",
    ],
    body: [
      {
        paragraphs: [
          "Business requires AI, and AI is rapidly becoming embedded across operations, products, hiring, and customer experience. As AI expands inside the enterprise, so does the growing set of legal, regulatory, and governance obligations that follow it — from the EU AI Act to the Colorado AI Act, evolving FTC guidance, sector-specific rules in healthcare and financial services, and a patchwork of state privacy laws now layering on automated-decision requirements.",
          "Most companies were not built with this regulatory surface in mind. The result is a widening gap between how teams want to ship AI features and the legal frameworks those features land in.",
        ],
      },
      {
        heading: "What an AI attorney actually does",
        paragraphs: [
          "An AI attorney is not a traditional product lawyer with a chatbot. The role sits at the intersection of legal, engineering, product, and operations — translating regulatory obligations into concrete controls, contract terms, model documentation, and review workflows that engineers and PMs can execute.",
          "In practice, that means model inventories and risk classification, vendor and data-rights diligence on every model and training source, acceptable-use and human-oversight policies, disclosure and consent language for users, and incident-response playbooks for hallucinations, bias incidents, and data leakage.",
        ],
      },
      {
        heading: "Why this can't sit only with outside counsel",
        paragraphs: [
          "Outside firms are essential for novel regulatory questions and litigation, but day-to-day AI risk decisions happen in stand-ups and sprint planning — not on a 30-day legal turnaround. Companies that wait for outside counsel to weigh in on each model release ship slower and accumulate undocumented risk between reviews.",
          "Embedded AI counsel — whether full-time, fractional, or advisory — gives executives a single accountable owner for AI risk, and gives engineering teams faster, more usable guidance.",
        ],
      },
      {
        heading: "The cost of waiting",
        paragraphs: [
          "Regulators are signaling clearly that AI-specific enforcement is coming, and contract counterparties are starting to require AI disclosures, audit rights, and indemnities. Companies without an AI governance function will increasingly fail enterprise procurement, lose deals, and face avoidable exposure on launches that could have been routed differently.",
          "The companies pulling ahead are the ones treating AI governance as a product capability — designed, staffed, and measured — rather than a compliance afterthought.",
        ],
      },
    ],
  },
  {
    slug: "ai-research-vs-ux-research-revenue",
    title:
      "You Can Optimize Tech with AI Research, But You Can't Maximize Revenue without UX Research",
    excerpt:
      "We are currently living through an obsession with model capability. Companies are pouring millions into AI research, asking 'can the model do it?' — but value comes from understanding whether users actually want it.",
    topic: "AI & Service Design",
    read: "2 min read",
    published: "2025-01-20",
    linkedinUrl:
      "https://www.linkedin.com/in/fanyayoung/recent-activity/articles/",
    keywords: [
      "AI research",
      "UX research",
      "service design",
      "AI product strategy",
      "AI revenue",
      "process optimization",
    ],
    body: [
      {
        paragraphs: [
          "We are currently living through an obsession with model capability. Companies are pouring millions into AI research — benchmarks, evals, fine-tuning, agentic frameworks — asking the same question: can the model do it?",
          "That is the wrong question to lead with. Capability tells you what is possible. It does not tell you what is valuable.",
        ],
      },
      {
        heading: "Capability without demand is cost",
        paragraphs: [
          "Every AI feature shipped without demand evidence is paid for twice — once in build cost, and again in maintenance, support, governance, and the opportunity cost of the feature you didn't build instead.",
          "Optimization improves what already exists. Maximization requires knowing which thing to build in the first place — and that is a research question, not a model question.",
        ],
      },
      {
        heading: "UX and service-design research is how revenue gets unlocked",
        paragraphs: [
          "Talking to users, mapping their workflows, observing the actual friction in their day — these are the inputs that tell you which AI capability is worth productizing. Without them, teams ship impressive demos that nobody pays for.",
          "The companies winning with AI right now are pairing strong model research with disciplined service-design research. They use AI to optimize the tech stack and UX research to make sure the right product is sitting on top of it.",
        ],
      },
    ],
  },
];

export const getArticleBySlug = (slug: string) =>
  articles.find((a) => a.slug === slug);
