import { QuizOption } from "./types";

export interface StepConfig {
  step: number;
  type: "A" | "B";
  question?: string;
  questionRich?: string; // supports **bold** and {{pink:text}}
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
      "Você sente que Deus te deu talentos, mas mesmo assim você não consegue agir como gostaria?",
    options: [
      { id: "a", emoji: "🎯", bold: "Sim", rest: ", e isso me frustra" },
      { id: "b", emoji: "🧩", bold: "Às vezes", rest: ", mas ignoro" },
      { id: "c", emoji: "☁️", bold: "Não", rest: " penso muito nisso" },
      { id: "d", emoji: "🪞", bold: "Sim", rest: ", e isso me dá vergonha" },
    ],
    bottomPill: { text: "📋 Somente 1 teste por pessoa!", variant: "yellow-red" },
  },
  {
    step: 2,
    type: "A",
    question:
      "Você já se pegou passando horas no sofá rolando o feed das redes sociais e, ao final do dia, sentiu que não fez nada de útil?",
    subtitle: "Escolha a resposta que mais lhe representa:",
    options: [
      { id: "a", emoji: "🛋️", bold: "Sim", rest: ", e isso me deixa com remorso" },
      { id: "b", emoji: "📱", bold: "Às vezes", rest: ", mas tento não pensar nisso" },
      { id: "c", emoji: "⚙️", bold: "Raramente", rest: ", consigo me controlar bem" },
      { id: "d", emoji: "🚫", bold: "Não", rest: ", isso não acontece comigo" },
    ],
  },
  {
    step: 3,
    type: "B",
    question: "Você sente que sua vida está andando na direção que gostaria?",
    layout: "side-image",
    options: [
      { id: "a", text: "Está totalmente fora de alinhamento" },
      { id: "b", text: "Está parada, mas eu tenho vontade de mudar" },
      { id: "c", text: "Ando um pouco, travo, e recomeço" },
      { id: "d", text: "Está caminhando, mas com dificuldade" },
    ],
  },
  {
    step: 4,
    type: "A",
    question: "Qual dessas frases você mais repete pra si mesma?",
    options: [
      { id: "a", emoji: "📝", text: "Eu sei o que preciso fazer, mas não faço" },
      { id: "b", emoji: "🕰️", text: "Minha rotina me engole" },
      { id: "c", emoji: "⛅", text: "Quando as coisas melhorarem, eu começo" },
      { id: "d", emoji: "🧱", text: "Quero muito mudar, mas parece que algo me trava" },
    ],
  },
  {
    step: 5,
    type: "A",
    question:
      "Já teve aquela sensação de que as coisas dão certo para todo mundo, menos pra você?",
    options: [
      { id: "a", imagePlaceholder: true, text: "**Sim**, sinto isso com frequência" },
      { id: "b", imagePlaceholder: true, text: "Estou exatamente assim agora" },
      { id: "c", imagePlaceholder: true, text: "**Raramente**, mas já senti" },
      { id: "d", imagePlaceholder: true, text: "**Não**, me sinto em paz com isso" },
    ],
  },
  {
    step: 6,
    type: "A",
    question: "Quando você tenta começar algo novo, o que geralmente acontece?",
    subtitle: "Pode selecionar mais de uma:",
    options: [
      { id: "a", chevron: true, text: "Eu fico animada, mas logo desanimo" },
      { id: "b", chevron: true, text: "Me perco nas distrações do dia a dia" },
      { id: "c", chevron: true, text: "Me comparo com outras mulheres e travo" },
      { id: "d", chevron: true, text: "Sinto medo de errar e deixo pra depois" },
      { id: "e", chevron: true, text: 'Oro, mas espero um "sinal" pra agir' },
    ],
  },
  {
    step: 7,
    type: "B",
    question: "O que mais atrapalha você de manter uma rotina produtiva com propósito?",
    subtitle: "Pode selecionar mais de uma:",
    options: [
      { id: "a", text: "Falta de clareza sobre o que é mais importante" },
      { id: "b", text: "Desorganização e excesso de tarefas" },
      { id: "c", text: "Falta de energia ou motivação" },
      { id: "d", text: "Sinto que não tenho apoio ou ninguém entende o que passo" },
      { id: "e", text: "Minha fé está abalada e me sinto confusa" },
    ],
  },
  {
    step: 8,
    type: "A",
    questionRich:
      "Você já se sentiu em conflito entre ser {{pink:espiritual}} e ser {{pink:produtiva}}?",
    options: [
      { id: "a", chevron: true, text: "**Sim**, parece que produtividade é coisa do mundo" },
      {
        id: "b",
        chevron: true,
        text: "**Sim**, porque não quero agir na carne e sim no tempo de Deus",
      },
      { id: "c", chevron: true, text: "**Não**, acredito que posso unir os dois" },
      { id: "d", chevron: true, text: "**Nunca pensei nisso**, mas faz sentido agora" },
    ],
  },
  {
    step: 9,
    type: "A",
    question: "Como você reage quando percebe que está procrastinando?",
    options: [
      { id: "a", chevron: true, text: "Me culpo e prometo que amanhã vou fazer melhor" },
      { id: "b", chevron: true, text: "Tento compensar com tarefas aleatórias" },
      { id: "c", chevron: true, text: "Oro pedindo força, mas continuo travada" },
      { id: "d", chevron: true, text: "Finjo que está tudo bem, mas por dentro me sinto péssima" },
    ],
  },
  {
    step: 10,
    type: "B",
    questionRich:
      "Ao descobrir o seu perfil bíblico, você pode finalmente {{pink:destravar áreas}} que já tentou mudar... mas nunca conseguiu sustentar.",
    subtitle: "Quais das opções abaixo você sente que precisa destravar?",
    options: [
      { id: "a", text: "Ter mais **clareza e confiança** nas minhas decisões" },
      { id: "b", text: "Viver minha rotina com mais **paz e leveza interior**" },
      { id: "c", text: "Voltar a **avançar sem sentir que está sempre recomeçando**" },
      { id: "d", text: "Se reconhecer como a **mulher que Deus te chamou para ser**" },
    ],
  },
  {
    step: 11,
    type: "A",
    question: "Você sente que está vivendo no centro da vontade de Deus?",
    options: [
      { id: "a", chevron: true, text: "Minha vida **parece fora de alinhamento** espiritual" },
      {
        id: "b",
        chevron: true,
        text: "Tenho momentos de conexão, mas **me distraio com facilidade**",
      },
      { id: "c", chevron: true, text: "Às vezes sinto que estou vivendo só no **piloto automático**" },
      { id: "d", chevron: true, text: "Estou buscando, mas ainda **não encontrei clareza**" },
    ],
  },
  {
    step: 12,
    type: "B",
    question: "O que você mais gostaria de realizar nos próximos 3 meses?",
    options: [
      { id: "a", text: "Começar aquele projeto que adiei por medo" },
      { id: "b", text: "Me organizar para ter tempo com Deus de verdade" },
      { id: "c", text: "Retomar minha autoestima e parar de me sabotar" },
      { id: "d", text: "Ser constante em algo que já comecei mil vezes" },
    ],
  },
  {
    step: 13,
    type: "A",
    question:
      "Você acredita que pode ser produtiva com propósito e paz, mesmo sem estar 100% pronta ou perfeita?",
    options: [
      { id: "a", emoji: "🧭", text: "**Sim**, mas preciso de ajuda para começar" },
      { id: "b", emoji: "🔓", text: "**Sim**, só precisava enxergar isso com outros olhos" },
      { id: "c", emoji: "🌱", text: "**Quero muito acreditar** nisso, mas tenho dúvidas" },
      { id: "d", emoji: "🙏", text: "**Eu duvido de mim**, mas creio que Deus pode me capacitar" },
    ],
  },
  {
    step: 14,
    type: "A",
    question: "Qual dessas situações mais descreve você hoje?",
    options: [
      { id: "a", emoji: "🌿", chevron: true, text: "Quero mudar, mas continuo travada." },
      { id: "b", emoji: "👑", chevron: true, text: "Penso demais e ajo de menos." },
      { id: "c", emoji: "⚖️", chevron: true, text: "Faço muitas coisas, mas sem foco." },
      { id: "d", emoji: "🌾", chevron: true, text: "Sei o que fazer, mas não consigo manter constância." },
    ],
    bottomPill: {
      text: "📌 Sua resposta nos ajuda a identificar qual tipo de mulher sábia você é, e qual o plano ideal para você começar a agir com intencionalidade.",
      variant: "yellow-pink-italic",
    },
  },
];
