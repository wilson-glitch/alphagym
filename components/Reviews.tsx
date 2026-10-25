import { Star } from "lucide-react";
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
  return (
    <section className="glow-top relative border-t border-line bg-ink-2 py-20 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
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

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="edge-lit relative bg-surface p-7 transition-colors duration-200 hover:bg-raised"
            >
              <span
                className="absolute right-6 top-4 font-display text-6xl font-bold leading-none text-accent/10 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <div className="flex" aria-label="5 daripada 5 bintang">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-muted">
                {r.body}
              </blockquote>
              <figcaption className="mt-5 border-t border-line pt-4">
                <span className="block font-display text-base font-semibold tracking-wide">
                  {r.name}
                </span>
                <span className="text-xs text-muted">{r.meta}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
