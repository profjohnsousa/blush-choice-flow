const CHECKOUT_URL = "https://seu-checkout-aqui.com";

const VSLPage = () => {
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

        {/* Player placeholder — substituir pelo embed do Vturb */}
        <div
          className="w-full rounded-2xl overflow-hidden"
          style={{ aspectRatio: "16/9", backgroundColor: "#1a1a1a" }}
        >
          {/* COLE O EMBED DO VTURB AQUI */}
          <iframe
            src="https://vturb.com.br/embed/PLACEHOLDER"
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>

        {/* Botão de compra */}
        <button
          type="button"
          onClick={() => { window.location.href = CHECKOUT_URL; }}
          className="w-full rounded-xl py-[18px] font-bold text-white shadow-[0_10px_30px_-10px_hsl(var(--progress-fill)/0.7)] active:scale-[0.99] transition-transform animate-pulse-soft"
          style={{
            backgroundColor: "hsl(var(--progress-fill))",
            fontSize: "1.05rem",
            letterSpacing: "0.04em",
          }}
        >
          QUIERO ACCEDER AHORA →
        </button>

      </div>
    </main>
  );
};

export default VSLPage;
