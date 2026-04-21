const VSL_URL = "https://sua-vsl-aqui.com";

const ResultScreen = () => {
  return (
    <main className="min-h-[100dvh] w-full bg-background flex justify-center">
      <div className="w-full max-w-[480px] flex flex-col px-5 pt-8 pb-10 animate-fade-in-up gap-5">
        {/* BLOCK 1 — Profile title banner */}
        <div className="rounded-2xl bg-card px-5 py-5 text-center">
          <p className="text-[1.3rem] leading-snug">
            <span style={{ color: "hsl(var(--progress-fill))" }}>Eres: </span>
            <span className="font-bold text-foreground">La Intencional Inconstante</span>
          </p>
        </div>

        {/* BLOCK 2 — Biblical illustration */}
        <div
          className="w-full rounded-xl flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #e8d5c4, #d4b896)",
            height: "220px",
          }}
        >
          <p
            className="font-serif-display text-2xl text-center"
            style={{ color: "#6B4C35" }}
          >
            🕊️ Mujer Virtuosa
          </p>
        </div>

        {/* BLOCK 3 — Biblical profile label */}
        <div
          className="rounded-xl px-4 py-4 text-center text-foreground"
          style={{ backgroundColor: "hsl(122 39% 93%)" }}
        >
          <p className="text-[0.98rem] leading-snug">
            Tu Perfil Bíblico: 🌾 <span className="font-bold">Mujer Virtuosa</span> — Rutina con
            propósito y diligencia
          </p>
        </div>

        {/* BLOCK 4 — Description */}
        <div className="rounded-2xl bg-card/60 px-5 py-5 text-foreground space-y-3 text-[0.98rem] leading-relaxed">
          <p className="font-bold">
            La Intencional Inconstante 🧠 <span>Ya entiendes lo que necesitas hacer. Pero cada vez
            que lo intentas, algo te saca del enfoque.</span>
          </p>
          <p>
            Vuelves a empezar llena de ánimo... por dos, tres días. Después regresa el cansancio,
            la distracción, el caos mental, y vuelve esa sensación de fracaso.
          </p>
          <p>
            No necesitas más contenido. Necesitas{" "}
            <span className="font-bold">
              constancia: emocional, espiritual y práctica.
            </span>
          </p>
        </div>

        {/* BLOCK 5 — Bible verse */}
        <div
          className="rounded-xl px-4 py-4"
          style={{ backgroundColor: "#FFFDE7" }}
        >
          <p
            className="italic font-bold text-[0.97rem] leading-snug"
            style={{ color: "hsl(var(--progress-fill))" }}
          >
            📖 "Considera los caminos de su hogar y no come el pan de la ociosidad."
          </p>
          <p className="mt-2 text-sm" style={{ color: "#B8860B" }}>
            — Proverbios 31:27 (NVI)
          </p>
          <p className="mt-2 text-sm italic" style={{ color: "#B8860B" }}>
            La mujer virtuosa no dependía de la motivación.
          </p>
          <p className="text-sm italic" style={{ color: "#B8860B" }}>
            Ella vivía con constancia e intencionalidad.
          </p>
        </div>

        {/* BLOCK 6 — What you need now */}
        <div className="rounded-2xl bg-card/60 px-5 py-5 text-foreground space-y-3 text-[0.98rem] leading-relaxed">
          <p className="font-bold">💡 Lo que necesitas ahora es:</p>
          <ul className="space-y-1.5 list-none pl-0">
            <li>• Ritmo y rutina con propósito</li>
            <li>• Herramientas simples para mantener el foco en lo esencial</li>
            <li>• Una base espiritual sólida que sostenga tus días</li>
            <li>• Claridad sobre qué empezar y qué continuar</li>
          </ul>
          <p>
            🙌 No necesitas volver a empezar todo de nuevo. Necesitas{" "}
            <span className="font-bold">estabilizarte con sabiduría</span>.
          </p>
        </div>

        {/* BLOCK 7 — Final CTA */}
        <button
          type="button"
          onClick={() => {
            window.location.href = VSL_URL;
          }}
          className="w-full rounded-xl py-[18px] font-bold text-white animate-pulse-soft shadow-[0_10px_30px_-10px_hsl(var(--progress-fill)/0.7)] active:scale-[0.99] transition-transform"
          style={{
            backgroundColor: "hsl(var(--progress-fill))",
            fontSize: "1.05rem",
            letterSpacing: "0.04em",
          }}
        >
          QUIERO ENTENDER MÁS
        </button>
      </div>
    </main>
  );
};

export default ResultScreen;
