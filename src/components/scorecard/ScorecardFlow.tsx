"use client";

import { useState, useCallback } from "react";
import { categories, totalQuestions } from "@/lib/scorecard-data";
import { calculateResults, type ScorecardResult } from "@/lib/scorecard-scoring";
import ScorecardLanding from "./ScorecardLanding";
import QuestionStep from "./QuestionStep";
import EmailCapture from "./EmailCapture";
import ResultsDisplay from "./ResultsDisplay";

type Stage = "landing" | "questions" | "email" | "results";

export type ContactInfo = {
  name: string;
  email: string;
  company: string;
  firmSize: string;
  sector: string;
};

export default function ScorecardFlow() {
  const [stage, setStage] = useState<Stage>("landing");
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState<ScorecardResult | null>(null);
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);

  // Flatten all questions
  const allQuestions = categories.flatMap((c) => c.questions);

  const handleStart = useCallback(() => {
    setStage("questions");
    setCurrentQuestion(0);
  }, []);

  const handleAnswer = useCallback(
    (questionId: number, value: number) => {
      const newAnswers = { ...answers, [questionId]: value };
      setAnswers(newAnswers);

      // Auto-advance after a short delay
      setTimeout(() => {
        if (currentQuestion < totalQuestions - 1) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          // All questions answered — go to email capture
          setStage("email");
        }
      }, 300);
    },
    [answers, currentQuestion]
  );

  const handleBack = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }, [currentQuestion]);

  const handleEmailSubmit = useCallback(
    async (info: ContactInfo) => {
      setContactInfo(info);
      const calculatedResult = calculateResults(answers);
      setResult(calculatedResult);

      // Save to API (fire and forget)
      try {
        await fetch("/api/scorecard", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...info,
            answers,
            result: calculatedResult,
          }),
        });
      } catch {
        // Non-blocking — results still show even if save fails
      }

      setStage("results");
    },
    [answers]
  );

  // Find current category for the current question
  const currentQ = allQuestions[currentQuestion];
  const currentCategory = categories.find((c) =>
    c.questions.some((q) => q.id === currentQ?.id)
  );
  const categoryIndex = categories.findIndex((c) => c === currentCategory);

  return (
    <div className="min-h-[calc(100vh-5rem)]">
      {stage === "landing" && <ScorecardLanding onStart={handleStart} />}

      {stage === "questions" && currentQ && currentCategory && (
        <QuestionStep
          question={currentQ}
          questionIndex={currentQuestion}
          totalQuestions={totalQuestions}
          categoryName={currentCategory.name}
          categoryIndex={categoryIndex}
          totalCategories={categories.length}
          selectedAnswer={answers[currentQ.id] || null}
          onAnswer={handleAnswer}
          onBack={handleBack}
          canGoBack={currentQuestion > 0}
        />
      )}

      {stage === "email" && <EmailCapture onSubmit={handleEmailSubmit} />}

      {stage === "results" && result && contactInfo && (
        <ResultsDisplay result={result} contactInfo={contactInfo} />
      )}
    </div>
  );
}
