import {
  Dumbbell,
  Snowflake,
  ShieldCheck,
  Fingerprint,
  Moon,
  ShowerHead,
} from "lucide-react";

const features = [
  { Icon: Dumbbell, label: "Peralatan Terkini" },
  { Icon: Snowflake, label: "Berhawa Dingin" },
  { Icon: ShieldCheck, label: "Ruang Wanita" },
  { Icon: Fingerprint, label: "Face ID Locker" },
  { Icon: Moon, label: "Surau" },
  { Icon: ShowerHead, label: "Bilik Mandi" },
];

export default function WhyAlpha() {
  return (
    <section
      id="kelebihan"
      aria-labelledby="kelebihan-heading"
      className="border-t border-line bg-ink-2 py-12 sm:py-16"
    >
      <h2 id="kelebihan-heading" className="sr-only">
        Kelebihan Alpha Gym
      </h2>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-2 gap-px bg-line sm:grid-cols-3 lg:grid-cols-6">
          {features.map(({ Icon, label }) => (
            <li
              key={label}
              className="flex flex-col items-center gap-3 bg-ink-2 px-3 py-7 text-center transition-colors duration-200 hover:bg-surface"
            >
              <Icon
                className="h-6 w-6 text-accent"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <span className="font-display text-xs font-semibold tracking-[0.1em] text-body uppercase">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
