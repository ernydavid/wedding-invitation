import styles from "./wedding-invitation-v2.module.css";

function BalloonColumn({ side }: { side: "left" | "right" }) {
  return (
    <div
      className={side === "left" ? styles.balloonsLeft : styles.balloonsRight}
    >
      <div className={styles.balloonMotion} data-v2-balloon-column data-exit={side === "left" ? "-1" : "1"}>
        <img
          src="/assets/v2/decor-balloons-vertical.webp"
          width="560"
          height="840"
          alt=""
        />
      </div>
    </div>
  );
}

export function HeroDecorationScene() {
  return (
    <div className={styles.decorationStage} aria-hidden="true" data-v2-scene>
      <div
        className={styles.nightSky}
        data-v2-parallax-layer
        data-depth="0.035"
      />
      <div className={styles.decorationComposition}>
        <div className={styles.moonAnchor}>
          <img
            className={styles.moonAsset}
            data-v2-parallax-layer
            data-depth="0.055"
            src="/assets/v2/decor-moon.webp"
            width="800"
            height="800"
            alt=""
            fetchPriority="high"
          />
        </div>
        <div className={styles.lightsAnchor}>
          <img
            data-v2-parallax-layer
            data-depth="0.22"
            data-drift="0.015"
            src="/assets/v2/decor-lights.webp"
            width="1100"
            height="619"
            alt=""
          />
        </div>
      </div>
      <BalloonColumn side="left" />
      <BalloonColumn side="right" />
      <div className={styles.heroAtmosphere} />
    </div>
  );
}
