import { useRef } from "react";

const VSL_URL = "https://sua-vsl-aqui.com";

const profiles = [
  {
    id: 1,
    name: "La Intencional Inconstante",
    image: "/result-virtuosa.png",
    biblicalProfile: "🌾 Mujer Virtuosa - Rutina con propósito y diligencia",
    descriptionBold: "La Intencional Inconstante 🧠 Ya entiendes lo que necesitas hacer. Pero cada vez que lo intentas, algo te saca del enfoque.",
    description1: "Vuelves a empezar llena de ánimo... por dos, tres días. Después regresa el cansancio, la distracción, el caos mental, y vuelve esa sensación de fracaso.",
    description2: "No necesitas más contenido. Necesitas",
    description2Bold: "constancia: emocional, espiritual y práctica.",
    verseText: "\"Considera los caminos de su hogar y no come el pan de la ociosidad.\"",
    verseRef: "— Proverbios 31:27 (NVI)",
    verseLine1: "La mujer virtuosa no dependía de la motivación.",
    verseLine2: "Ella vivía con constancia e intencionalidad.",
    needs: [
      "Ritmo y rutina con propósito",
      "Herramientas simples para mantener el foco en lo esencial",
      "Una base espiritual sólida que sostenga tus días",
      "Claridad sobre qué empezar y qué continuar",
    ],
    closing: "No necesitas volver a empezar todo de nuevo. Necesitas",
    closingBold: "estabilizarte con sabiduría.",
  },
  {
    id: 2,
    name: "La Dedicada Desorganizada",
    image: "/result-dedicada.png",
    biblicalProfile: "⚖️ Débora - Liderazgo práctico y espiritual",
    descriptionBold: "🧠 Eres una mujer esforzada, pero siempre te sientes atascada.",
    description1: "Tu rutina parece una lista infinita de tareas. Haces, resuelves, corres, ayudas... pero al final del día sientes que nada realmente avanzó.",
    description2: "No eres improductiva por falta de acción, sino por",
    description2Bold: "falta de estructura y propósito en lo que haces.",
    verseText: "\"Débora, profetisa, gobernaba a Israel en aquel tiempo.\"",
    verseRef: "— Jueces 4:4 (NVI)",
    verseLine1: "Débora no hacía de todo.",
    verseLine2: "Actuaba con claridad y dirección.",
    needs: [
      "Una rutina más liviana y con propósito",
      "Prioridades espirituales y prácticas bien definidas",
      "Un plan que organice tu energía, no solo tu agenda",
      "Aprender a decir 'no' sin culpa, y 'sí' a lo que Dios quiere hoy",
    ],
    closing: "Ser activa no es lo mismo que ser productiva.",
    closingBold: "Dios quiere que fructifiques, con paz, foco y sabiduría.",
  },
];

const ResultScreen = () => {
  const profile = useRef(profiles[Math.floor(Math.random() * profiles.length)]).current;

  return (
    <main className="min-h-[100dvh] w-full bg-background flex justify-center">
      <div className="w-full max-w-[480px] flex flex-col px-5 pt-8 pb-10 animate-fade-in-up gap-5">

        {/* BLOCK 1 — Profile title */}
        <div className="rounded-2xl bg-card px-5 py-4 text-center">
          <p className="text-[1.2rem] leading-snug">
            <span style={{ color: "hsl(var(--progress-fill))" }}>Eres: </span>
            <span className="font-bold text-foreground">{profile.name}</span>
          </p>
        </div>

        {/* BLOCK 2 — Image */}
        <div className="w-full rounded-xl overflow-hidden">
          <img
            src={profile.image}
            alt={profile.name}
            className="w-full object-cover"
            style={{ maxHeight: "240px" }}
          />
        </div>

        {/* BLOCK 3 — Biblical profile label */}
        <div
          className="rounded-xl px-4 py-3 text-center text-foreground"
          style={{ backgroundColor: "hsl(122 39% 93%)" }}
        >
          <p className="text-[0.95rem] leading-snug">
            Tu Perfil Bíblico: {profile.biblicalProfile}
          </p>
        </div>

        {/* BLOCK 4 — Description */}
        <div className="rounded-2xl bg-card/60 px-5 py-4 text-foreground space-y-3 text-[0.95rem] leading-relaxed">
          <p className="font-bold">{profile.descriptionBold}</p>
          <p>{profile.description1}</p>
          <p>
            {profile.description2}{" "}
            <span className="font-bold">{profile.description2Bold}</span>
          </p>
        </div>

        {/* BLOCK 5 — Bible verse */}
        <div className="rounded-xl px-4 py-4" style={{ backgroundColor: "#FFFDE7" }}>
          <p
            className="italic font-bold text-[0.95rem] leading-snug"
            style={{ color: "hsl(var(--progress-fill))" }}
          >
            📖 {profile.verseText}
          </p>
          <p className="mt-2 text-sm" style={{ color: "#B8860B" }}>
            {profile.verseRef}
          </p>
          <p className="mt-2 text-sm italic" style={{ color: "#B8860B" }}>
            {profile.verseLine1}
          </p>
          <p className="text-sm italic" style={{ color: "#B8860B" }}>
            {profile.verseLine2}
          </p>
        </div>

        {/* BLOCK 6 — What you need */}
        <div className="rounded-2xl bg-card/60 px-5 py-4 text-foreground space-y-3 text-[0.95rem] leading-relaxed">
          <p className="font-bold">💡 Lo que necesitas ahora es:</p>
          <ul className="space-y-1.5 list-none pl-0">
            {profile.needs.map((need, i) => (
              <li key={i}>• {need}</li>
            ))}
          </ul>
          <p>
            🙌 {profile.closing}{" "}
            <span className="font-bold">{profile.closingBold}</span>
          </p>
        </div>

        {/* BLOCK 7 — CTA */}
        <button
          type="button"
          onClick={() => { window.location.href = VSL_URL; }}
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
