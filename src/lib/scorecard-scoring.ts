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
    red: "Early stage. Foundations need work.",
    amber: "Some readiness. First workflow needs clearer foundations.",
    yellow: "Good base. Ready to assess a first workflow.",
    light_green: "Strong base. Ready to scope a first workflow.",
    green: "Very strong base. Ready for systematic workflow automation.",
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
    low: "Key workflows still depend too heavily on who picks up the work, which makes improvement harder and leaves quality tied to individual effort.",
    action:
      "Write down one repeatable workflow in detail first, step by step. Good starting candidates are client email handling, onboarding document collection, or bookkeeping review follow-up.",
  },
  data_readiness: {
    low: "The context needed for replies, follow-ups, and handoffs is spread across inboxes, notes, spreadsheets, and systems, which makes workflow automation unreliable.",
    action:
      "Choose one target workflow and map where its inputs live today. Start with client records, prior emails, open tasks, document status, and any notes staff rely on.",
  },
  team_capacity: {
    low: "Skilled staff are still carrying too much repeatable admin and retrieval work, which creates clear automation potential but also raises the stakes on choosing the right first workflow.",
    action:
      "Track repeatable tasks for two weeks and rank them by frequency, pain, and risk. Prioritise the workflow that is frequent, painful, and still safe with human approval.",
  },
  technology_stack: {
    low: "Your tools still create too many manual handoffs and context gaps, which makes it harder to improve an end-to-end workflow cleanly.",
    action:
      "List the systems involved in one target workflow and note where people copy, chase, re-enter, or reconcile information. Those handoffs are the first places to tighten.",
  },
  leadership_alignment: {
    low: "Without a clear owner, budget path, and success measure, the first workflow will struggle to move from idea to live operational use.",
    action:
      "Pick one owner, one workflow, and one measurable outcome such as faster client replies, less document chasing, or less bookkeeping review time.",
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
      headline: "Tighten the workflow foundations first.",
      body: "Your score suggests the next best move is internal cleanup, not a paid implementation yet. We&apos;ve emailed practical steps around process, data, ownership, and workflow selection.",
      ctaLabel: "Retake the scorecard later",
      ctaHref: "/scorecard",
    };
  }
  if (tier === "amber") {
    return {
      headline: "You have enough signal to assess the first workflow properly.",
      body: "The AI Workflow Audit helps separate weak-but-fixable foundations from the workflow that is actually worth tackling first.",
      ctaLabel: "See the AI Workflow Audit",
      ctaHref: "/ai-workflow-audit",
    };
  }
  return {
    headline: "You look ready to move from scorecard to scoped workflow.",
    body: "The next practical step is an AI Workflow Audit: shortlist the best workflow, confirm the controls around it, and leave with a clear brief for what should be built first.",
    ctaLabel: "See the AI Workflow Audit",
    ctaHref: "/ai-workflow-audit",
  };
}
