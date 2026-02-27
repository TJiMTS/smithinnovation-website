"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Layers } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Performance First",
    description:
      "Performance informs every decision, from architecture to deployment.",
  },
  {
    icon: Shield,
    title: "Security Centric",
    description:
      "Enterprise-grade security practices built into every layer.",
  },
  {
    icon: Layers,
    title: "Future Proof",
    description:
      "Flexible, maintainable codebases designed to evolve with your business.",
  },
];

export default function Philosophy() {
  return (
    <section className="relative py-28 px-6 bg-[#0A0B10]">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#4F46E5] font-mono text-sm tracking-widest uppercase mb-3">
            Why Smith?
          </p>

          <blockquote className="text-2xl md:text-4xl font-extrabold text-white leading-tight mb-16 max-w-4xl mx-auto">
            &ldquo;We don&apos;t just write code; we solve business problems.
            Our philosophy is rooted in the belief that great software should be
            invisible&mdash;it just works.&rdquo;
          </blockquote>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-[#4F46E5]/10 border border-[#4F46E5]/20 flex items-center justify-center mb-4 mx-auto">
                <value.icon
                  className="w-6 h-6 text-[#4F46E5]"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {value.title}
              </h3>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
