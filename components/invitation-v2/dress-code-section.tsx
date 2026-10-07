import { Heart } from "lucide-react";
import styles from "./dress-code-section.module.css";

function BotanicalBranch({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 140 160" fill="none" aria-hidden="true">
      <path d="M18 145C34 91 67 46 121 16" stroke="currentColor" strokeWidth="1.5" />
      {[0, 1, 2, 3, 4].map((leaf) => (
        <g key={leaf} transform={`translate(${leaf * 19} ${-leaf * 23})`}>
          <path d="M29 118C9 103 12 85 16 77C32 87 36 103 29 118Z" fill="currentColor" fillOpacity=".62" />
          <path d="M29 118C44 94 61 95 70 96C62 112 47 122 29 118Z" fill="currentColor" fillOpacity=".82" />
        </g>
      ))}
    </svg>
  );
}

function FormalAttire() {
  return (
    <svg viewBox="0 0 220 150" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m43 24-20 9-9 87 17 2 8-62-3 78h31l6-13 6 13h30l-3-78 8 62 17-2-9-87-20-9-13 51-15-51Z" />
      <path d="m43 24 12 25-9 7 27 45 26-45-9-7 12-25M73 76v49M62 24l11 6 11-6v13l-11-6-11 6Z" />
      <path d="M73 51v1m0 9v1M41 101h15m34 0h14" />
      <path d="m150 25 14 11 14-11 8 8-13 32 8 28 22 45h-68l22-45 8-28-13-32Z" />
      <path d="M157 65h16m-16 28h24" />
    </svg>
  );
}

export function DressCodeSection({ className }: { className: string }) {
  return (
    <section className={`${className} ${styles.section}`} id="vestimenta" aria-labelledby="dress-code-title" data-v2-section>
      <div className={styles.card}>
        <BotanicalBranch className={styles.branchTop} />
        <BotanicalBranch className={styles.branchBottom} />
        <div className={styles.attire} data-v2-reveal>
          <span />
          <FormalAttire />
          <span />
        </div>
        <Heart className={styles.heart} size={12} fill="currentColor" aria-hidden="true" data-v2-reveal />
        <h2 id="dress-code-title" className={styles.heading} data-v2-reveal>Código de vestimenta</h2>
        <p className={styles.formal} data-v2-reveal>Formal</p>
        <p className={styles.intro} data-v2-reveal>
          Queremos que te sientas cómodo/a <br />
          y luzcas increíble en este día tan especial.
        </p>
        <div className={styles.notice} data-v2-reveal>
          <h3>Importante:</h3>
          <p>
            Para mantener la armonía de nuestra celebración, agradecemos elegir
            un vestuario apropiado para la ocasión, evitando escotes, vestidos
            muy cortos o aberturas pronunciadas.
          </p>
        </div>
        <div className={styles.divider} aria-hidden="true" data-v2-reveal>
          <span /><Heart size={12} fill="currentColor" /><span />
        </div>
      </div>
    </section>
  );
}
