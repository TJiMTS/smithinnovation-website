"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Project Alpha",
    description:
      "Fintech mobile app featuring biometric security and real-time data visualization.",
    tags: ["React Native", "Node.js", "AWS"],
    gradient: "from-indigo-600/20 to-purple-600/20",
  },
  {
    title: "Project Nexus",
    description:
      "Headless commerce platform handling 1M+ monthly sessions with sub-second load times.",
    tags: ["Next.js", "Shopify", "Vercel"],
    gradient: "from-purple-600/20 to-pink-600/20",
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-28 px-6 bg-[#0A0B10]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#4F46E5] font-mono text-sm tracking-widest uppercase mb-3">
            Featured Work
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Our Latest Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative rounded-2xl border border-white/10 overflow-hidden bg-white/[0.02] hover:border-[#4F46E5]/40 transition-all duration-300"
            >
              {/* Project Image Placeholder */}
              <div
                className={`relative h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
              >
                <div className="w-48 h-32 rounded-xl bg-white/10 border border-white/10 backdrop-blur-sm flex items-center justify-center">
                  <div className="space-y-2">
                    <div className="w-32 h-2 rounded bg-white/20" />
                    <div className="w-24 h-2 rounded bg-white/15" />
                    <div className="w-28 h-2 rounded bg-white/10" />
                  </div>
                </div>

                {/* Hover arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
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
        </div>
      </div>
    </section>
  );
}
