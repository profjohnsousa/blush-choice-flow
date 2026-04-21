import QuizStep, { type QuizOption } from "@/components/QuizStep";

const Index = () => {
  const handleAnswer = (answer: QuizOption) => {
    // Hook into your quiz flow here
    console.log("onAnswer:", answer);
  };

  return <QuizStep onAnswer={handleAnswer} currentStep={1} totalSteps={20} />;
};

export default Index;
