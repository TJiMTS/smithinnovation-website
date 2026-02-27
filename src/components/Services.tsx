"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Globe, Palette } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile Dev",
    description:
      "Native and cross-platform experiences that feel seamless.",
    tags: ["iOS", "Android", "Flutter", "React Native"],
  },
  {
    icon: Globe,
    title: "Web Platforms",
    description:
      "Scalable enterprise solutions and high-conversion SaaS tools.",
    tags: ["Next.js", "TypeScript", "Node.js"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centric interfaces designed for retention and intuition.",
    tags: ["Figma", "Prototyping", "Design Systems"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Services() {
  return (
    <section id="services" className="relative py-28 px-6 bg-[#0A0B10]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#4F46E5] font-mono text-sm tracking-widest uppercase mb-3">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            What We Build
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-[#4F46E5]/50 transition-all duration-300 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.08),transparent_70%)]" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-[#4F46E5]/10 border border-[#4F46E5]/20 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-[#4F46E5]" strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono text-[#9CA3AF] bg-white/5 border border-white/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
