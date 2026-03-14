import { categories } from "./scorecard-data";

export type Tier = "red" | "amber" | "yellow" | "light_green" | "green";
export type CategoryLabel = "Strength" | "Developing" | "Opportunity";

export type CategoryScore = {
  id: string;
  name: string;
  score: number;
  maxScore: number;
  percentage: number;
  label: CategoryLabel;
};

export type ScorecardResult = {
  totalScore: number;
  maxScore: number;
  percentage: number;
  tier: Tier;
  tierLabel: string;
  tierColor: string;
  categoryScores: CategoryScore[];
  recommendations: Recommendation[];
};

export type Recommendation = {
  categoryName: string;
  score: number;
  maxScore: number;
  explanation: string;
  action: string;
};

export function calculateResults(
  answers: Record<number, number>
): ScorecardResult {
  const categoryScores: CategoryScore[] = categories.map((category) => {
    const score = category.questions.reduce(
      (sum, q) => sum + (answers[q.id] || 0),
      0
    );
    const maxScore = category.questions.length * 4;
    const percentage = Math.round((score / maxScore) * 100);

    let label: CategoryLabel;
    if (score >= 15) label = "Strength";
    else if (score >= 10) label = "Developing";
    else label = "Opportunity";

    return {
      id: category.id,
      name: category.name,
      score,
      maxScore,
      percentage,
      label,
    };
  });

  const totalScore = categoryScores.reduce((sum, c) => sum + c.score, 0);
  const maxScore = 100;
  const percentage = Math.round((totalScore / maxScore) * 100);
  const tier = getTier(totalScore);
  const tierLabel = getTierLabel(tier);
  const tierColor = getTierColor(tier);

  const recommendations = generateRecommendations(categoryScores);

  return {
    totalScore,
    maxScore,
    percentage,
    tier,
    tierLabel,
    tierColor,
    categoryScores,
    recommendations,
  };
}

function getTier(score: number): Tier {
  if (score <= 30) return "red";
  if (score <= 50) return "amber";
  if (score <= 70) return "yellow";
  if (score <= 85) return "light_green";
  return "green";
}

function getTierLabel(tier: Tier): string {
  const labels: Record<Tier, string> = {
    red: "Early stage. Significant opportunity.",
    amber: "Foundations in place. Key gaps to address.",
    yellow: "Good progress. Ready for targeted automation.",
    light_green: "Strong position. Ready for systematic AI adoption.",
    green: "Advanced. Ready for a complete AI OS.",
  };
  return labels[tier];
}

function getTierColor(tier: Tier): string {
  const colors: Record<Tier, string> = {
    red: "#EF4444",
    amber: "#F59E0B",
    yellow: "#EAB308",
    light_green: "#22C55E",
    green: "#16A34A",
  };
  return colors[tier];
}

const categoryExplanations: Record<string, { low: string; action: string }> = {
  process_maturity: {
    low: "Your workflows vary depending on who does them, which makes automation harder and means quality depends on individual effort.",
    action:
      "Start by documenting your top 5 most repeated processes, step by step. This is the foundation everything else builds on.",
  },
  data_readiness: {
    low: "Your data is scattered across multiple systems and formats, making it difficult to extract insights or connect workflows.",
    action:
      "Consolidate your key data into cloud-based systems with consistent naming and structure. Focus on client and job data first.",
  },
  team_capacity: {
    low: "Your team is spending too much time on administrative work and manual processes, limiting their capacity for higher-value activities.",
    action:
      "Track how your team spends their time for two weeks. Identify the three most time-consuming repetitive tasks — those are your automation targets.",
  },
  technology_stack: {
    low: "Your technology tools aren't well connected, creating manual work and data silos between systems.",
    action:
      "Audit your current software stack. Identify which systems can connect via integrations and which should be replaced with cloud-based alternatives.",
  },
  leadership_alignment: {
    low: "Your leadership team hasn't yet aligned on AI/automation as a strategic priority, which will slow any implementation.",
    action:
      "Get leadership aligned with a short business case: pick one process, estimate the hours spent, and calculate what automation would save annually.",
  },
};

function generateRecommendations(
  categoryScores: CategoryScore[]
): Recommendation[] {
  // Sort by score (lowest first) and take bottom 3
  const sorted = [...categoryScores].sort((a, b) => a.score - b.score);
  const bottom3 = sorted.slice(0, 3);

  return bottom3.map((cat) => {
    const info = categoryExplanations[cat.id];
    return {
      categoryName: cat.name,
      score: cat.score,
      maxScore: cat.maxScore,
      explanation: info?.low || "",
      action: info?.action || "",
    };
  });
}

export function getCTAContent(tier: Tier) {
  if (tier === "red") {
    return {
      headline: "There's work to do before automation makes sense.",
      body: "Your firm has significant foundational gaps to address first. We've sent your results by email with specific steps you can take now to get ready. When you're further along, the scorecard will be here.",
      ctaLabel: "Retake in 3 months",
      ctaHref: "/scorecard",
    };
  }
  if (tier === "light_green" || tier === "green") {
    return {
      headline: "Your firm is well positioned. Let's talk about what's next.",
      body: "You've built strong foundations. The next step is either a targeted automation or a full AI OS installation. Let's discuss which makes sense for your firm.",
      ctaLabel: "Talk to us",
      ctaHref: "/contact",
    };
  }
  // amber or yellow — prime audit candidate
  return {
    headline: "Your firm has clear opportunities. Let's find the best ones.",
    body: "An AI Workflow Audit helps pinpoint the first operational workflow worth fixing, maps the handoffs around it, and gives you a practical starting plan.",
    ctaLabel: "Book an AI Workflow Audit",
    ctaHref: "/contact?interest=AI%20Workflow%20Audit",
  };
}
