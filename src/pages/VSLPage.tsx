import { useEffect } from "react";

const CHECKOUT_URL = "https://seu-checkout-aqui.com";

const VSLPage = () => {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://scripts.converteai.net/e8b90652-f08e-4177-9149-85207e0dd41d/players/69e939413a084e4af12c4ec9/v4/player.js";
    s.async = true;
    document.head.appendChild(s);

    return () => {
      document.head.removeChild(s);
    };
  }, []);

  return (
    <main className="min-h-[100dvh] w-full bg-background flex justify-center">
      <div className="w-full max-w-[480px] flex flex-col items-center px-5 pt-10 pb-16 gap-6">

        {/* Aviso acima do vídeo */}
        <div
          className="w-full rounded-2xl px-4 py-3 text-center"
          style={{ backgroundColor: "hsl(55 100% 94%)" }}
        >
          <p className="font-bold text-sm" style={{ color: "hsl(var(--progress-fill))" }}>
            🔔 MIRA EL VIDEO DE ABAJO —
          </p>
          <p className="text-sm mt-0.5" style={{ color: "hsl(var(--progress-fill))" }}>
            Tenemos algo especial para ti
          </p>
        </div>

        {/* Player Vturb */}
        <div className="w-full">
          <vturb-smartplayer
            id="vid-69e939413a084e4af12c4ec9"
            style={{ display: "block", margin: "0 auto", width: "100%" }}
          />
        </div>

      </div>
    </main>
  );
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "vturb-smartplayer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { id?: string }, HTMLElement>;
    }
  }
}

export default VSLPage;
