import { useState } from "react";
import QuizShell from "./QuizShell";
import QuestionStep from "./QuestionStep";
import Interstitial from "./Interstitial";
import LoadingScreen from "./LoadingScreen";
import ResultScreen from "./ResultScreen";
import { STEPS } from "./stepData";
import { Answers } from "./types";

const TOTAL_STEPS = 14;

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
    ttq: {
      track: (event: string, params?: Record<string, unknown>) => void;
      page: () => void;
    };
  }
}

type Phase =
  | { kind: "question"; step: number }
  | { kind: "interstitial" }
  | { kind: "loading" }
  | { kind: "result" };

const QuizFlow = () => {
  const [phase, setPhase] = useState<Phase>({ kind: "question", step: 1 });
  const [answers, setAnswers] = useState<Answers>({});

  const goToStep = (step: number) => {
    if (step > TOTAL_STEPS) {
      setPhase({ kind: "loading" });
    } else {
      setPhase({ kind: "question", step });
    }
  };

  const handleSingle = (step: number, optionId: string) => {
    setAnswers((prev) => ({ ...prev, [step]: optionId }));

    if (step === 1) {
      // Meta Pixel
      if (typeof window.fbq === "function") {
        window.fbq("track", "ViewContent", {
          content_name: "Quiz Mujer Sabia en Accion",
          content_category: "Quiz Step 1",
        });
      }
      // TikTok Pixel
      if (typeof window.ttq !== "undefined") {
        window.ttq.track("ViewContent", {
          content_name: "Quiz Mujer Sabia en Accion",
        });
      }
    }

    if (step === 2) {
      setPhase({ kind: "interstitial" });
    } else {
      goToStep(step + 1);
    }
  };

  const handleMulti = (step: number, optionIds: string[]) => {
    setAnswers((prev) => ({ ...prev, [step]: optionIds }));
    goToStep(step + 1);
  };

  if (phase.kind === "result") {
    return <ResultScreen />;
  }

  if (phase.kind === "loading") {
    const finalAnswers = answers;
    // eslint-disable-next-line no-console
    console.log("Final quiz answers:", finalAnswers);
    sessionStorage.setItem("quizAnswers", JSON.stringify(finalAnswers));

    // Meta Pixel
    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead", {
        content_name: "Quiz Completo - Mujer Sabia en Accion",
      });
    }
    // TikTok Pixel
    if (typeof window.ttq !== "undefined") {
      window.ttq.track("SubmitForm", {
        content_name: "Quiz Completo - Mujer Sabia en Accion",
      });
    }

    return <LoadingScreen onComplete={() => setPhase({ kind: "result" })} />;
  }

  if (phase.kind === "interstitial") {
    return (
      <QuizShell currentStep={2} totalSteps={TOTAL_STEPS}>
        <Interstitial onContinue={() => goToStep(3)} />
      </QuizShell>
    );
  }

  const step = phase.step;
  const config = STEPS.find((s) => s.step === step);
  if (!config) return null;

  return (
    <QuizShell currentStep={step} totalSteps={TOTAL_STEPS}>
      <QuestionStep
        config={config}
        onSingle={(id) => handleSingle(step, id)}
        onMulti={(ids) => handleMulti(step, ids)}
      />
    </QuizShell>
  );
};

export default QuizFlow;
