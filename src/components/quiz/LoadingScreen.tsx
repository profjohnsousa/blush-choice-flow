import { useEffect, useRef, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const totalDuration = 6000;
    const start = Date.now();
    let pausedAt: number | null = null;

    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, (elapsed / totalDuration) * 100);

      if (pct >= 80 && pausedAt === null) {
        setProgress(80);
        setPaused(true);
        setShowPopup(true);
        pausedAt = Date.now();
        window.setTimeout(() => {
          const resumeStart = Date.now();
          const resumeDuration = 2000;
          const resumeTick = () => {
            const re = Date.now() - resumeStart;
            const rp = Math.min(100, 80 + (re / resumeDuration) * 20);
            setProgress(rp);
            if (rp < 100) rafRef.current = requestAnimationFrame(resumeTick);
          };
          setPaused(false);
          rafRef.current = requestAnimationFrame(resumeTick);
        }, 800);
        return;
      }

      setProgress(pct);
      if (pct < 80) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <main className="min-h-[100dvh] w-full bg-background flex justify-center relative">
      {showPopup && (
        <div
          className="fixed top-0 inset-x-0 z-50 px-4 pt-3 pb-4 text-center animate-slide-down"
          style={{ backgroundColor: "hsl(123 46% 34%)" }}
        >
          <p className="text-white font-bold text-base sm:text-lg">
            ¡ANÁLISIS COMPLETADO! 🎉
          </p>
          <p className="text-white text-sm mt-1">
            ¡Haz clic en el botón de abajo y conoce tu perfil! ⬇️
          </p>
        </div>
      )}

      <div className="w-full max-w-[480px] flex flex-col px-5 pt-6 pb-32 animate-fade-in-up">
        <header className="flex flex-col items-center">
          <h1
            className="font-serif-display text-primary text-5xl sm:text-6xl font-black leading-none select-none"
            aria-label="MSD"
          >
            MSD
          </h1>
        </header>

        <div className="mt-8 flex justify-between items-center text-sm">
          <span className="font-medium text-foreground">Analizando tus respuestas...</span>
          <span className="font-bold" style={{ color: "hsl(var(--progress-fill))" }}>
            {Math.round(progress)}%
          </span>
        </div>

        <div
          className="mt-2 h-2 w-full rounded-full overflow-hidden"
          style={{ backgroundColor: "hsl(var(--card))" }}
        >
          <div
            className="h-full rounded-full transition-all duration-150 ease-linear"
            style={{
              width: `${progress}%`,
              backgroundColor: "hsl(var(--progress-fill))",
            }}
          />
        </div>

        <div className="mt-6 w-full rounded-2xl overflow-hidden">
          <img
            src="/loading-antes-depois.png"
            alt="Transformação"
            className="w-full object-cover"
            style={{ maxHeight: "300px" }}
          />
        </div>

        <div className="mt-5 rounded-2xl bg-white/90 px-5 py-4 shadow-sm">
          <p className="text-foreground text-[0.97rem] leading-relaxed">
            En instantes, vas a descubrir cuál es tu{" "}
            <span className="font-bold">perfil bíblico</span> y entender cómo este descubrimiento
            puede <span className="font-bold">transformar tu forma de actuar</span>,{" "}
            <span className="font-bold">revelar tu verdadera identidad</span> y mostrar cómo la{" "}
            <span className="font-bold">
              Palabra del Señor puede realinear tu vida con propósito y dirección
            </span>
            .
          </p>
        </div>

        {paused || progress >= 80 ? (
          <div className="fixed inset-x-0 bottom-0 px-5 pb-5 flex justify-center pointer-events-none">
            <button
              type="button"
              onClick={onComplete}
              className="pointer-events-auto w-full max-w-[480px] rounded-xl py-[18px] font-bold text-white animate-scale-in shadow-[0_10px_30px_-10px_hsl(var(--progress-fill)/0.7)] active:scale-[0.99] transition-transform"
              style={{
                backgroundColor: "hsl(var(--progress-fill))",
                fontSize: "1.1rem",
                letterSpacing: "0.05em",
              }}
            >
              CONOCER MI PERFIL
            </button>
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default LoadingScreen;
