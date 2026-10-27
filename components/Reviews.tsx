"use client";

import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { site } from "@/lib/site";
import SectionHead from "./SectionHead";

const reviews = [
  {
    name: "Hafiz M.",
    meta: "Ahli sejak Jun 2026",
    body: "Peralatan baharu, aircond sejuk, surau pun ada. Harga pun berpatutan untuk gym macam ni di KB. Puas hati.",
  },
  {
    name: "Siti N.",
    meta: "Pelajar",
    body: "Saya suka ada ruang khas untuk wanita. Selesa untuk bersenam tanpa risau. Jurulatih pun mesra.",
  },
  {
    name: "Rahman A.",
    meta: "Pekerja pejabat",
    body: "Lokasi senang nak pergi lepas kerja. Buka sampai 12 malam, boleh datang bila-bila masa.",
  },
];

export default function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const next = Math.max(0, Math.min(reviews.length - 1, i));
    track.scrollTo({ left: next * track.clientWidth, behavior: "smooth" });
    setIndex(next);
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const i = Math.round(track.scrollLeft / track.clientWidth);
    if (i !== index) setIndex(i);
  };

  return (
    <section className="glow-top relative border-t border-line bg-ink-2 py-14 sm:py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-center gap-4 sm:justify-between">
          <SectionHead
            title={
              <>
                Kata <span className="text-accent">Mereka</span>
              </>
            }
            sub="Review sebenar dari ahli Alpha Gym di Google."
          />
          <div className="flex items-center gap-2">
            <div className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="font-display text-xl font-bold">
              {site.rating.score}
            </span>
            <span className="text-sm text-muted">
              · {site.rating.count} review
            </span>
          </div>
        </div>

        <div
          ref={trackRef}
          onScroll={onScroll}
          className="mt-10 flex snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {reviews.map((r) => (
            <div key={r.name} className="w-full shrink-0 snap-center">
              <figure className="edge-lit relative mx-auto flex min-h-[20rem] max-w-md flex-col justify-between overflow-hidden rounded-xl border border-line bg-surface p-8 text-center">
                <span
                  className="pointer-events-none absolute right-6 top-4 select-none font-display text-6xl font-bold leading-none text-accent/10"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <div
                  className="flex justify-center"
                  aria-label="5 daripada 5 bintang"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <blockquote className="flex-1 py-6 text-base leading-relaxed text-body/90">
                  {r.body}
                </blockquote>

                <figcaption className="border-t border-line pt-5">
                  <span className="block font-display text-base font-semibold tracking-wide">
                    {r.name}
                  </span>
                  <span className="text-xs text-muted">{r.meta}</span>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => scrollTo(index - 1)}
            disabled={index === 0}
            aria-label="Review sebelum ini"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-body transition-colors duration-200 hover:border-raised hover:bg-raised disabled:opacity-30 disabled:hover:border-line disabled:hover:bg-transparent"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="flex items-center gap-2">
            {reviews.map((r, i) => (
              <button
                key={r.name}
                type="button"
                onClick={() => scrollTo(i)}
                aria-label={`Pergi ke review ${i + 1}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-colors duration-200 ${
                  i === index ? "w-6 bg-accent" : "w-2 bg-line hover:bg-muted"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollTo(index + 1)}
            disabled={index === reviews.length - 1}
            aria-label="Review seterusnya"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-body transition-colors duration-200 hover:border-raised hover:bg-raised disabled:opacity-30 disabled:hover:border-line disabled:hover:bg-transparent"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
