import SectionHeading from "@/components/SectionHeading";

const PROJECTS = [
  {
    title: "Manufacturing ERP System",
    summary:
      "Converted a formula-driven Excel/Google Sheets workflow into a full production system covering Master Data, Procurement, Multi-location Inventory (FIFO + weighted-average costing), BOM-driven Manufacturing, Sales, and a complete double-entry Finance ledger with Indian GST compliance - plus a generic multi-level Approval engine reused across HR & Payroll, CRM, Projects/Timesheets, Asset Management, and Helpdesk/Quality modules.",
    stack: ["React Native", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Redis", "Celery"],
    highlights: [
      "Clean Architecture on both mobile app and backend",
      "38 database migrations, fully async SQLAlchemy 2 data layer",
      "Reusable approval engine instead of one-off logic per module",
      "Barcode label and PDF export generation",
    ],
  },
  {
    title: "Amazon Market Intelligence Platform",
    summary:
      "Enterprise platform for analyzing Amazon product markets: identifies entry opportunities with AI-powered scoring, monitors competitor metrics, forecasts trends, and generates optimized Amazon listings using NVIDIA NIM LLMs - built for sellers who need data-driven market entry decisions instead of guesswork.",
    stack: [".NET 8", "React 19", "Python", "FastAPI", "SQL Server", "CQRS", "NVIDIA NIM"],
    highlights: [
      "CQRS + MediatR on Clean Architecture (.NET 8 Web API)",
      "Multi-tier scraping fallback chain for resilient data collection",
      "Anomaly detection and trend forecasting on market data",
      "AI-generated, optimized listing content via LLM integration",
    ],
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="bg-white px-6 py-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Selected Work" title="Real systems, not slideware." />
        <div className="grid gap-8 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <div key={p.title} className="flex flex-col rounded-lg border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-black">{p.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">{p.summary}</p>

              <ul className="mt-5 space-y-2">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-gray-700">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-brand-red/30 bg-brand-red/5 px-3 py-1 text-xs font-semibold text-brand-red"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
