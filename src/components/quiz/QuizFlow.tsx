import { useState } from "react";
import QuizShell from "./QuizShell";
import QuestionStep from "./QuestionStep";
import Interstitial from "./Interstitial";
import EmailCaptureStep from "./EmailCaptureStep";
import LoadingScreen from "./LoadingScreen";
import { STEPS } from "./stepData";
import { Answers } from "./types";

const TOTAL_STEPS = 15;
const VSL_URL = "https://sua-vsl-aqui.com";

type Phase =
  | { kind: "question"; step: number }
  | { kind: "interstitial" }
  | { kind: "loading" };

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

  const handleEmailSubmit = (data: { name: string; email: string }) => {
    setAnswers((prev) => ({ ...prev, 15: data }));
    setPhase({ kind: "loading" });
  };

  if (phase.kind === "loading") {
    const finalAnswers = answers;
    // eslint-disable-next-line no-console
    console.log("Final quiz answers:", finalAnswers);
    return (
      <LoadingScreen
        onComplete={() => {
          window.location.href = VSL_URL;
        }}
      />
    );
  }

  if (phase.kind === "interstitial") {
    return (
      <QuizShell currentStep={2} totalSteps={TOTAL_STEPS}>
        <Interstitial onContinue={() => goToStep(3)} />
      </QuizShell>
    );
  }

  const step = phase.step;

  if (step === 15) {
    return (
      <QuizShell currentStep={15} totalSteps={TOTAL_STEPS}>
        <EmailCaptureStep onSubmit={handleEmailSubmit} />
      </QuizShell>
    );
  }

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
