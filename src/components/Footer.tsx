"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative py-28 px-6 bg-[#0A0B10]">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#4F46E5] font-mono text-sm tracking-widest uppercase mb-3">
            Let&apos;s Build
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to turn &ldquo;What if&rdquo; into
            <br />
            &ldquo;What&apos;s next&rdquo;?
          </h2>

          <div className="flex flex-col items-center gap-4 mb-12">
            <p className="text-[#9CA3AF] text-lg">
              hello@smithinnovation.studio
              <span className="mx-3 text-white/20">|</span>
              Sharjah Media City, Sharjah, UAE
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-16">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#9CA3AF] hover:text-white hover:border-[#4F46E5]/50 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#9CA3AF] hover:text-white hover:border-[#4F46E5]/50 transition-all"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#9CA3AF] hover:text-white hover:border-[#4F46E5]/50 transition-all"
              aria-label="Website"
            >
              <Globe size={18} />
            </a>
          </div>
        </motion.div>

        {/* Decorative star */}
        <div className="flex justify-end">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-[#9CA3AF]/40"
          >
            <path
              d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5">
          <p className="text-[#9CA3AF]/50 text-xs">
            &copy; {new Date().getFullYear()} Smith Innovation Studio. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
