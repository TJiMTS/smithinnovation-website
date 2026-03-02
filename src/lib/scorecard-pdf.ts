import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  pdf,
} from "@react-pdf/renderer";
import { createElement } from "react";
import type { ScorecardResult } from "./scorecard-scoring";
import type { ContactInfo } from "@/components/scorecard/ScorecardFlow";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
    backgroundColor: "#FFFFFF",
  },
  header: {
    marginBottom: 30,
    borderBottomWidth: 2,
    borderBottomColor: "#D97706",
    paddingBottom: 20,
  },
  brandName: {
    fontSize: 10,
    color: "#D97706",
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  title: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: "#111827",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 11,
    color: "#6B7280",
  },
  scoreSection: {
    flexDirection: "row",
    marginBottom: 30,
    gap: 20,
  },
  scoreBox: {
    width: 140,
    padding: 20,
    backgroundColor: "#F9FAFB",
    borderRadius: 8,
    alignItems: "center",
  },
  scoreValue: {
    fontSize: 36,
    fontFamily: "Helvetica-Bold",
    color: "#111827",
  },
  scoreLabel: {
    fontSize: 9,
    color: "#6B7280",
    marginTop: 4,
  },
  tierBox: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F9FAFB",
    borderRadius: 8,
    justifyContent: "center",
  },
  tierLabel: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    color: "#111827",
    marginBottom: 6,
  },
  tierDescription: {
    fontSize: 10,
    color: "#6B7280",
    lineHeight: 1.5,
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    color: "#111827",
    marginBottom: 14,
    marginTop: 10,
  },
  categoryRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 10,
  },
  categoryName: {
    width: 140,
    fontSize: 10,
    color: "#374151",
  },
  barContainer: {
    flex: 1,
    height: 10,
    backgroundColor: "#F3F4F6",
    borderRadius: 5,
  },
  bar: {
    height: 10,
    borderRadius: 5,
  },
  categoryScore: {
    width: 50,
    fontSize: 9,
    color: "#6B7280",
    textAlign: "right",
  },
  categoryLabel: {
    width: 70,
    fontSize: 8,
    textAlign: "center",
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 10,
  },
  recommendationCard: {
    marginBottom: 14,
    padding: 14,
    backgroundColor: "#F9FAFB",
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: "#D97706",
  },
  recHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  recTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: "#111827",
  },
  recScore: {
    fontSize: 9,
    color: "#6B7280",
  },
  recText: {
    fontSize: 9,
    color: "#6B7280",
    lineHeight: 1.5,
    marginBottom: 6,
  },
  recAction: {
    fontSize: 9,
    color: "#111827",
    fontFamily: "Helvetica-Bold",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    paddingTop: 10,
  },
  footerText: {
    fontSize: 8,
    color: "#9CA3AF",
  },
});

function getBarColor(label: string): string {
  if (label === "Strength") return "#22C55E";
  if (label === "Developing") return "#EAB308";
  return "#EF4444";
}

function getLabelStyle(label: string) {
  if (label === "Strength") return { backgroundColor: "#DCFCE7", color: "#166534" };
  if (label === "Developing") return { backgroundColor: "#FEF9C3", color: "#854D0E" };
  return { backgroundColor: "#FEE2E2", color: "#991B1B" };
}

function ScorecardPDFDocument({
  result,
  contactInfo,
}: {
  result: ScorecardResult;
  contactInfo: ContactInfo;
}) {
  const date = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return createElement(
    Document,
    null,
    createElement(
      Page,
      { size: "A4", style: styles.page },
      // Header
      createElement(
        View,
        { style: styles.header },
        createElement(Text, { style: styles.brandName }, "SMITH INNOVATION STUDIO"),
        createElement(Text, { style: styles.title }, "AI Readiness Scorecard"),
        createElement(
          Text,
          { style: styles.subtitle },
          `Prepared for ${contactInfo.name}${contactInfo.company ? ` at ${contactInfo.company}` : ""} — ${date}`
        )
      ),

      // Score + Tier
      createElement(
        View,
        { style: styles.scoreSection },
        createElement(
          View,
          { style: styles.scoreBox },
          createElement(Text, { style: styles.scoreValue }, String(result.totalScore)),
          createElement(Text, { style: styles.scoreLabel }, "out of 100")
        ),
        createElement(
          View,
          { style: styles.tierBox },
          createElement(Text, { style: styles.tierLabel }, result.tierLabel),
          createElement(
            Text,
            { style: styles.tierDescription },
            result.tier === "red"
              ? "Your firm has significant foundational work to do before AI automation will deliver value. Focus on the recommendations below."
              : result.tier === "amber" || result.tier === "yellow"
              ? "Your firm has clear opportunities for AI automation. The recommendations below highlight the best places to start."
              : "Your firm is well positioned for systematic AI adoption. The recommendations below will help you maximise impact."
          )
        )
      ),

      // Category Breakdown
      createElement(Text, { style: styles.sectionTitle }, "Category Breakdown"),
      ...result.categoryScores.map((cat) => {
        const labelColors = getLabelStyle(cat.label);
        return createElement(
          View,
          { key: cat.id, style: styles.categoryRow },
          createElement(Text, { style: styles.categoryName }, cat.name),
          createElement(
            View,
            { style: styles.barContainer },
            createElement(View, {
              style: {
                ...styles.bar,
                width: `${cat.percentage}%`,
                backgroundColor: getBarColor(cat.label),
              },
            })
          ),
          createElement(
            Text,
            {
              style: {
                ...styles.categoryLabel,
                backgroundColor: labelColors.backgroundColor,
                color: labelColors.color,
              },
            },
            cat.label
          ),
          createElement(
            Text,
            { style: styles.categoryScore },
            `${cat.score}/${cat.maxScore}`
          )
        );
      }),

      // Recommendations
      createElement(
        Text,
        { style: { ...styles.sectionTitle, marginTop: 24 } },
        "Top Recommendations"
      ),
      ...result.recommendations.map((rec, i) =>
        createElement(
          View,
          { key: i, style: styles.recommendationCard },
          createElement(
            View,
            { style: styles.recHeader },
            createElement(
              Text,
              { style: styles.recTitle },
              `${i + 1}. ${rec.categoryName}`
            ),
            createElement(
              Text,
              { style: styles.recScore },
              `${rec.score}/${rec.maxScore}`
            )
          ),
          createElement(Text, { style: styles.recText }, rec.explanation),
          createElement(
            Text,
            { style: styles.recAction },
            `Next step: ${rec.action}`
          )
        )
      ),

      // Footer
      createElement(
        View,
        { style: styles.footer },
        createElement(
          Text,
          { style: styles.footerText },
          "smithinnovation.studio"
        ),
        createElement(
          Text,
          { style: styles.footerText },
          "hello@smithinnovation.studio"
        )
      )
    )
  );
}

export async function generateScorecardPDF(
  result: ScorecardResult,
  contactInfo: ContactInfo
) {
  const doc = createElement(ScorecardPDFDocument, { result, contactInfo });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const blob = await pdf(doc as any).toBlob();

  // Trigger download
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `AI-Readiness-Scorecard-${contactInfo.name.replace(/\s+/g, "-")}.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
