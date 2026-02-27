"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, LayoutGrid, RefreshCw, Rocket } from "lucide-react";

const steps = [
  {
    num: 1,
    icon: Search,
    title: "Discovery",
    description:
      "We explore your goals, audience, and technical requirements to build a clear project roadmap.",
  },
  {
    num: 2,
    icon: LayoutGrid,
    title: "Architecture",
    description:
      "Scalable system design and high-performance infrastructure planned for growth.",
  },
  {
    num: 3,
    icon: RefreshCw,
    title: "Iterative Build",
    description:
      "Accelerated development sprints, continuous testing, and feedback-driven iterations.",
  },
  {
    num: 4,
    icon: Rocket,
    title: "Launch & Scale",
    description:
      "Launch with confidence, then monitor and optimize for long-term success.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-28 px-6 bg-[#0A0B10]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#4F46E5] font-mono text-sm tracking-widest uppercase mb-3">
            The Process
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            How We Work
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[52px] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#4F46E5]/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Step badge */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-[#4F46E5]/10 border-2 border-[#4F46E5]/40 flex items-center justify-center backdrop-blur-sm">
                      <step.icon className="w-6 h-6 text-[#4F46E5]" strokeWidth={1.5} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#4F46E5] flex items-center justify-center">
                      <span className="text-white text-xs font-bold">
                        {step.num}
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-[250px] mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
