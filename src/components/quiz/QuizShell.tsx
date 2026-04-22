import { ReactNode } from "react";

interface QuizShellProps {
  currentStep: number;
  totalSteps: number;
  children: ReactNode;
}

const QuizShell = ({ currentStep, totalSteps, children }: QuizShellProps) => {
  const progress = Math.min(100, Math.max(0, (currentStep / totalSteps) * 100));

  return (
    <main className="min-h-[100dvh] w-full bg-background flex justify-center">
      <div
        key={currentStep}
        className="w-full max-w-[480px] flex flex-col px-5 pt-6 pb-28 animate-fade-in-up"
      >
        <header className="flex flex-col items-center">
          <h1
            className="font-serif-display text-primary text-4xl sm:text-5xl font-black leading-none select-none tracking-tight"
            aria-label="Mujer Sabia en Acción"
          >
            Mujer Sabia
          </h1>
          <p
            className="font-serif-display text-primary text-lg sm:text-xl font-semibold leading-none select-none tracking-widest mt-1"
            style={{ color: "hsl(var(--progress-fill))" }}
          >
            en Acción
          </p>
        </header>
        <div
          className="mt-5 h-1 w-full rounded-full overflow-hidden"
          style={{ backgroundColor: "hsl(var(--progress-track))" }}
          role="progressbar"
          aria-valuenow={currentStep}
          aria-valuemin={0}
          aria-valuemax={totalSteps}
          aria-label={`Paso ${currentStep} de ${totalSteps}`}
        >
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${progress}%`,
              backgroundColor: "hsl(var(--progress-fill))",
            }}
          />
        </div>
        {children}
      </div>
    </main>
  );
};

export default QuizShell;
