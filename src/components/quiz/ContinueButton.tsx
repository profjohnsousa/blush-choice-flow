import { cn } from "@/lib/utils";

interface ContinueButtonProps {
  onClick: () => void;
  disabled?: boolean;
  label?: string;
}

const ContinueButton = ({ onClick, disabled, label = "Continuar" }: ContinueButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className={cn(
      "mt-7 w-full rounded-xl py-4 text-base font-bold text-white transition-all duration-200",
      "shadow-[0_8px_20px_-8px_hsl(var(--progress-fill)/0.6)]",
      "hover:-translate-y-0.5 active:scale-[0.99]",
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
    )}
    style={{ backgroundColor: "hsl(var(--progress-fill))" }}
  >
    {label}
  </button>
);

export default ContinueButton;
