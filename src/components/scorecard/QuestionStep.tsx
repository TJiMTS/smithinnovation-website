import { ArrowLeft } from "lucide-react";
import type { Question } from "@/lib/scorecard-data";

type Props = {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  categoryName: string;
  categoryIndex: number;
  totalCategories: number;
  selectedAnswer: number | null;
  onAnswer: (questionId: number, value: number) => void;
  onBack: () => void;
  canGoBack: boolean;
};

export default function QuestionStep({
  question,
  questionIndex,
  totalQuestions,
  categoryName,
  categoryIndex,
  totalCategories,
  selectedAnswer,
  onAnswer,
  onBack,
  canGoBack,
}: Props) {
  const progress = ((questionIndex + 1) / totalQuestions) * 100;

  return (
    <section className="pt-28 pb-16 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-accent font-mono text-xs tracking-widest uppercase">
              {categoryName}
            </span>
            <span className="text-muted/50 text-xs font-mono">
              {questionIndex + 1} / {totalQuestions}
            </span>
          </div>
          <div className="w-full h-1.5 bg-card-bg rounded-full overflow-hidden">
            <div
              className="h-full bg-accent rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          {/* Category dots */}
          <div className="flex items-center gap-1.5 mt-3">
            {Array.from({ length: totalCategories }).map((_, i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  i < categoryIndex
                    ? "bg-accent"
                    : i === categoryIndex
                    ? "bg-accent/50"
                    : "bg-card-border"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Back button */}
        {canGoBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-muted hover:text-foreground text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={16} />
            Previous question
          </button>
        )}

        {/* Question */}
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-8 leading-snug">
          {question.text}
        </h2>

        {/* Answer options */}
        <div className="space-y-3">
          {question.options.map((option, i) => {
            const value = i + 1;
            const isSelected = selectedAnswer === value;

            return (
              <button
                key={i}
                onClick={() => onAnswer(question.id, value)}
                className={`w-full text-left p-5 rounded-xl border transition-all duration-200 group ${
                  isSelected
                    ? "border-accent bg-accent/10 ring-1 ring-accent/30"
                    : "border-card-border bg-card-bg hover:border-card-hover-border hover:bg-card-hover-bg"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isSelected
                        ? "border-accent bg-accent"
                        : "border-muted/30 group-hover:border-muted/50"
                    }`}
                  >
                    {isSelected && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                  <span
                    className={`text-sm leading-relaxed ${
                      isSelected ? "text-foreground" : "text-muted"
                    }`}
                  >
                    {option}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
