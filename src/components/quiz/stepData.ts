import { QuizOption } from "./types";

export interface StepConfig {
  step: number;
  type: "A" | "B";
  question?: string;
  questionRich?: string;
  subtitle?: string;
  options: QuizOption[];
  bottomPill?: { text: string; variant: "yellow-red" | "yellow-pink-italic" };
  layout?: "default" | "side-image";
}

export const STEPS: StepConfig[] = [
  {
    step: 1,
    type: "A",
    question:
      "¿Sientes que Dios te dio talentos, pero aún así no logras actuar como te gustaría?",
    options: [
      { id: "a", emoji: "🎯", bold: "Sí", rest: ", y eso me frustra" },
      { id: "b", emoji: "🧩", bold: "A veces", rest: ", pero lo ignoro" },
      { id: "c", emoji: "☁️", bold: "No", rest: " pienso mucho en eso" },
      { id: "d", emoji: "🪞", bold: "Sí", rest: ", y eso me da vergüenza" },
    ],
    bottomPill: { text: "📋 ¡Solo 1 prueba por persona!", variant: "yellow-red" },
  },
  {
    step: 2,
    type: "A",
    question:
      "¿Te has sorprendido pasando horas en el sofá deslizando el feed de redes sociales y, al final del día, sentiste que no hiciste nada útil?",
    subtitle: "Elige la respuesta que más te representa:",
    options: [
      { id: "a", emoji: "🛋️", bold: "Sí", rest: ", y eso me deja con remordimiento" },
      { id: "b", emoji: "📱", bold: "A veces", rest: ", pero trato de no pensar en eso" },
      { id: "c", emoji: "⚙️", bold: "Rara vez", rest: ", logro controlarme bien" },
      { id: "d", emoji: "🚫", bold: "No", rest: ", eso no me pasa" },
    ],
  },
  {
    step: 3,
    type: "A",
    question: "¿Sientes que tu vida está avanzando en la dirección que te gustaría?",
    layout: "side-image",
    options: [
      { id: "a", text: "Está totalmente fuera de alineación" },
      { id: "b", text: "Está parada, pero tengo ganas de cambiar" },
      { id: "c", text: "Avanzo un poco, me bloqueo y vuelvo a empezar" },
      { id: "d", text: "Está caminando, pero con dificultad" },
    ],
  },
  {
    step: 4,
    type: "A",
    question: "¿Cuál de estas frases te repites más a ti misma?",
    options: [
      { id: "a", emoji: "📝", text: "Sé lo que necesito hacer, pero no lo hago" },
      { id: "b", emoji: "🕰️", text: "Mi rutina me consume" },
      { id: "c", emoji: "⛅", text: "Cuando las cosas mejoren, empiezo" },
      { id: "d", emoji: "🧱", text: "Quiero mucho cambiar, pero parece que algo me bloquea" },
    ],
  },
  {
    step: 5,
    type: "A",
    question:
      "¿Has tenido esa sensación de que las cosas le salen bien a todo el mundo, menos a ti?",
    options: [
      { id: "a", imagePlaceholder: true, text: "**Sí**, lo siento con frecuencia" },
      { id: "b", imagePlaceholder: true, text: "Estoy exactamente así ahora" },
      { id: "c", imagePlaceholder: true, text: "**Rara vez**, pero ya lo sentí" },
      { id: "d", imagePlaceholder: true, text: "**No**, me siento en paz con eso" },
    ],
  },
  {
    step: 6,
    type: "A",
    question: "Cuando intentas empezar algo nuevo, ¿qué suele pasar?",
    options: [
      { id: "a", chevron: true, text: "Me emociono, pero pronto me desanimo" },
      { id: "b", chevron: true, text: "Me pierdo en las distracciones del día a día" },
      { id: "c", chevron: true, text: "Me comparo con otras mujeres y me bloqueo" },
      { id: "d", chevron: true, text: "Tengo miedo de equivocarme y lo dejo para después" },
      { id: "e", chevron: true, text: 'Oro, pero espero una "señal" para actuar' },
    ],
  },
  {
    step: 7,
    type: "B",
    question: "¿Qué es lo que más te impide mantener una rutina productiva con propósito?",
    subtitle: "Puedes seleccionar más de una:",
    options: [
      { id: "a", text: "Falta de clareza sobre lo que es más importante" },
      { id: "b", text: "Desorganización y exceso de tareas" },
      { id: "c", text: "Falta de energía o motivación" },
      { id: "d", text: "Siento que no tengo apoyo o nadie entiende lo que vivo" },
      { id: "e", text: "Mi fe está debilitada y me siento confundida" },
    ],
  },
  {
    step: 8,
    type: "A",
    questionRich:
      "¿Te has sentido en conflicto entre ser {{pink:espiritual}} y ser {{pink:productiva}}?",
    options: [
      { id: "a", chevron: true, text: "**Sí**, parece que la productividad es del mundo" },
      {
        id: "b",
        chevron: true,
        text: "**Sí**, porque no quiero actuar en la carne sino en el tiempo de Dios",
      },
      { id: "c", chevron: true, text: "**No**, creo que puedo unir las dos cosas" },
      { id: "d", chevron: true, text: "**Nunca lo había pensado**, pero ahora tiene sentido" },
    ],
  },
  {
    step: 9,
    type: "A",
    question: "¿Cómo reaccionas cuando notas que estás procrastinando?",
    options: [
      { id: "a", chevron: true, text: "Me culpo y prometo que mañana lo haré mejor" },
      { id: "b", chevron: true, text: "Trato de compensar con tareas al azar" },
      { id: "c", chevron: true, text: "Oro pidiendo fuerzas, pero sigo paralizada" },
      { id: "d", chevron: true, text: "Finjo que todo está bien, pero por dentro me siento pésima" },
    ],
  },
  {
    step: 10,
    type: "B",
    questionRich:
      "Al descubrir tu perfil bíblico, finalmente puedes {{pink:desbloquear áreas}} que ya intentaste cambiar... pero nunca lograste sostener.",
    subtitle: "¿Cuáles de las opciones sientes que necesitas desbloquear?",
    options: [
      { id: "a", text: "Tener más **claridad y confianza** en mis decisiones" },
      { id: "b", text: "Vivir mi rutina con más **paz y ligereza interior**" },
      { id: "c", text: "Volver a **avanzar sin sentir que siempre estoy empezando de nuevo**" },
      { id: "d", text: "Reconocerme como la **mujer que Dios me llamó a ser**" },
    ],
  },
  {
    step: 11,
    type: "A",
    question: "¿Sientes que estás viviendo en el centro de la voluntad de Dios?",
    options: [
      { id: "a", chevron: true, text: "Mi vida **parece fuera de alineación** espiritual" },
      {
        id: "b",
        chevron: true,
        text: "Tengo momentos de conexión, pero **me distraigo con facilidad**",
      },
      { id: "c", chevron: true, text: "A veces siento que vivo solo en **piloto automático**" },
      { id: "d", chevron: true, text: "Estoy buscando, pero todavía **no encuentro claridad**" },
    ],
  },
  {
    step: 12,
    type: "B",
    question: "¿Qué es lo que más te gustaría lograr en los próximos 3 meses?",
    options: [
      { id: "a", text: "Empezar ese proyecto que postergué por miedo" },
      { id: "b", text: "Organizarme para tener tiempo con Dios de verdad" },
      { id: "c", text: "Recuperar mi autoestima y dejar de sabotearme" },
      { id: "d", text: "Ser constante en algo que ya empecé mil veces" },
    ],
  },
  {
    step: 13,
    type: "A",
    question:
      "¿Crees que puedes ser productiva con propósito y paz, aun sin estar 100% lista o perfecta?",
    options: [
      { id: "a", emoji: "🧭", text: "**Sí**, pero necesito ayuda para empezar" },
      { id: "b", emoji: "🔓", text: "**Sí**, solo necesitaba verlo con otros ojos" },
      { id: "c", emoji: "🌱", text: "**Quiero mucho creerlo**, pero tengo dudas" },
      { id: "d", emoji: "🙏", text: "**Dudo de mí**, pero creo que Dios puede capacitarme" },
    ],
  },
  {
    step: 14,
    type: "A",
    question: "¿Cuál de estas situaciones te describe más hoy?",
    options: [
      { id: "a", emoji: "🌿", chevron: true, text: "Quiero cambiar, pero sigo bloqueada." },
      { id: "b", emoji: "👑", chevron: true, text: "Pienso demasiado y actúo poco." },
      { id: "c", emoji: "⚖️", chevron: true, text: "Hago muchas cosas, pero sin enfoque." },
      { id: "d", emoji: "🌾", chevron: true, text: "Sé qué hacer, pero no logro mantener constancia." },
    ],
    bottomPill: {
      text: "📌 Tu respuesta nos ayuda a identificar qué tipo de mujer sabia eres y cuál es el plan ideal para que comiences a actuar con intencionalidad.",
      variant: "yellow-pink-italic",
    },
  },
];
