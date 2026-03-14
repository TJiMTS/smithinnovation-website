import {
  Inbox,
  CircleFadingArrowUp,
  FolderKanban,
  Repeat2,
  Gauge,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const problems = [
  {
    icon: Inbox,
    title: "Replies start with a context hunt.",
    body: "Your team wastes time pulling together prior emails, notes, records, and task history before they can answer a client properly.",
  },
  {
    icon: CircleFadingArrowUp,
    title: "Admin depends on memory.",
    body: "Chasing documents, following up after meetings, and keeping internal tasks moving still relies too heavily on people remembering what comes next.",
  },
  {
    icon: FolderKanban,
    title: "Client information is fragmented.",
    body: "The context needed to do good work is spread across inboxes, spreadsheets, practice software, and meeting notes.",
  },
  {
    icon: Repeat2,
    title: "Skilled people are stuck in repetitive work.",
    body: "Qualified staff are still spending time on tasks that follow a repeatable pattern and should be systemised.",
  },
  {
    icon: Gauge,
    title: "Bottlenecks cap growth.",
    body: "Operational drag slows response times, creates inconsistency, and limits how much work your firm can handle well.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="The Problem"
          title="If your firm feels operationally heavier than it should, this is usually why."
          subtitle="We focus on the repeatable work that drains capacity inside UK accountancy and bookkeeping firms."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="border border-card-border bg-card-bg rounded-2xl p-6 hover:border-card-hover-border hover:bg-card-hover-bg transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <problem.icon className="w-5 h-5 text-accent" />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-3">
                {problem.title}
              </h3>

              <p className="text-muted text-sm leading-relaxed">
                {problem.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
