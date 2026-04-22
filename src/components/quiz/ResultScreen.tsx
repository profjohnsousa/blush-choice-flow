import { useRef } from "react";

const VSL_URL = "/vsl";

interface Profile {
  id: number;
  name: string;
  image: string;
  biblicalProfile: string;
  descriptionBold: string;
  description1: string;
  description2: string;
  description2Bold: string;
  verseText: string;
  verseRef: string;
  verseLine1: string;
  verseLine2: string;
  needs: string[];
  closing: string;
  closingBold: string;
}

const profiles: Profile[] = [
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
  {
    id: 3,
    name: "La Visionaria Paralizada",
    image: "/result-ester.png",
    biblicalProfile: "👑 Ester - Valentía para actuar en el momento correcto",
    descriptionBold: "🧠 Tienes sueños grandes y una visión clara. Pero el miedo a equivocarte te impide dar el primer paso.",
    description1: "Esperas el momento perfecto, la señal de Dios, las condiciones ideales... y mientras tanto, el tiempo pasa y tus sueños siguen siendo solo ideas.",
    description2: "No te falta fe ni visión. Te falta",
    description2Bold: "valentía para actuar aunque no te sientas lista.",
    verseText: "\"¿Y quién sabe si para esta hora has llegado al reino?\"",
    verseRef: "— Ester 4:14 (NVI)",
    verseLine1: "Ester tampoco se sentía lista.",
    verseLine2: "Pero actuó con fe, y cambió su historia.",
    needs: [
      "Dar el primer paso aunque el camino no esté claro",
      "Soltar el perfeccionismo que te paraliza",
      "Confiar que Dios actúa mientras tú te mueves",
      "Un plan concreto para salir de la parálisis hoy",
    ],
    closing: "Tu momento es ahora. No cuando todo esté perfecto.",
    closingBold: "Dios te llamó para este tiempo.",
  },
  {
    id: 4,
    name: "La Fiel Desconectada",
    image: "/result-marta.png",
    biblicalProfile: "🕊️ María y Marta - Fe y acción integradas",
    descriptionBold: "🧠 Eres fiel en tu fe, pero sientes que tu vida espiritual y tu rutina práctica viven en mundos separados.",
    description1: "Oras, vas a la iglesia, confías en Dios... pero en el día a día te sientes desconectada. Como si la fe fuera para los domingos y la vida real fuera otra cosa.",
    description2: "No necesitas más devoción. Necesitas",
    description2Bold: "integrar tu fe con tu forma de vivir cada día.",
    verseText: "\"Marta, Marta, afanada y turbada estás con muchas cosas.\"",
    verseRef: "— Lucas 10:41 (NVI)",
    verseLine1: "No se trata de hacer menos.",
    verseLine2: "Se trata de hacer lo correcto, desde el lugar correcto.",
    needs: [
      "Conectar tu fe con tus decisiones diarias",
      "Una rutina que incluya a Dios en lo práctico, no solo en lo espiritual",
      "Claridad sobre cuál es tu llamado real en esta temporada",
      "Paz para soltar lo que no es tuyo cargar",
    ],
    closing: "No estás llamada a hacer todo. Estás llamada a hacer",
    closingBold: "lo que Dios preparó específicamente para ti.",
  },
];

// Determine profile based on quiz answers
const getProfile = (): Profile => {
  // Score system based on answer patterns
  // This runs on mount so we use a simple random weighted by
  // typical answer distributions across the 4 archetypes
  const scores = [0, 0, 0, 0]; // indexes: 0=Intencional, 1=Desorganizada, 2=Visionaria, 3=Desconectada

  try {
    // Try to read answers from sessionStorage if QuizFlow stored them
    const raw = sessionStorage.getItem("quizAnswers");
    if (raw) {
      const answers = JSON.parse(raw);

      // Step 4 — self-talk phrases
      if (answers[4] === "a") scores[0] += 2; // "sé lo que hacer pero no hago" → Intencional
      if (answers[4] === "b") scores[1] += 2; // "rutina me consume" → Desorganizada
      if (answers[4] === "c") scores[2] += 2; // "cuando mejore, empiezo" → Visionaria
      if (answers[4] === "d") scores[0] += 2; // "algo me bloquea" → Intencional

      // Step 6 — what happens when starting something new
      if (answers[6] === "a") scores[0] += 2; // "me emociono pero desanimo" → Intencional
      if (answers[6] === "b") scores[1] += 2; // "me pierdo en distracciones" → Desorganizada
      if (answers[6] === "c") scores[2] += 1; // "me comparo y bloqueo" → Visionaria
      if (answers[6] === "d") scores[2] += 2; // "miedo de errar" → Visionaria
      if (answers[6] === "e") scores[3] += 2; // "oro pero espero señal" → Desconectada

      // Step 8 — conflict between spiritual and productive
      if (answers[8] === "a") scores[3] += 2; // "productividad es del mundo" → Desconectada
      if (answers[8] === "b") scores[3] += 2; // "tiempo de Dios" → Desconectada
      if (answers[8] === "c") scores[1] += 1; // "puedo unir las dos" → Desorganizada
      if (answers[8] === "d") scores[3] += 1; // "nunca lo había pensado" → Desconectada

      // Step 9 — reaction to procrastination
      if (answers[9] === "a") scores[0] += 2; // "me culpo y prometo" → Intencional
      if (answers[9] === "b") scores[1] += 2; // "compenso con tareas" → Desorganizada
      if (answers[9] === "c") scores[3] += 2; // "oro pero sigo paralizada" → Desconectada
      if (answers[9] === "d") scores[2] += 2; // "finjo que está bien" → Visionaria

      // Step 14 — situation that describes you today
      if (answers[14] === "a") scores[2] += 2; // "quiero cambiar pero bloqueada" → Visionaria
      if (answers[14] === "b") scores[2] += 2; // "pienso demasiado y actúo poco" → Visionaria
      if (answers[14] === "c") scores[1] += 2; // "hago muchas cosas sin enfoque" → Desorganizada
      if (answers[14] === "d") scores[0] += 2; // "sé qué hacer pero no sostengo" → Intencional
    }
  } catch {
    // fallback to random if no answers stored
  }

  const maxScore = Math.max(...scores);
  // If all zeros (no answers stored), pick randomly
  if (maxScore === 0) {
    return profiles[Math.floor(Math.random() * profiles.length)];
  }

  const winnerIndex = scores.indexOf(maxScore);
  return profiles[winnerIndex];
};

const ResultScreen = () => {
  const profile = useRef(getProfile()).current;

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
