import type { Metadata } from "next";
import { Hammer, Target, BarChart3, Minimize2 } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "About — Built Inside a Live Accountancy Practice",
  description:
    "SIS grew out of a live accountancy practice. We now build AI workflow systems for UK accountancy and bookkeeping firms using what we learned there.",
  openGraph: {
    title: "About Smith Innovation Studio — Built Inside a Live Accountancy Practice",
    description:
      "SIS grew out of a live accountancy practice and now builds AI workflow systems for UK accountancy and bookkeeping firms.",
  },
};

const beliefs = [
  {
    icon: Hammer,
    title: "Build, don't theorise.",
    body: "We ship working software, not strategy documents. If it doesn't work in production, it doesn't count.",
  },
  {
    icon: Target,
    title: "Start with the problem.",
    body: "Technology is the answer to a business question, not the other way around. We understand what you need before we propose how to build it.",
  },
  {
    icon: BarChart3,
    title: "Prove it first.",
    body: "Every claim we make is backed by something running in production. We don't ask you to imagine the possibilities. We show you what changed.",
  },
  {
    icon: Minimize2,
    title: "Simple is hard, and worth it.",
    body: "The best systems feel obvious after they're built. Getting there requires discipline, not complexity.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground leading-tight mb-6">
            Built inside a live accountancy practice.
            <br />
            <span className="text-accent">Now focused on firms like yours.</span>
          </h1>
          <p className="text-muted text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Smith Innovation Studio grew out of work inside a real firm. We now
            help UK accountancy and bookkeeping firms reduce admin, improve
            response quality, and automate repetitive operational work with
            human oversight.
          </p>
        </div>
      </section>

      {/* Section 2: The Origin Story */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            label="Our Story"
            title="How SIS started"
            centered={false}
          />
          <div className="space-y-6 text-muted text-lg leading-relaxed -mt-8">
            <p>
              SIS didn&apos;t start as a technology company. It started as a
              question: what would happen if an accountancy firm was
              built on AI from the ground up?
            </p>
            <p>
              Not AI as a marketing buzzword. Not &ldquo;we use ChatGPT.&rdquo;
              A complete operating system where every routine workflow, every
              compliance check, every client communication, every internal
              process runs on intelligent automation.
            </p>
            <p className="text-foreground font-medium">
              We built that system. It runs a chartered accountancy firm today.
              Real clients. Real deadlines. Real regulatory requirements. Every
              day.
            </p>
            <p>
              Once we proved it worked, we asked the next question: who else
              needs this?
            </p>
            <p>
              The answer was clear. UK accountancy and bookkeeping firms are
              still carrying too much operational drag in client email, admin,
              compliance, and repetitive bookkeeping work. They do not need more
              hype. They need systems that work in the real world.
            </p>
            <p className="text-foreground font-medium">
              That&apos;s SIS. We build AI workflow systems for firms like the
              one that taught us what good operational automation actually
              requires.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: What We Believe */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            label="Our Principles"
            title="What we believe"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beliefs.map((belief) => (
              <div
                key={belief.title}
                className="p-8 rounded-2xl border border-card-border bg-card-bg hover:border-card-hover-border hover:bg-card-hover-bg transition-all duration-300"
              >
                <belief.icon className="text-accent mb-4" size={28} />
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {belief.title}
                </h3>
                <p className="text-muted leading-relaxed">{belief.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: CTA */}
      <CTASection
        headline="Start with one workflow."
        body="If you run a UK accountancy or bookkeeping firm and want to reduce admin or improve client response quality, start with the scorecard or book an audit."
        primaryCTA={{ label: "Take the Scorecard", href: "/scorecard" }}
        secondaryCTA={{
          label: "Book an AI Workflow Audit",
          href: "/contact?interest=AI%20Workflow%20Audit",
        }}
      />
    </>
  );
}
