import ContinueButton from "./ContinueButton";

interface InterstitialProps {
  onContinue: () => void;
}

const Interstitial = ({ onContinue }: InterstitialProps) => (
  <>
    <div
      className="mt-7 w-full aspect-[4/3] rounded-2xl"
      style={{
        background:
          "linear-gradient(160deg, hsl(var(--accent)) 0%, hsl(var(--card-border)) 50%, hsl(var(--card-border-strong)) 100%)",
      }}
      aria-hidden
    />

    <h2 className="mt-6 text-center font-bold text-foreground text-[1.35rem] sm:text-2xl leading-snug">
      ✨ Comparaciones silenciosas que te paralizan
    </h2>

    <p className="mt-3 text-center text-foreground/80 text-base leading-relaxed">
      Ves a mujeres con la vida 'perfecta' en redes sociales y, sin darte cuenta, empiezas a
      sentirte insuficiente.
    </p>

    <p className="mt-4 text-center font-medium text-foreground text-base leading-relaxed">
      🧠 El problema no es solo el feed, es mirarte con los ojos equivocados.
    </p>

    <div
      className="mt-6 rounded-2xl px-5 py-4 text-center"
      style={{ backgroundColor: "hsl(55 100% 94%)" }}
    >
      <p
        className="italic font-bold text-base leading-relaxed"
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
