import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 3000;
    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);
      if (pct < 100) requestAnimationFrame(tick);
      else window.setTimeout(onComplete, 200);
    };
    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  return (
    <main className="min-h-[100dvh] w-full bg-background flex justify-center">
      <div className="w-full max-w-[480px] flex flex-col items-center justify-center px-5 animate-fade-in-up">
        <h1
          className="font-serif-display text-primary text-6xl font-black leading-none mb-12"
          aria-label="MSD"
        >
          MSD
        </h1>

        <h2 className="text-center font-bold text-foreground text-2xl mb-2">
          Analisando suas respostas...
        </h2>
        <p className="text-center text-muted-foreground italic mb-8">
          Identificando seu perfil bíblico...
        </p>

        <div
          className="h-2 w-full max-w-xs rounded-full overflow-hidden"
          style={{ backgroundColor: "hsl(var(--progress-track))" }}
        >
          <div
            className="h-full rounded-full transition-all duration-150 ease-linear"
            style={{
              width: `${progress}%`,
              backgroundColor: "hsl(var(--progress-fill))",
            }}
          />
        </div>
        <p className="mt-3 text-sm font-bold" style={{ color: "hsl(var(--progress-fill))" }}>
          {Math.round(progress)}%
        </p>
      </div>
    </main>
  );
};

export default LoadingScreen;
