import { useState } from "react";
import { cn } from "@/lib/utils";

export type QuizOption = {
  emoji: string;
  bold: string;
  rest: string;
};

const DEFAULT_OPTIONS: QuizOption[] = [
  { emoji: "🎯", bold: "Sim", rest: ", e isso me frustra" },
  { emoji: "🧩", bold: "Às vezes", rest: ", mas ignoro" },
  { emoji: "☁️", bold: "Não", rest: " penso muito nisso" },
  { emoji: "🪞", bold: "Sim", rest: ", e isso me dá vergonha" },
];

const DEFAULT_QUESTION =
  "Você sente que Deus te deu talentos, mas mesmo assim você não consegue agir como gostaria?";

interface QuizStepProps {
  onAnswer?: (answer: QuizOption) => void;
  currentStep?: number;
  totalSteps?: number;
  question?: string;
  options?: QuizOption[];
}

const QuizStep = ({
  onAnswer,
  currentStep = 1,
  totalSteps = 10,
  question = DEFAULT_QUESTION,
  options = DEFAULT_OPTIONS,
}: QuizStepProps) => {
  const [selected, setSelected] = useState<number | null>(null);

  const progress = Math.min(100, Math.max(0, (currentStep / totalSteps) * 100));

  const handleSelect = (index: number, option: QuizOption) => {
    setSelected(index);
    // eslint-disable-next-line no-console
    console.log("Selected answer:", option);
    onAnswer?.(option);
  };

  return (
    <main className="min-h-[100dvh] w-full bg-background flex justify-center">
      <div className="w-full max-w-[480px] flex flex-col px-5 pt-6 pb-28 animate-fade-in-up">
        {/* Logo */}
        <header className="flex flex-col items-center">
          <h1
            className="font-serif-display text-primary text-5xl sm:text-6xl font-black leading-none select-none"
            aria-label="MSD"
          >
            MSD
          </h1>
        </header>

        {/* Progress bar */}
        <div
          className="mt-5 h-1 w-full rounded-full overflow-hidden"
          style={{ backgroundColor: "hsl(var(--progress-track))" }}
          role="progressbar"
          aria-valuenow={currentStep}
          aria-valuemin={0}
          aria-valuemax={totalSteps}
          aria-label={`Etapa ${currentStep} de ${totalSteps}`}
        >
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${progress}%`,
              backgroundColor: "hsl(var(--progress-fill))",
            }}
          />
        </div>

        {/* Question */}
        <h2 className="mt-8 text-center font-bold text-foreground text-[1.35rem] sm:text-2xl leading-snug px-1">
          {question}
        </h2>

        {/* Options */}
        <div className="mt-7 flex flex-col gap-3.5">
          {options.map((opt, i) => {
            const isSelected = selected === i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => handleSelect(i, opt)}
                className={cn(
                  "group w-full text-left rounded-2xl px-4 py-4 flex items-center gap-3",
                  "bg-card text-card-foreground",
                  "border-2 transition-all duration-200 ease-out",
                  "hover:-translate-y-0.5 active:scale-[0.99]",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  isSelected
                    ? "border-[hsl(var(--card-border-strong))] scale-[1.02] shadow-[0_8px_24px_-12px_hsl(var(--card-border-strong)/0.6)]"
                    : "border-[hsl(var(--card-border))]"
                )}
                aria-pressed={isSelected}
              >
                <span className="text-2xl leading-none shrink-0" aria-hidden>
                  {opt.emoji}
                </span>
                <span className="text-[1.02rem] leading-snug">
                  <span className="font-bold">{opt.bold}</span>
                  <span className="font-normal">{opt.rest}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom sticky pill */}
      <div className="fixed inset-x-0 bottom-0 pointer-events-none flex justify-center pb-5 px-5">
        <div
          className="pointer-events-auto rounded-full px-5 py-3 text-sm sm:text-base font-bold text-center shadow-[0_8px_24px_-10px_rgba(0,0,0,0.15)] max-w-[480px] w-full"
          style={{
            backgroundColor: "hsl(var(--pill-bg))",
            color: "hsl(var(--pill-text))",
          }}
        >
          📋 Somente 1 teste por pessoa!
        </div>
      </div>
    </main>
  );
};

export default QuizStep;
