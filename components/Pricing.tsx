import { Check } from "lucide-react";
import { waLink } from "@/lib/site";
import SectionHead from "./SectionHead";

const plans = [
  {
    name: "Walk-in",
    price: "12",
    unit: "/ sesi",
    features: [
      "Akses penuh ke gym",
      "Guna semua kemudahan",
      "Tiada komitmen",
    ],
    cta: "Tanya Walk-in",
    message: "Hi Alpha Gym, saya nak datang walk-in. Boleh terangkan?",
    popular: false,
  },
  {
    name: "1 Bulan",
    price: "178",
    unit: "",
    perDay: "5.93",
    features: [
      "Akses tanpa had",
      "Semua kemudahan",
      "Termasuk ruang wanita",
      "Tiada bayaran pendaftaran",
    ],
    cta: "Daftar Sekarang",
    message: "Hi Alpha Gym, saya berminat dengan keahlian 1 bulan (RM178).",
    popular: true,
  },
  {
    name: "3 Bulan",
    price: "498",
    unit: "",
    perDay: "5.53",
    saving: "Jimat RM36",
    features: [
      "Semua dalam pakej bulanan",
      "Bayar sekali, latih 3 bulan",
      "Tiada bayaran pendaftaran",
    ],
    cta: "Daftar Sekarang",
    message: "Hi Alpha Gym, saya berminat dengan keahlian 3 bulan (RM498).",
    popular: false,
  },
  {
    name: "6 Bulan",
    price: "888",
    unit: "",
    perDay: "4.93",
    saving: "Jimat RM180",
    features: [
      "Semua dalam pakej bulanan",
      "Harga terendah setiap bulan",
      "Komitmen untuk hasil sebenar",
    ],
    cta: "Daftar Sekarang",
    message: "Hi Alpha Gym, saya berminat dengan keahlian 6 bulan (RM888).",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="harga"
      className="glow-corner relative border-t border-line bg-ink-2 py-14 sm:py-20"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          title={
            <>
              Harga Yang <span className="text-accent">Berpatutan</span>
            </>
          }
          sub="Tiada bayaran pendaftaran. Pilih yang sesuai dengan jadual anda."
        />

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`edge-lit relative flex flex-col px-5 pb-5 pt-10 text-center transition-colors duration-200 sm:p-7 sm:text-left ${
                plan.popular
                  ? "bg-gradient-to-b from-accent/[0.08] to-surface"
                  : "bg-surface hover:bg-raised"
              }`}
            >
              {plan.popular && (
                <span
                  className="absolute inset-x-0 top-0 h-[3px] bg-accent"
                  aria-hidden="true"
                />
              )}
              {plan.popular && (
                <span className="absolute left-1/2 top-3 -translate-x-1/2 rounded bg-accent px-2 py-1 font-display text-[11px] font-bold tracking-wider text-ink sm:left-auto sm:right-5 sm:top-5 sm:translate-x-0">
                  POPULAR
                </span>
              )}

              <h3 className="font-display text-xl font-semibold tracking-wide">
                {plan.name}
              </h3>

              <div className="mt-3 flex items-baseline justify-center gap-1 sm:justify-start">
                <span className="text-sm text-muted">RM</span>
                <span className="font-display text-4xl font-bold tracking-[-0.01em]">
                  {plan.price}
                </span>
                {plan.unit && <span className="text-sm text-muted">{plan.unit}</span>}
              </div>

              <span className={`mt-1 text-xs ${plan.perDay ? "text-muted/80" : "invisible"}`}>
                {plan.perDay ? `≈ RM${plan.perDay} / hari` : " "}
              </span>

              <span className={`mt-1.5 text-xs font-medium ${plan.saving ? "text-accent" : "invisible"}`}>
                {plan.saving || " "}
              </span>

              <ul className="mx-auto mt-6 w-fit flex-1 space-y-2.5 text-left sm:mx-0 sm:w-auto">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    <span className="text-muted">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={waLink(plan.message)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-7 rounded-md px-5 py-3 text-center font-display text-sm font-semibold tracking-wide transition-colors duration-200 ${
                  plan.popular
                    ? "bg-wa text-white hover:bg-wa-deep"
                    : "border border-line text-body hover:border-raised hover:bg-raised"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-center gap-4 rounded-lg border border-line bg-surface px-6 py-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>
            <p className="font-display text-lg font-semibold tracking-wide">
              Personal Training
            </p>
            <p className="mt-1 text-sm text-muted">
              Latihan satu-ke-satu dengan jurulatih. Bermula dari{" "}
              <span className="text-accent">RM80 / sesi</span>.
            </p>
          </div>
          <a
            href={waLink(
              "Hi Alpha Gym, saya nak tahu lebih lanjut tentang Personal Training.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-md border border-line px-6 py-3 font-display text-sm font-semibold tracking-wide transition-colors duration-200 hover:border-raised hover:bg-raised"
          >
            TANYA PAKEJ PT
          </a>
        </div>
      </div>
    </section>
  );
}
