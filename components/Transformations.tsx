"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ChevronsLeftRight } from "lucide-react";
import { waLink } from "@/lib/site";
import SectionHead from "./SectionHead";

const items = [
  {
    name: "Hafiz",
    tag: "Dari gemuk ke fit",
    result: "−20kg · 6 bulan",
    before:
      "https://images.unsplash.com/photo-1549476464-37392f717541?w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80",
  },
  {
    name: "Danial",
    tag: "Dari kurus ke berisi",
    result: "+8kg otot · 5 bulan",
    before:
      "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1532384816664-01b8b7238c8d?w=800&q=80",
  },
  {
    name: "Aina",
    tag: "Lebih kuat & bertenaga",
    result: "4 bulan · ruang wanita",
    before:
      "https://images.unsplash.com/photo-1567598508481-65985588e295?w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=800&q=80",
  },
];

function CompareSlider({
  before,
  after,
  alt,
}: {
  before: string;
  after: string;
  alt: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(50);
  const dragging = useRef(false);

  const setFromClientX = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPct(Math.max(0, Math.min(100, p)));
  };

  const onDown = (e: React.PointerEvent) => {
    dragging.current = true;
    ref.current?.setPointerCapture(e.pointerId);
    setFromClientX(e.clientX);
  };
  const onMove = (e: React.PointerEvent) => {
    if (dragging.current) setFromClientX(e.clientX);
  };
  const onUp = () => {
    dragging.current = false;
  };
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPct((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPct((p) => Math.min(100, p + 4));
  };

  return (
    <div
      ref={ref}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      className="relative aspect-[4/5] w-full cursor-ew-resize select-none overflow-hidden rounded-xl border border-line [touch-action:pan-y]"
    >
      {/* after = base layer */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={after}
        alt={`Selepas — ${alt}`}
        draggable={false}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      {/* before = clipped over the top */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={before}
        alt={`Sebelum — ${alt}`}
        draggable={false}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
      />

      <span className="pointer-events-none absolute left-3 top-3 rounded bg-ink/70 px-2 py-1 font-display text-[10px] font-bold tracking-[0.15em] text-body backdrop-blur-sm">
        SEBELUM
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded bg-accent/90 px-2 py-1 font-display text-[10px] font-bold tracking-[0.15em] text-ink backdrop-blur-sm">
        SELEPAS
      </span>

      {/* divider + handle */}
      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white/80"
        style={{ left: `${pct}%` }}
        aria-hidden="true"
      />
      <button
        type="button"
        role="slider"
        aria-label={`Seret untuk bandingkan sebelum dan selepas — ${alt}`}
        aria-valuenow={Math.round(pct)}
        aria-valuemin={0}
        aria-valuemax={100}
        onKeyDown={onKey}
        className="absolute top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-ink/80 text-white shadow-lg backdrop-blur-sm transition-colors duration-200 hover:bg-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        style={{ left: `${pct}%` }}
      >
        <ChevronsLeftRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
}

export default function Transformations() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const next = Math.max(0, Math.min(items.length - 1, i));
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
    <section className="glow-top relative border-t border-line bg-ink-2 py-20 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          title={
            <>
              Transformasi <span className="text-accent">Sebenar</span>
            </>
          }
          sub="Hasil datang dari konsistensi — seret pembahagi untuk lihat sebelum & selepas."
        />

        <div
          ref={trackRef}
          onScroll={onScroll}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((it) => (
            <article key={it.name} className="w-full shrink-0 snap-center">
              <div className="mx-auto max-w-md">
                <CompareSlider
                  before={it.before}
                  after={it.after}
                  alt={`${it.name}, ${it.tag}`}
                />

                <div className="mt-5 text-center">
                  <p className="font-display text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                    {it.tag}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold tracking-wide">
                    {it.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{it.result}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => scrollTo(index - 1)}
            disabled={index === 0}
            aria-label="Transformasi sebelum ini"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-body transition-colors duration-200 hover:border-raised hover:bg-raised disabled:opacity-30 disabled:hover:border-line disabled:hover:bg-transparent"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="flex items-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollTo(i)}
                aria-label={`Pergi ke transformasi ${i + 1}`}
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
            disabled={index === items.length - 1}
            aria-label="Transformasi seterusnya"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-body transition-colors duration-200 hover:border-raised hover:bg-raised disabled:opacity-30 disabled:hover:border-line disabled:hover:bg-transparent"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={waLink("Hi Alpha Gym, saya nak mula transformasi saya.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-wa px-6 py-3 font-display text-sm font-semibold tracking-wide text-white transition-colors duration-200 hover:bg-wa-deep"
          >
            MULA TRANSFORMASI ANDA
          </a>
        </div>
      </div>
    </section>
  );
}
