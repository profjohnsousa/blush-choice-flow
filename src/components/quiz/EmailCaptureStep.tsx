import { useState } from "react";
import ContinueButton from "./ContinueButton";

interface EmailCaptureStepProps {
  onSubmit: (data: { name: string; email: string }) => void;
}

const EmailCaptureStep = ({ onSubmit }: EmailCaptureStepProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const valid = name.trim().length > 1 && /\S+@\S+\.\S+/.test(email);

  return (
    <>
      <h2 className="mt-8 text-center font-bold text-foreground text-[1.35rem] sm:text-2xl leading-snug px-1">
        ¿Dónde puedo enviarte tu resultado?
      </h2>
      <p className="mt-2 text-center italic text-muted-foreground text-sm">
        ¡Casi listo! Completa tus datos para recibir tu perfil bíblico.
      </p>

      <div className="mt-7 flex flex-col gap-4">
        <div>
          <label className="block text-sm font-bold text-foreground mb-1.5" htmlFor="quiz-name">
            Tu nombre
          </label>
          <input
            id="quiz-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="¿Cómo te podemos llamar?"
            className="w-full rounded-xl px-4 py-3.5 bg-card border-2 border-[hsl(var(--card-border))] focus:border-[hsl(var(--card-border-strong))] focus:outline-none text-foreground placeholder:text-muted-foreground transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-foreground mb-1.5" htmlFor="quiz-email">
            Tu mejor correo electrónico
          </label>
          <input
            id="quiz-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="correo@ejemplo.com"
            className="w-full rounded-xl px-4 py-3.5 bg-card border-2 border-[hsl(var(--card-border))] focus:border-[hsl(var(--card-border-strong))] focus:outline-none text-foreground placeholder:text-muted-foreground transition-colors"
          />
        </div>
      </div>

      <ContinueButton
        disabled={!valid}
        onClick={() => onSubmit({ name: name.trim(), email: email.trim() })}
        label="Ver mi resultado"
      />
    </>
  );
};

export default EmailCaptureStep;
