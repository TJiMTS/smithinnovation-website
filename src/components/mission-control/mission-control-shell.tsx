"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import BodyMode from "@/components/mission-control/body-mode";

const navItems = [
  { href: "/mission-control", label: "Overview" },
  { href: "/mission-control/task-board", label: "Task Board" },
  { href: "/mission-control/calendar", label: "Calendar" },
  { href: "/mission-control/projects", label: "Projects" },
  { href: "/mission-control/docs", label: "Docs" },
  { href: "/mission-control/memory", label: "Memory" },
  { href: "/mission-control/team", label: "Team" },
];

export default function MissionControlShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#070b11] text-white">
      <BodyMode />
      <div className="mx-auto max-w-[1600px] px-4 py-6 lg:px-6">
        <div className="flex gap-6">
          <aside className="sticky top-6 h-[calc(100vh-3rem)] w-72 shrink-0 rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.35em] text-amber-300/80">Mission Control</p>
              <h1 className="mt-3 text-2xl font-semibold">SIS Ops Deck</h1>
              <p className="mt-2 text-sm text-white/60">Standalone local control panel for SIS operations.</p>
            </div>

            <nav className="space-y-2 text-sm">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block rounded-2xl px-3 py-2 transition ${
                      active
                        ? "bg-amber-400/15 text-white"
                        : "text-white/70 hover:bg-white/8 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </aside>

          <main className="min-w-0 flex-1 space-y-6">
            <section className="rounded-[28px] border border-white/10 bg-[linear-gradient(140deg,rgba(217,119,6,0.18),rgba(255,255,255,0.03))] p-6 shadow-2xl shadow-black/20">
              <p className="text-xs uppercase tracking-[0.35em] text-amber-300/80">{title}</p>
              <h2 className="mt-3 text-3xl font-semibold">{subtitle}</h2>
            </section>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
