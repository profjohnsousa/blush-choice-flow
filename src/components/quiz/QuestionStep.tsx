import { useState, useEffect } from "react";
import OptionCard from "./OptionCard";
import ContinueButton from "./ContinueButton";
import { StepConfig } from "./stepData";

interface QuestionStepProps {
  config: StepConfig;
  onSingle: (optionId: string) => void;
  onMulti: (optionIds: string[]) => void;
}

const renderRichQuestion = (text: string) => {
  const parts: Array<string | JSX.Element> = [];
  const regex = /(\{\{pink:[^}]+\}\})/g;
  let lastIndex = 0;
  let match;
  let key = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    const inner = match[0].slice(7, -2);
    parts.push(
      <span key={key++} className="font-bold" style={{ color: "hsl(var(--progress-fill))" }}>
        {inner}
      </span>
    );
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return <>{parts}</>;
};

const QuestionStep = ({ config, onSingle, onMulti }: QuestionStepProps) => {
  const [selectedSingle, setSelectedSingle] = useState<string | null>(null);
  const [selectedMulti, setSelectedMulti] = useState<string[]>([]);

  useEffect(() => {
    setSelectedSingle(null);
    setSelectedMulti([]);
  }, [config.step]);

  const handleSelect = (id: string) => {
    if (config.type === "A") {
      setSelectedSingle(id);
      // brief delay so user sees selected state
      window.setTimeout(() => onSingle(id), 220);
    } else {
      setSelectedMulti((prev) =>
        prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
      );
    }
  };

  const isSelected = (id: string) =>
    config.type === "A" ? selectedSingle === id : selectedMulti.includes(id);

  const sideImage = config.layout === "side-image";

  return (
    <>
      {config.question && (
        <h2 className="mt-8 text-center font-bold text-foreground text-[1.35rem] sm:text-2xl leading-snug px-1">
          {config.question}
        </h2>
      )}
      {config.questionRich && (
        <h2 className="mt-8 text-center font-bold text-foreground text-[1.35rem] sm:text-2xl leading-snug px-1">
          {renderRichQuestion(config.questionRich)}
        </h2>
      )}
      {config.subtitle && (
        <p className="mt-2 text-center italic text-muted-foreground text-sm">{config.subtitle}</p>
      )}

      <div className={sideImage ? "mt-7 flex gap-4 items-start" : "mt-7 flex flex-col gap-3.5"}>
        {sideImage ? (
          <>
            <div className="flex-1 flex flex-col gap-3.5 min-w-0">
              {config.options.map((opt) => (
                <OptionCard
                  key={opt.id}
                  option={opt}
                  selected={isSelected(opt.id)}
                  onClick={() => handleSelect(opt.id)}
                  showCheckbox={config.type === "B"}
                />
              ))}
            </div>
            <div
              className="w-[35%] aspect-[3/4] rounded-2xl shrink-0 self-stretch"
              style={{
                background:
                  "linear-gradient(160deg, hsl(48 90% 80%) 0%, hsl(20 70% 70%) 50%, hsl(var(--card-border-strong)) 100%)",
              }}
              aria-hidden
            />
          </>
        ) : (
          config.options.map((opt) => (
            <OptionCard
              key={opt.id}
              option={opt}
              selected={isSelected(opt.id)}
              onClick={() => handleSelect(opt.id)}
              showCheckbox={config.type === "B"}
            />
          ))
        )}
      </div>

      {/* Step 8 special: dual image below options */}
      {config.step === 8 && (
        <div className="mt-5 flex gap-3">
          <div
            className="flex-1 aspect-square rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(var(--card-border-strong)) 100%)",
            }}
            aria-hidden
          />
          <div
            className="flex-1 aspect-square rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, hsl(40 60% 80%) 0%, hsl(var(--primary)) 100%)",
            }}
            aria-hidden
          />
        </div>
      )}

      {config.type === "B" && (
        <ContinueButton
          disabled={selectedMulti.length === 0}
          onClick={() => onMulti(selectedMulti)}
        />
      )}

      {config.bottomPill && config.bottomPill.variant === "yellow-red" && (
        <div className="fixed inset-x-0 bottom-0 pointer-events-none flex justify-center pb-5 px-5">
          <div
            className="pointer-events-auto rounded-full px-5 py-3 text-sm sm:text-base font-bold text-center shadow-[0_8px_24px_-10px_rgba(0,0,0,0.15)] max-w-[480px] w-full"
            style={{
              backgroundColor: "hsl(var(--pill-bg))",
              color: "hsl(var(--pill-text))",
            }}
          >
            {config.bottomPill.text}
          </div>
        </div>
      )}

      {config.bottomPill && config.bottomPill.variant === "yellow-pink-italic" && (
        <div
          className="mt-6 rounded-2xl px-4 py-3 text-sm italic text-center font-medium"
          style={{
            backgroundColor: "hsl(55 100% 94%)",
            color: "hsl(var(--progress-fill))",
          }}
        >
          {config.bottomPill.text}
        </div>
      )}
    </>
  );
};

export default QuestionStep;
