"use client";

import { useRef, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
  MessageCircle,
  Video,
} from "lucide-react";
import { useV2Animations } from "@/components/invitation-v2/use-v2-animations";
import { HeroDecorationScene } from "./hero-decoration-scene";
import { WeddingCountdown } from "./wedding-countdown";
import { DressCodeSection } from "./dress-code-section";
import { ReceptionDirectionsVideo } from "./reception-directions-video";
import styles from "@/components/invitation-v2/wedding-invitation-v2.module.css";

function AnimatedTitle({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <h2 className={`${styles.sectionTitle} ${className}`} aria-label={children}>
      {children.split(" ").map((word, index) => (
        <span
          className={styles.wordClip}
          aria-hidden="true"
          key={`${word}-${index}`}
        >
          <span data-v2-word>{word}</span>
        </span>
      ))}
    </h2>
  );
}

function Icon({ children }: { children: ReactNode }) {
  return <span className={styles.icon}>{children}</span>;
}

export function WeddingInvitationV2() {
  const rootRef = useRef<HTMLElement>(null);
  useV2Animations(rootRef);

  return (
    <main ref={rootRef} className={styles.page}>
      <section
        className={styles.hero}
        id="inicio"
        aria-labelledby="hero-title"
        data-v2-hero
      >
        <HeroDecorationScene />

        <div className={styles.heroCopy} data-v2-hero-intro>
          <p className={styles.eyebrow} data-v2-hero-kicker>
            Nos casamos
          </p>
          <h1
            className={styles.heroTitle}
            id="hero-title"
            aria-label="Jean Carlos González y Melissa Escobar"
          >
            <span className={styles.heroNameLine}>
              <span className={styles.heroWordClip}>
                <span data-v2-hero-word>Jean</span>
              </span>
              <span className={styles.heroWordClip}>
                <span data-v2-hero-word>Carlos</span>
              </span>
            </span>
            <span className={styles.ampersand} data-v2-hero-word>
              &amp;
            </span>
            <span className={styles.heroNameLine}>
              <span className={styles.heroWordClip}>
                <span data-v2-hero-word>Melissa</span>
              </span>
            </span>
          </h1>
        </div>

        <div className={styles.heroReveal} data-v2-hero-reveal>
          <p className={styles.heroMessage}>
            Con mucha ilusión queremos compartir contigo este día tan especial,
            en el que comenzaremos juntos una nueva etapa de nuestras vidas.
          </p>
        </div>

        <div
          className={styles.scrollIndicator}
          data-v2-scroll-note
          aria-hidden="true"
        >
          <ArrowDown size={28} strokeWidth={1.4} data-v2-scroll-arrow />
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.story}`}
        id="historia"
        aria-label="Nuestra unión"
        data-v2-section
      >
        <div
          className={`${styles.decorativeOrb} ${styles.orbLeft}`}
          data-v2-float
        />
        <div className={styles.storyGrid}>
          <div className={styles.coupleArt} data-v2-couple-float>
            <img
              src="/assets/v2/couple-line-gold.webp"
              width="800"
              height="1007"
              alt="Ilustración de una pareja de novios unidos"
              data-v2-couple
            />
          </div>
          <a
            className={styles.scriptureLink}
            href="https://www.jw.org/es/biblioteca/biblia/biblia-estudio/libros/mateo/19/#v40019006"
            target="_blank"
            rel="noopener noreferrer"
            data-v2-reveal
          >
            <blockquote>
              “Así que ya no son dos, sino una sola carne. Por lo tanto, lo que
              Dios ha unido, que no lo separe ningún hombre”.
            </blockquote>
            <span>Mateo 16:9</span>
          </a>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.dateSection}`}
        id="fecha"
        data-v2-section
      >
        <div
          className={`${styles.decorativeOrb} ${styles.orbRight}`}
          data-v2-float
        />
        <div className={styles.dateGrid}>
          <div className={styles.dateCopy}>
            <img
              className={styles.ringsAsset}
              src="/assets/v2/wedding-rings-gold.png"
              width="800"
              height="435"
              alt="Dos alianzas de boda entrelazadas en líneas doradas"
              data-v2-reveal
            />
            <AnimatedTitle>
              Tenemos el agrado de invitarlos a nuestra boda
            </AnimatedTitle>
          </div>
          <div className={styles.calendarCard} data-v2-reveal>
            <span className={styles.calendarMonth}>NOVIEMBRE 2026</span>
            <strong>06</strong>
            <span className={styles.calendarWeekday}>VIERNES</span>
            <WeddingCountdown />
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.locationSection}`}
        id="lugar"
        data-v2-section
      >
        <div className={styles.locationGrid}>
          <div className={styles.mapCard} data-v2-reveal>
            <iframe
              className={styles.embeddedMap}
              title="Mapa de la ubicación de los consejos bíblicos"
              src="https://www.google.com/maps?q=10.9963072,-74.7940177&z=17&hl=es&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className={styles.locationCopy}>
            <AnimatedTitle>Acompáñanos en los consejos bíblicos</AnimatedTitle>
            <div className={styles.address} data-v2-reveal>
              <Icon>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 21s7-5.4 7-12a7 7 0 1 0-14 0c0 6.6 7 12 7 12Z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </Icon>
              <div>
                <strong>Salón del Reino de los Testigos de Jehová</strong>
                <p>Congregación El Prado, Calle 64 #58-59</p>
              </div>
            </div>
            <div className={styles.locationActions}>
              <a
                className={styles.outlineButton}
                href="https://maps.app.goo.gl/3DgzaExhwnoBzoUk6"
                target="_blank"
                rel="noreferrer"
                data-v2-reveal
              >
                <span>Abrir ubicación</span>
                <ArrowUpRight size={18} strokeWidth={1.6} aria-hidden="true" />
              </a>
              {/* Activar como enlace cuando se disponga de la URL de Zoom. */}
              <button
                className={styles.outlineButton}
                type="button"
                disabled
                title="Enlace de Zoom próximamente"
                data-v2-reveal
              >
                <span>Unirse por Zoom</span>
                <Video size={18} strokeWidth={1.6} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.celebrationSection}`}
        id="recepcion"
        data-v2-section
      >
        <div
          className={`${styles.decorativeOrb} ${styles.orbBottom}`}
          data-v2-float
        />
        <div className={styles.locationGrid}>
          <div className={styles.mapCard} data-v2-reveal>
            <iframe
              className={styles.embeddedMap}
              title="Mapa de la recepción en casa campestre el Refugio"
              src="https://www.google.com/maps?q=10.814099,-74.7932716&z=17&hl=es&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className={styles.locationCopy}>
            <AnimatedTitle>Recepción</AnimatedTitle>
            <div className={styles.address} data-v2-reveal>
              <Icon>
                <MapPin size={20} aria-hidden="true" />
              </Icon>
              <div>
                <strong>Casa campestre el “Refugio”</strong>
                <p>
                  Carretera a Pital de Carlin, Km 3 + 800 mts.
                  <br />
                  Sabanagrande (Atl). Parcela 16, etapa 3.
                </p>
                <p>
                  Hora: <time dateTime="18:30">6:30 PM</time>
                </p>
              </div>
            </div>
            <div
              className={`${styles.locationActions} ${styles.receptionActions}`}
            >
              <a
                className={styles.outlineButton}
                href="https://maps.app.goo.gl/6E9MDvxygCs8Q8Xw5"
                target="_blank"
                rel="noreferrer"
                data-v2-reveal
              >
                <span>Abrir ubicación</span>
                <ArrowUpRight size={18} strokeWidth={1.6} aria-hidden="true" />
              </a>
              <ReceptionDirectionsVideo
                buttonClassName={styles.outlineButton}
              />
            </div>
          </div>
        </div>
        <div
          className={`${styles.petalRow} ${styles.receptionPetals}`}
          data-v2-reveal
          aria-hidden="true"
        >
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
      </section>

      <DressCodeSection className={styles.section} />

      <section
        className={`${styles.section} ${styles.giftsSection}`}
        id="regalos"
        data-v2-section
      >
        <div className={styles.announcementsContent}>
          <p className={styles.importantLabel} data-v2-reveal>
            IMPORTANTE
          </p>
          <div className={styles.announcementsGrid}>
            <div className={styles.rsvpArt} data-v2-reveal>
              <img
                src="/assets/v2/rsvp-line.svg"
                alt="Invitación con un corazón y un sello de confirmación de asistencia"
                width={420}
                height={360}
                loading="lazy"
              />
            </div>
            <div className={styles.announcement}>
              <h2 data-v2-reveal>Confirmación de asistencia</h2>
              <p data-v2-reveal>
                Tu confirmación nos ayudará a preparar cada detalle de este día
                tan especial
              </p>
              <a
                className={`${styles.primaryButton} ${styles.rsvpButton}`}
                href={`https://wa.me/573057845572?text=${encodeURIComponent("Hola, la familia ___ confirma asistencia")}`}
                target="_blank"
                rel="noreferrer"
                data-v2-reveal
              >
                <span>Confirma tu asistencia aquí</span>
                <MessageCircle size={18} strokeWidth={1.6} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer} data-v2-section>
        <p data-v2-reveal>CON AMOR</p>
        <div className={styles.footerNames} data-v2-reveal>
          Jean Carlos <span>&amp;</span> Melissa
        </div>
        <img
          className={styles.footerLogo}
          src="/assets/v2/monogram-jm-gold.png"
          alt="Sello dorado con el monograma J y M de Jean Carlos y Melissa"
          width={1254}
          height={1254}
          loading="lazy"
          data-v2-reveal
        />
        <p data-v2-reveal>06 · NOVIEMBRE · 2026</p>
      </footer>
    </main>
  );
}
