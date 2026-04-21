import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { QuizOption } from "./types";

interface OptionCardProps {
  option: QuizOption;
  selected: boolean;
  onClick: () => void;
  showCheckbox?: boolean;
}

const OptionCard = ({ option, selected, onClick, showCheckbox }: OptionCardProps) => {
  const renderText = () => {
    if (option.text) {
      return <span className="text-[1.02rem] leading-snug">{renderRichText(option.text)}</span>;
    }
    return (
      <span className="text-[1.02rem] leading-snug">
        {option.bold && <span className="font-bold">{option.bold}</span>}
        {option.rest && <span className="font-normal">{option.rest}</span>}
      </span>
    );
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group w-full text-left rounded-2xl px-4 py-4 flex items-center gap-3",
        "bg-card text-card-foreground",
        "border-2 transition-all duration-200 ease-out",
        "hover:-translate-y-0.5 active:scale-[0.99]",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        selected
          ? "border-[hsl(var(--card-border-strong))] scale-[1.02] shadow-[0_8px_24px_-12px_hsl(var(--card-border-strong)/0.6)]"
          : "border-[hsl(var(--card-border))]"
      )}
      aria-pressed={selected}
    >
      {showCheckbox && (
        <span
          className={cn(
            "h-5 w-5 shrink-0 rounded border-2 flex items-center justify-center transition-colors",
            selected
              ? "bg-[hsl(var(--progress-fill))] border-[hsl(var(--progress-fill))]"
              : "border-[hsl(var(--card-border-strong))] bg-transparent"
          )}
          aria-hidden
        >
          {selected && (
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M3 8l3.5 3.5L13 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
      )}

      {option.imagePlaceholder && (
        <span
          className="h-[60px] w-[60px] shrink-0 rounded-xl"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(var(--card-border)) 100%)",
          }}
          aria-hidden
        />
      )}

      {option.emoji && (
        <span className="text-2xl leading-none shrink-0" aria-hidden>
          {option.emoji}
        </span>
      )}

      <span className="flex-1">{renderText()}</span>

      {option.chevron && (
        <ChevronRight className="h-5 w-5 shrink-0 text-[hsl(var(--card-border-strong))]" aria-hidden />
      )}
    </button>
  );
};

// Parses **bold** and color-bold tokens like {{pink:word}}
function renderRichText(text: string) {
  const parts: Array<string | JSX.Element> = [];
  const regex = /(\*\*[^*]+\*\*|\{\{pink:[^}]+\}\})/g;
  let lastIndex = 0;
  let match;
  let key = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    const token = match[0];
    if (token.startsWith("**")) {
      parts.push(
        <span key={key++} className="font-bold">
          {token.slice(2, -2)}
        </span>
      );
    } else {
      const inner = token.slice(7, -2);
      parts.push(
        <span key={key++} className="font-bold" style={{ color: "hsl(var(--progress-fill))" }}>
          {inner}
        </span>
      );
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return <>{parts}</>;
}

export default OptionCard;
