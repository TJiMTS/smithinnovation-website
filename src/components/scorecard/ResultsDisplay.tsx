"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Download,
  ArrowRight,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import type { ScorecardResult } from "@/lib/scorecard-scoring";
import { getCTAContent } from "@/lib/scorecard-scoring";
import type { ContactInfo } from "./ScorecardFlow";

type Props = {
  result: ScorecardResult;
  contactInfo: ContactInfo;
};

export default function ResultsDisplay({ result, contactInfo }: Props) {
  const [downloadingPdf, setDownloadingPdf] = useState(false);
  const cta = getCTAContent(result.tier);

  const handleDownloadPDF = async () => {
    setDownloadingPdf(true);
    try {
      const { generateScorecardPDF } = await import("@/lib/scorecard-pdf");
      await generateScorecardPDF(result, contactInfo);
    } catch (err) {
      console.error("PDF generation failed:", err);
    } finally {
      setDownloadingPdf(false);
    }
  };

  return (
    <section className="pt-28 pb-28 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Score Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">
            Your AI Readiness Score
          </p>

          {/* Score circle */}
          <div className="relative w-48 h-48 mx-auto mb-6">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
              <circle
                cx="100"
                cy="100"
                r="88"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                className="text-card-border"
              />
              <circle
                cx="100"
                cy="100"
                r="88"
                fill="none"
                stroke={result.tierColor}
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${(result.percentage / 100) * 553} 553`}
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-extrabold text-foreground">
                {result.totalScore}
              </span>
              <span className="text-muted text-sm">out of 100</span>
            </div>
          </div>

          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
            style={{
              backgroundColor: `${result.tierColor}15`,
              color: result.tierColor,
              border: `1px solid ${result.tierColor}30`,
            }}
          >
            {result.totalScore > 70 ? (
              <CheckCircle2 size={16} />
            ) : result.totalScore > 30 ? (
              <TrendingUp size={16} />
            ) : (
              <AlertCircle size={16} />
            )}
            {result.tierLabel}
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-foreground mb-6">
            Category Breakdown
          </h3>
          <div className="space-y-5">
            {result.categoryScores.map((cat) => (
              <div key={cat.id}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-foreground font-medium text-sm">
                    {cat.name}
                  </span>
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        cat.label === "Strength"
                          ? "bg-green-500/10 text-green-400"
                          : cat.label === "Developing"
                          ? "bg-yellow-500/10 text-yellow-400"
                          : "bg-red-500/10 text-red-400"
                      }`}
                    >
                      {cat.label}
                    </span>
                    <span className="text-muted text-sm font-mono w-12 text-right">
                      {cat.score}/{cat.maxScore}
                    </span>
                  </div>
                </div>
                <div className="w-full h-2.5 bg-card-bg rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{
                      width: `${cat.percentage}%`,
                      backgroundColor:
                        cat.label === "Strength"
                          ? "#22C55E"
                          : cat.label === "Developing"
                          ? "#EAB308"
                          : "#EF4444",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-foreground mb-6">
            Your Top Recommendations
          </h3>
          <div className="space-y-4">
            {result.recommendations.map((rec, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-card-border bg-card-bg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <span className="text-accent font-bold text-sm">
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold mb-1">
                      {rec.categoryName}{" "}
                      <span className="text-muted font-normal text-sm">
                        — {rec.score}/{rec.maxScore}
                      </span>
                    </h4>
                    <p className="text-muted text-sm leading-relaxed mb-2">
                      {rec.explanation}
                    </p>
                    <p className="text-foreground text-sm font-medium">
                      → {rec.action}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download PDF */}
        <div className="flex justify-center mb-16">
          <button
            onClick={handleDownloadPDF}
            disabled={downloadingPdf}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-card-border bg-card-bg text-foreground hover:border-card-hover-border hover:bg-card-hover-bg transition-all text-sm font-medium disabled:opacity-50"
          >
            <Download size={16} />
            {downloadingPdf ? "Generating PDF..." : "Download PDF Report"}
          </button>
        </div>

        {/* CTA */}
        <div className="p-10 rounded-2xl bg-surface-contrast text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-surface-contrast-text mb-4">
            {cta.headline}
          </h3>
          <p className="text-surface-contrast-text/70 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            {cta.body}
          </p>
          <Link
            href={cta.ctaHref}
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-accent-foreground font-semibold rounded-full transition-all duration-200"
          >
            {cta.ctaLabel}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
