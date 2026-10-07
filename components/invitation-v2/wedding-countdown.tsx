"use client";

import { useEffect, useState } from "react";
import NumberFlow, { NumberFlowGroup } from "@number-flow/react";
import styles from "./wedding-invitation-v2.module.css";

// Start of the wedding day in Colombia (UTC-05:00), independent of visitor timezone.
export const WEDDING_DAY = Date.parse("2026-11-06T00:00:00-05:00");

export function getWeddingCountdown(now: number) {
  const seconds = Math.max(0, Math.ceil((WEDDING_DAY - now) / 1000));
  return {
    days: Math.floor(seconds / 86400),
    hours: Math.floor((seconds % 86400) / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: seconds % 60,
  };
}

export function WeddingCountdown() {
  const [remaining, setRemaining] = useState<ReturnType<
    typeof getWeddingCountdown
  > | null>(null);

  useEffect(() => {
    let interval: number | undefined;
    const update = () => {
      const now = Date.now();
      setRemaining(getWeddingCountdown(now));
      if (now >= WEDDING_DAY && interval !== undefined)
        window.clearInterval(interval);
    };
    update();
    if (Date.now() < WEDDING_DAY) interval = window.setInterval(update, 1000);
    // Resync from the real clock when returning from a background tab.
    document.addEventListener("visibilitychange", update);
    return () => {
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  const units = [
    ["days", "Días"],
    ["hours", "Horas"],
    ["minutes", "Minutos"],
    ["seconds", "Segundos"],
  ] as const;

  return (
    <div
      className={styles.countdown}
      role="timer"
      aria-live="off"
      aria-label="Tiempo restante hasta el 6 de noviembre de 2026"
      data-v2-countdown
    >
      <NumberFlowGroup>
        {units.map(([key, label]) => (
          <div className={styles.countdownUnit} key={key}>
            <strong data-countdown-unit={key}>
              {remaining === null ? (
                "--"
              ) : (
                <NumberFlow
                  className={styles.countdownNumber}
                  value={remaining[key]}
                  locales="es-CO"
                  format={{ minimumIntegerDigits: 2, useGrouping: false }}
                  trend={-1}
                  digits={
                    key === "minutes" || key === "seconds"
                      ? { 1: { max: 5 } }
                      : key === "hours"
                        ? { 1: { max: 2 } }
                        : undefined
                  }
                  transformTiming={{ duration: 450, easing: "ease-out" }}
                  spinTiming={{ duration: 450, easing: "ease-out" }}
                  opacityTiming={{ duration: 200, easing: "ease-out" }}
                  respectMotionPreference
                />
              )}
            </strong>
            <span>{label}</span>
          </div>
        ))}
      </NumberFlowGroup>
    </div>
  );
}
