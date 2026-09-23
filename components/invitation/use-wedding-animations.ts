"use client";

import { useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const target = (name: string) => `[data-animate="${name}"]`;

export function useWeddingAnimations(rootRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const root = rootRef.current;

    if (!root) return;

    const context = gsap.context(() => {
      const hero = gsap.timeline({
        scrollTrigger: {
          trigger: '[data-section="hero"]',
          start: "top top",
          end: "100%",
          scrub: true,
          pin: true
        }
      });

      hero.fromTo(target("hero-image-1"), { y: 0 }, { yPercent: -25, duration: 4 });
      hero.fromTo(target("hero-image-1"), { filter: "brightness(1)" }, { filter: "brightness(1.05)", duration: 4 }, "-=4");
      hero.fromTo(target("hero-image-3"), { y: 0 }, { yPercent: -35, duration: 4 }, "-=4");
      hero.fromTo(target("hero-image-3"), { filter: "brightness(1)" }, { filter: "brightness(1.1)", duration: 4 }, "-=4");
      hero.fromTo(target("hero-image-4"), { y: 0 }, { yPercent: -45, duration: 4 }, "-=4");
      hero.fromTo(target("hero-image-5"), { y: 0 }, { yPercent: -50, duration: 4 }, "-=4");
      hero.fromTo(target("hero-image-6"), { y: 0 }, { yPercent: -55, duration: 4 }, "-=4");
      hero.fromTo(target("hero-image-2"), { y: 0 }, { yPercent: -25, duration: 4 }, "-=4");
      hero.fromTo(target("hero-image-2"), { filter: "brightness(1)" }, { filter: "brightness(1.1)", duration: 4 }, "-=4");
      hero.fromTo(target("hero-blur"), { y: "100vh" }, { y: "40vh", duration: 4 }, "-=4");
      hero.fromTo(target("hero-title"), { autoAlpha: 1 }, { autoAlpha: 0, duration: 1 }, "-=4");
      hero.fromTo(target("hero-subtitle"), { autoAlpha: 1 }, { autoAlpha: 0, duration: 1 }, "-=4");
      hero.fromTo(target("hero-content-title"), { y: 0 }, { y: "-60vh", duration: 4 }, "-=4");
      hero.fromTo(target("hero-content-title"), { autoAlpha: 0 }, { autoAlpha: 1, duration: 3 }, "-=3");
      hero.fromTo(target("hero-content-message"), { y: 0 }, { y: "-60vh", duration: 4 }, "-=4");
      hero.fromTo(target("hero-content-message"), { autoAlpha: 0 }, { autoAlpha: 1, duration: 3 }, "-=3");
      hero.fromTo(target("hero-line"), { y: 0 }, { yPercent: -10, duration: 1 }, "-=5");
      hero.fromTo(target("hero-line"), { autoAlpha: 1 }, { autoAlpha: 0, duration: 1 }, "-=5");

      const date = gsap.timeline({
        scrollTrigger: {
          trigger: '[data-section="date"]',
          start: "top top",
          end: "100%",
          scrub: true,
          pin: true
        }
      });

      date.fromTo(target("date-image-4"), { scale: 2 }, { scale: 1, duration: 4 });
      date.fromTo(target("date-image-4"), { yPercent: 50 }, { yPercent: 0, duration: 4 }, "-=4");
      date.fromTo(target("date-image-4"), { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 }, "-=4");
      date.fromTo(target("date-image-4"), { filter: "blur(1rem)" }, { filter: "blur(0rem)", duration: 4 }, "-=4");
      date.fromTo(target("date-image-2"), { yPercent: -20 }, { yPercent: 0, duration: 2 }, "-=4");
      date.fromTo(target("date-image-7"), { yPercent: 20 }, { yPercent: 0, duration: 3 }, "-=4");
      date.fromTo(target("date-image-3"), { yPercent: -40 }, { yPercent: 0, duration: 6 }, "-=4");
      date.fromTo(target("date-image-6"), { yPercent: 40 }, { yPercent: 0, duration: 6 }, "-=4");
      date.fromTo(target("date-image-5"), { scale: 2 }, { scale: 1, duration: 4 }, "-=4");
      date.fromTo(target("date-title"), { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.5 });
      date.fromTo(target("date-line-in"), { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.5 }, "-=6");
      date.fromTo(target("date-line-out"), { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 }, "-=1");

      const location = gsap.timeline({
        scrollTrigger: {
          trigger: '[data-section="location"]',
          start: "top top",
          end: "100%",
          scrub: true,
          pin: true
        }
      });

      location.fromTo(target("location-line-in"), { autoAlpha: 1 }, { autoAlpha: 0, duration: 1 });
      location.fromTo(target("location-image-1"), { yPercent: -15 }, { yPercent: 0, duration: 3 }, "-=1");
      location.fromTo(target("location-image-2"), { autoAlpha: 0 }, { autoAlpha: 1, duration: 4 }, "-=1");
      location.fromTo(target("location-image-5"), { yPercent: 45 }, { yPercent: 0, duration: 6 });
      location.fromTo(target("location-image-4"), { yPercent: 55 }, { yPercent: 0, duration: 6 }, "-=6");
      location.fromTo(target("location-image-4"), { xPercent: -15 }, { xPercent: 0, duration: 6 }, "-=6");
      location.fromTo(target("location-image-3"), { yPercent: 55 }, { yPercent: 0, duration: 6 }, "-=6");
      location.fromTo(target("location-message"), { autoAlpha: 0 }, { autoAlpha: 1, duration: 4 }, "-=5");
      location.fromTo(target("location-message"), { yPercent: 30 }, { yPercent: 0, duration: 4 }, "-=4");
      location.fromTo(target("location-line-out"), { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 }, "-=4");

      const invitation = gsap.timeline({
        scrollTrigger: {
          trigger: '[data-section="invitation"]',
          start: "top top",
          end: "150%",
          scrub: true,
          pin: true
        }
      });

      invitation.fromTo(target("invitation-image-1"), { yPercent: 0 }, { yPercent: -10, duration: 2 });
      invitation.fromTo(target("invitation-image-2"), { yPercent: 30 }, { yPercent: 0, duration: 4 }, "-=2");
      invitation.fromTo(target("invitation-image-3"), { yPercent: 25 }, { yPercent: 0, duration: 4 }, "-=4");
      invitation.fromTo(target("invitation-image-4"), { yPercent: 20 }, { yPercent: 0, duration: 4 }, "-=4");
      invitation.fromTo(target("invitation-image-6"), { xPercent: -80 }, { xPercent: 80, duration: 7 }, "-=1");
      invitation.fromTo(target("invitation-title"), { autoAlpha: 0 }, { autoAlpha: 1, duration: 2 }, "-=7");
      invitation.fromTo(target("invitation-title"), { xPercent: -30 }, { xPercent: 0, duration: 2 }, "-=7");
      invitation.fromTo(target("invitation-message"), { autoAlpha: 0 }, { autoAlpha: 1, duration: 2 }, "-=7");
      invitation.fromTo(target("invitation-message"), { xPercent: -110 }, { xPercent: 0, duration: 2 }, "-=7");
      invitation.fromTo(target("invitation-line"), { autoAlpha: 0 }, { autoAlpha: 1, duration: 2 });

      const celebration = gsap.timeline({
        scrollTrigger: {
          trigger: '[data-section="celebration"]',
          start: "top top",
          end: "150%",
          scrub: true,
          pin: true
        }
      });

      celebration.fromTo(target("celebration-image-1"), { yPercent: 50, scale: 1 }, { yPercent: 40, scale: 1.5, transformOrigin: "bottom", ease: "power3.in", duration: 5 });
      celebration.fromTo(target("celebration-image-1"), { yPercent: 40, scale: 1.5 }, { yPercent: -10, scale: 0.7, transformOrigin: "bottom", ease: "power3.out", duration: 5 });
      celebration.fromTo(target("celebration-message"), { autoAlpha: 0 }, { autoAlpha: 1, duration: 2 }, "-=4");
      celebration.fromTo(target("celebration-line"), { autoAlpha: 0 }, { autoAlpha: 1, duration: 2 }, "-=2");
      celebration.fromTo(target("celebration-image-2"), { autoAlpha: 0 }, { autoAlpha: 1, duration: 2 }, "-=2");
    }, root);

    return () => context.revert();
  }, [rootRef]);
}
