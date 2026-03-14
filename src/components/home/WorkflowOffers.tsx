import Link from "next/link";
import { Mail, ShieldCheck, BookOpenText } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const offers = [
  {
    icon: Mail,
    title: "Client Email Intelligence",
    body: "When a client email arrives, the system gathers context from records, prior communications, notes, and task history, then drafts a response for your team to approve.",
    examples: [
      "Prior emails and notes",
      "Client records and task history",
      "Human-approved draft replies",
    ],
    outcome: "Faster replies without the context hunt before every response.",
    href: "/client-email-intelligence",
    badge: "Most common first workflow",
    cta: "Explore this workflow",
  },
  {
    icon: ShieldCheck,
    title: "AI Admin & Compliance Workflows",
    body: "Automate onboarding chases, document collection, reminders, meeting follow-up, AML support tasks, and internal routing.",
    examples: [
      "Onboarding and document chases",
      "Meeting and follow-up workflows",
      "Internal handoffs and reminders",
    ],
    outcome: "Less manual follow-up, fewer dropped tasks, and better operational consistency.",
    href: "/contact?interest=AI%20Admin%20%26%20Compliance%20Workflows",
    cta: "Book an audit for this workflow",
  },
  {
    icon: BookOpenText,
    title: "AI-Assisted Bookkeeping Operations",
    body: "Reduce repetitive review work with supervised AI categorisation suggestions, discrepancy checks, and workflow support for your bookkeeping team.",
    examples: [
      "Supervised categorisation support",
      "Discrepancy checks",
      "Review queue assistance",
    ],
    outcome: "More consistent bookkeeping review work with less repetitive effort from skilled staff.",
    href: "/contact?interest=AI-Assisted%20Bookkeeping%20Operations",
    cta: "Book an audit for this workflow",
  },
];

export default function WorkflowOffers() {
  return (
    <section id="offers" className="py-28 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="What We Build"
          title="Three workflow systems we start with most often"
          subtitle="Most firms begin with one painful workflow, prove the value, and expand only after it earns its place."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className={`group border bg-card-bg rounded-2xl p-8 sm:p-10 hover:border-card-hover-border hover:bg-card-hover-bg transition-all duration-300 ${
                offer.badge
                  ? "border-accent/30 bg-accent/10"
                  : "border-card-border"
              }`}
            >
              {offer.badge && (
                <p className="text-accent font-mono text-[11px] tracking-[0.24em] uppercase mb-5">
                  {offer.badge}
                </p>
              )}
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <offer.icon className="w-6 h-6 text-accent" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                {offer.title}
              </h3>

              <p className="text-muted leading-relaxed mb-6">{offer.body}</p>

              <ul className="space-y-3 mb-8">
                {offer.examples.map((example) => (
                  <li
                    key={example}
                    className="flex items-start gap-3 text-sm text-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{example}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-divider pt-6 mb-8">
                <p className="text-accent font-mono text-[11px] tracking-[0.24em] uppercase mb-2">
                  Typical outcome
                </p>
                <p className="text-sm text-foreground leading-relaxed">
                  {offer.outcome}
                </p>
              </div>

              <Link
                href={offer.href}
                className="text-accent hover:text-accent-hover font-medium text-sm transition-colors inline-flex items-center gap-1"
              >
                {offer.cta}
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
