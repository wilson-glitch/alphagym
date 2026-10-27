"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHead from "./SectionHead";

const trainers = [
  {
    name: "Coach Aiman",
    focus: "Strength & Conditioning",
    detail: "5 tahun pengalaman",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80",
  },
  {
    name: "Coach Faris",
    focus: "Bodybuilding",
    detail: "Bekas peserta kebangsaan",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80",
  },
  {
    name: "Coach Nurul",
    focus: "Latihan Wanita",
    detail: "Certified HIIT & kondisi",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80",
  },
  {
    name: "Coach Zaki",
    focus: "Powerlifting",
    detail: "Certified Personal Trainer",
    image:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600&q=80",
  },
];

export default function Trainers() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    if (scrollTimer.current) clearTimeout(scrollTimer.current);
    scrollTimer.current = setTimeout(() => {
      const center = track.scrollLeft + track.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const c = el.offsetLeft + el.offsetWidth / 2;
        const d = Math.abs(c - center);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      if (best !== active) setActive(best);
    }, 90);
  };

  const scrollTo = (i: number) => {
    const track = trackRef.current;
    const el = cardRefs.current[i];
    if (!track || !el) return;
    const clamped = Math.max(0, Math.min(trainers.length - 1, i));
    track.scrollTo({
      left: el.offsetLeft - (track.clientWidth - el.offsetWidth) / 2,
      behavior: "smooth",
    });
    setActive(clamped);
  };

  // center the first card on mount
  useEffect(() => {
    scrollTo(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="relative border-t border-line bg-ink py-14 sm:py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          title={
            <>
              Jurulatih <span className="text-accent">Berpengalaman</span>
            </>
          }
          sub="Pasukan kami bukan sekadar pengawas — mereka pembimbing yang faham matlamat anda."
        />
      </div>

      <div
        ref={trackRef}
        onScroll={onScroll}
        className="mt-10 flex snap-x snap-mandatory items-center gap-4 overflow-x-auto scroll-smooth px-[14%] py-4 sm:px-[27%] lg:gap-6 lg:px-[18%] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {trainers.map((t, i) => {
          const isActive = i === active;
          return (
            <div
              key={t.name}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className={`relative w-[72%] shrink-0 snap-center transition-all duration-300 sm:w-[46%] lg:w-[44%] ${
                isActive ? "scale-100" : "scale-[0.86] opacity-50"
              }`}
            >
              {isActive && (
                <>
                  <div
                    className="pointer-events-none absolute inset-y-6 -left-4 w-20 bg-gradient-to-r from-accent/45 to-transparent blur-2xl"
                    aria-hidden="true"
                  />
                  <div
                    className="pointer-events-none absolute inset-y-6 -right-4 w-20 bg-gradient-to-l from-accent/45 to-transparent blur-2xl"
                    aria-hidden="true"
                  />
                </>
              )}

              <article className="group relative">
                <div
                  className={`relative aspect-[4/5] overflow-hidden rounded-xl border bg-surface transition-colors duration-300 ${
                    isActive ? "border-accent/60" : "border-line"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.image}
                    alt={`${t.name}, jurulatih ${t.focus} di Alpha Gym`}
                    loading="lazy"
                    className={`h-full w-full object-cover transition-[filter] duration-300 ${
                      isActive ? "grayscale-0" : "grayscale-[0.55]"
                    }`}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-center">
                    <h3 className="font-display text-lg font-bold tracking-wide">
                      {t.name}
                    </h3>
                    <p className="mt-0.5 font-display text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                      {t.focus}
                    </p>
                    <p className="mt-1 text-sm text-muted">{t.detail}</p>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={() => scrollTo(Math.max(0, active - 1))}
          disabled={active === 0}
          aria-label="Jurulatih sebelum ini"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-body transition-colors duration-200 hover:border-raised hover:bg-raised disabled:opacity-30 disabled:hover:border-line disabled:hover:bg-transparent"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="flex items-center gap-2">
          {trainers.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`Pergi ke ${t.name}`}
              aria-current={i === active}
              className={`h-2 rounded-full transition-colors duration-200 ${
                i === active ? "w-6 bg-accent" : "w-2 bg-line hover:bg-muted"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollTo(Math.min(trainers.length - 1, active + 1))}
          disabled={active === trainers.length - 1}
          aria-label="Jurulatih seterusnya"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-body transition-colors duration-200 hover:border-raised hover:bg-raised disabled:opacity-30 disabled:hover:border-line disabled:hover:bg-transparent"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
