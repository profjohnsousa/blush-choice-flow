import ContinueButton from "./ContinueButton";

interface InterstitialProps {
  onContinue: () => void;
}

const Interstitial = ({ onContinue }: InterstitialProps) => (
  <>
    <div className="mt-4 w-full rounded-2xl overflow-hidden">
      <img
        src="/step2-interstitial.png"
        alt="Mulher olhando o celular"
        className="w-full object-cover"
        style={{ maxHeight: "200px", objectPosition: "top" }}
      />
    </div>
    <h2 className="mt-4 text-left font-bold text-foreground text-[1.2rem] leading-snug">
      ✨ Comparaciones silenciosas que te paralizan
    </h2>
    <p className="mt-2 text-left text-foreground/80 text-sm leading-relaxed">
      Ves a mujeres con la vida 'perfecta' en redes sociales y, sin darte cuenta, empiezas a
      sentirte insuficiente.
    </p>
    <p className="mt-2 text-left font-medium text-foreground text-sm leading-relaxed">
      🧠 El problema no es solo el feed, es mirarte con los ojos equivocados.
    </p>
    <div
      className="mt-3 rounded-2xl px-4 py-3"
      style={{ backgroundColor: "hsl(55 100% 94%)" }}
    >
      <p
        className="italic font-bold text-sm leading-relaxed"
        style={{ color: "hsl(var(--progress-fill))" }}
      >
        📖 "Cada uno según el don que ha recibido, minístrelo a los otros."
      </p>
      <p
        className="italic font-bold text-sm mt-1"
        style={{ color: "hsl(var(--progress-fill))" }}
      >
        — 1 Pedro 4:10
      </p>
    </div>
    <ContinueButton onClick={onContinue} />
  </>
);

export default Interstitial;
