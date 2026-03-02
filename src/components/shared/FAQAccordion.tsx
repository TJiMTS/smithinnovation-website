"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3 -mt-8">
      {items.map((item, i) => (
        <div
          key={i}
          className="border border-card-border rounded-xl overflow-hidden transition-colors"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-card-hover-bg transition-colors"
          >
            <span className="text-foreground font-medium pr-4">
              {item.question}
            </span>
            <ChevronDown
              size={20}
              className={`text-muted shrink-0 transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === i && (
            <div className="px-6 pb-6">
              <p className="text-muted leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
