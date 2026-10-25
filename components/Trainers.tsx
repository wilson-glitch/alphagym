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
  return (
    <section className="relative border-t border-line bg-ink py-20 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          title={
            <>
              Jurulatih <span className="text-accent">Berpengalaman</span>
            </>
          }
          sub="Pasukan kami bukan sekadar pengawas — mereka pembimbing yang faham matlamat anda."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((t) => (
            <article key={t.name} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-line bg-surface">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.image}
                  alt={`${t.name}, jurulatih ${t.focus} di Alpha Gym`}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale-[0.55] transition-[filter] duration-300 group-hover:grayscale-0"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 bg-accent/10 mix-blend-color transition-opacity duration-300 group-hover:opacity-0"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-5">
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
          ))}
        </div>
      </div>
    </section>
  );
}
