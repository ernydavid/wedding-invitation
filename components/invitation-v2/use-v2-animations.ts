"use client";

import { useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useV2Animations(rootRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const root = rootRef.current;

    if (!root) return;

    const context = gsap.context(() => {
      const media = gsap.matchMedia();
      media.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduced: "(prefers-reduced-motion: reduce)",
        },
        (mediaContext) => {
          const reducedMotion = mediaContext.conditions?.reduced;

          if (reducedMotion) {
            gsap.set(
              "[data-v2-reveal], [data-v2-word], [data-v2-parallax-layer], [data-v2-balloon-column], [data-v2-couple]",
              { autoAlpha: 1, clearProps: "transform" },
            );
            return;
          }

          const heroTimeline = gsap.timeline({
            defaults: { ease: "power3.out" },
          });

          heroTimeline
            .from("[data-v2-hero-kicker]", {
              autoAlpha: 0,
              y: 20,
              duration: 0.55,
            })
            .from(
              "[data-v2-hero-word]",
              {
                autoAlpha: 0,
                yPercent: 110,
                rotate: 3,
                duration: 0.9,
                stagger: 0.08,
              },
              "-=0.2",
            )
            .from(
              "[data-v2-scene]",
              {
                autoAlpha: 0,
                duration: 0.9,
              },
              0,
            );

          const parallaxLayers = gsap.utils.toArray<HTMLElement>(
            "[data-v2-parallax-layer]",
          );
          const hero = root.querySelector<HTMLElement>("[data-v2-hero]");
          if (!hero) return;
          const arrowFloat = gsap.to("[data-v2-scroll-arrow]", {
            y: 10,
            duration: 1.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
          const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: () => `+=${hero.offsetHeight * 1.15}`,
              scrub: 0.8,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                if (self.progress > 0.25) arrowFloat.pause();
                else arrowFloat.resume();
              },
            },
          });

          // Separate balloon tracks: scroll-controlled horizontal exit only.
          gsap.utils
            .toArray<HTMLElement>("[data-v2-balloon-column]")
            .forEach((column) => {
              parallaxTimeline.fromTo(
                column,
                { x: 0, autoAlpha: 1 },
                {
                  x: () =>
                    Number(column.dataset.exit) *
                    (hero.offsetHeight * 0.3 + column.offsetWidth),
                  autoAlpha: 0,
                  ease: "none",
                  duration: 0.65,
                },
                0,
              );
            });

          parallaxLayers.forEach((layer) => {
            parallaxTimeline.fromTo(
              layer,
              { x: 0, y: 0, scale: 1 },
              {
                y: () =>
                  -hero.offsetHeight * Number(layer.dataset.depth ?? 0.1),
                x: () =>
                  Math.min(hero.offsetWidth, 1100) *
                  Number(layer.dataset.drift ?? 0),
                scale: 1.06,
                ease: "none",
                duration: 1,
              },
              0,
            );
          });

          parallaxTimeline
            .to(
              "[data-v2-hero-intro]",
              { y: -75, autoAlpha: 0, ease: "none", duration: 0.36 },
              0,
            )
            .fromTo(
              "[data-v2-hero-reveal]",
              { y: 65, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, ease: "power2.out", duration: 0.42 },
              0.48,
            )
            .to(
              "[data-v2-scroll-note]",
              { autoAlpha: 0, ease: "none", duration: 0.25 },
              0,
            );

          gsap.utils.toArray<HTMLElement>("[data-v2-couple]").forEach((art) => {
            const section = art.closest("section");
            gsap.from(art, {
              autoAlpha: 0,
              y: 48,
              scale: 0.94,
              rotate: -3,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: { trigger: section, start: "top 75%", once: true },
            });
            gsap.fromTo(
              art.parentElement,
              { y: 20 },
              {
                y: -20,
                ease: "none",
                scrollTrigger: {
                  trigger: section,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 0.8,
                },
              },
            );
          });

          gsap.utils
            .toArray<HTMLElement>("[data-v2-section]")
            .forEach((section) => {
              const words =
                section.querySelectorAll<HTMLElement>("[data-v2-word]");
              const reveals =
                section.querySelectorAll<HTMLElement>("[data-v2-reveal]");

              if (words.length) {
                gsap.from(words, {
                  autoAlpha: 0,
                  yPercent: 105,
                  rotate: 2,
                  duration: 0.8,
                  stagger: 0.055,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: section,
                    start: "top 72%",
                    once: true,
                  },
                });
              }

              if (reveals.length) {
                gsap.from(reveals, {
                  autoAlpha: 0,
                  y: 28,
                  duration: 0.75,
                  stagger: 0.12,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: section,
                    start: "top 68%",
                    once: true,
                  },
                });
              }
            });

          gsap.utils
            .toArray<HTMLElement>("[data-v2-float]")
            .forEach((shape, index) => {
              gsap.to(shape, {
                yPercent: index % 2 === 0 ? -16 : 16,
                rotate: index % 2 === 0 ? 7 : -7,
                ease: "none",
                scrollTrigger: {
                  trigger: shape.closest("section") ?? shape,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 0.8,
                },
              });
            });
        },
      );
    }, root);

    return () => context.revert();
  }, [rootRef]);
}
