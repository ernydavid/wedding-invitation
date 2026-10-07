"use client";

import { useEffect, useRef } from "react";
import { Play, X } from "lucide-react";
import styles from "./reception-directions-video.module.css";

export function ReceptionDirectionsVideo({ buttonClassName }: { buttonClassName: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const previousOverflow = useRef<string | null>(null);

  function restoreScroll() {
    if (previousOverflow.current !== null) {
      document.body.style.overflow = previousOverflow.current;
      previousOverflow.current = null;
    }
  }

  useEffect(() => () => {
    if (previousOverflow.current !== null) {
      document.body.style.overflow = previousOverflow.current;
    }
  }, []);

  function openVideo() {
    dialogRef.current?.showModal();
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // El clic inicia la reproducción; los controles permiten retomarla si el navegador la bloquea.
    void videoRef.current?.play().catch(() => {});
  }

  return (
    <>
      <button type="button" className={buttonClassName} onClick={openVideo} aria-haspopup="dialog" aria-controls="reception-directions-video" data-v2-reveal>
        <span>Cómo llegar</span>
        <Play size={18} strokeWidth={1.6} aria-hidden="true" />
      </button>
      <dialog
        ref={dialogRef}
        id="reception-directions-video"
        className={styles.dialog}
        aria-labelledby="reception-video-title"
        onClose={() => {
          videoRef.current?.pause();
          if (videoRef.current) videoRef.current.currentTime = 0;
          restoreScroll();
        }}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
            event.currentTarget.close();
          }
        }}
      >
        <div className={styles.header}>
          <div>
            <h2 id="reception-video-title">Cómo llegar a la recepción</h2>
            <p>Casa campestre el “Refugio”</p>
          </div>
          <button type="button" className={styles.closeButton} aria-label="Cerrar video" onClick={() => dialogRef.current?.close()}>
            <X size={22} aria-hidden="true" />
          </button>
        </div>
        <video ref={videoRef} className={styles.video} controls playsInline preload="none" aria-label="Video de referencia para llegar a la recepción">
          <source src="/assets/v2/referencia-como-llegar-recepcion.mp4" type="video/mp4" />
          Tu navegador no permite reproducir este video. <a href="/assets/v2/referencia-como-llegar-recepcion.mp4">Abrir video de referencia</a>.
        </video>
      </dialog>
    </>
  );
}
