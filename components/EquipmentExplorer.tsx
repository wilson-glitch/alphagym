"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { waLink } from "@/lib/site";
import SectionHead from "./SectionHead";

type MuscleKey =
  | "kaki"
  | "dada"
  | "belakang"
  | "bahu"
  | "lengan"
  | "kardio";

type Muscle = {
  label: string;
  sub: string;
  parts: string[];
  equipment: string[];
  note: string;
};

const muscles: Record<MuscleKey, Muscle> = {
  kaki: {
    label: "Kaki",
    sub: "Legs",
    parts: ["thighL", "thighR", "calfL", "calfR"],
    equipment: [
      "Squat Rack (2 unit)",
      "Leg Press",
      "Hack Squat Machine",
      "Leg Extension",
      "Leg Curl (seated & lying)",
      "Calf Raise (seated & standing)",
      "Smith Machine",
    ],
    note: "Full leg day tanpa tunggu giliran",
  },
  dada: {
    label: "Dada",
    sub: "Chest",
    parts: ["pecL", "pecR"],
    equipment: [
      "Flat Bench Press",
      "Incline Bench Press",
      "Decline Bench Press",
      "Pec Deck",
      "Cable Crossover",
      "Dumbbell rack 2.5kg – 50kg",
    ],
    note: "Push day lengkap",
  },
  belakang: {
    label: "Belakang",
    sub: "Back",
    parts: ["latL", "latR"],
    equipment: [
      "Lat Pulldown",
      "Seated Cable Row",
      "T-Bar Row",
      "Pull-up Bar",
      "Assisted Pull-up Machine",
      "Deadlift Platform",
    ],
    note: "Pull day lengkap",
  },
  bahu: {
    label: "Bahu",
    sub: "Shoulders",
    parts: ["deltL", "deltR"],
    equipment: [
      "Shoulder Press Machine",
      "Lateral Raise Cable",
      "Rear Delt Fly",
      "Overhead Press Rack",
    ],
    note: "Semua tiga bahagian deltoid",
  },
  lengan: {
    label: "Lengan",
    sub: "Arms",
    parts: ["bicepL", "bicepR", "forearmL", "forearmR"],
    equipment: [
      "Preacher Curl Bench",
      "Tricep Pushdown Station",
      "Dip Bar",
      "EZ Curl Bar rack",
      "Cable Station (adjustable)",
    ],
    note: "Bicep, tricep, forearm",
  },
  kardio: {
    label: "Kardio",
    sub: "Cardio",
    parts: [
      "pecL",
      "pecR",
      "absUp",
      "absMid",
      "absLow",
      "thighL",
      "thighR",
      "calfL",
      "calfR",
      "deltL",
      "deltR",
    ],
    equipment: [
      "Treadmill (6 unit)",
      "Stationary Bike",
      "Stair Master",
      "Rowing Machine",
      "Elliptical",
      "Assault Bike",
    ],
    note: "Seluruh badan",
  },
};

const order: MuscleKey[] = [
  "kaki",
  "dada",
  "belakang",
  "bahu",
  "lengan",
  "kardio",
];

const BASE = "#2d2d2d";
const IDLE = "#3b3b3b";
const LIVE = "#facc15";

function BodyDiagram({ active }: { active: string[] }) {
  const fill = (id: string) => (active.includes(id) ? LIVE : IDLE);

  return (
    <svg
      viewBox="0 0 200 330"
      className="h-full max-h-[400px] w-full"
      role="img"
      aria-label="Rajah badan menunjukkan otot yang dilatih"
    >
      <g fill={BASE}>
        <circle cx="100" cy="26" r="17" />
        <rect x="91" y="38" width="18" height="18" rx="5" />
        <path d="M70 56 Q100 50 130 56 L134 96 Q134 130 126 152 L74 152 Q66 130 66 96 Z" />
        <rect x="72" y="146" width="56" height="36" rx="10" />
        <circle cx="50" cy="178" r="7" />
        <circle cx="150" cy="178" r="7" />
        <rect x="72" y="304" width="24" height="10" rx="4" />
        <rect x="104" y="304" width="24" height="10" rx="4" />
      </g>

      <g className="[&>*]:transition-[fill] [&>*]:duration-300">
        <ellipse cx="68" cy="68" rx="16" ry="14" fill={fill("deltL")} />
        <ellipse cx="132" cy="68" rx="16" ry="14" fill={fill("deltR")} />

        <ellipse cx="58" cy="104" rx="11" ry="26" fill={fill("bicepL")} />
        <ellipse cx="142" cy="104" rx="11" ry="26" fill={fill("bicepR")} />

        <ellipse cx="52" cy="150" rx="9" ry="24" fill={fill("forearmL")} />
        <ellipse cx="148" cy="150" rx="9" ry="24" fill={fill("forearmR")} />

        <path d="M70 90 L84 99 L80 140 L70 128 Z" fill={fill("latL")} />
        <path d="M130 90 L116 99 L120 140 L130 128 Z" fill={fill("latR")} />

        <rect x="78" y="64" width="20" height="26" rx="8" fill={fill("pecL")} />
        <rect x="102" y="64" width="20" height="26" rx="8" fill={fill("pecR")} />

        <rect x="88" y="97" width="24" height="15" rx="4" fill={fill("absUp")} />
        <rect x="88" y="115" width="24" height="15" rx="4" fill={fill("absMid")} />
        <rect x="88" y="133" width="24" height="15" rx="4" fill={fill("absLow")} />

        <rect x="74" y="176" width="22" height="78" rx="11" fill={fill("thighL")} />
        <rect x="104" y="176" width="22" height="78" rx="11" fill={fill("thighR")} />

        <rect x="77" y="248" width="17" height="62" rx="8" fill={fill("calfL")} />
        <rect x="106" y="248" width="17" height="62" rx="8" fill={fill("calfR")} />
      </g>
    </svg>
  );
}

export default function EquipmentExplorer() {
  const [selected, setSelected] = useState<MuscleKey>("kaki");
  const current = muscles[selected];

  return (
    <section
      id="peralatan"
      className="relative border-t border-line bg-ink py-14 sm:py-20"
    >
      <div
        className="gridlines pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          title={
            <>
              Latih Setiap <span className="text-accent">Bahagian Badan</span>
            </>
          }
          sub="Pilih otot untuk lihat peralatan yang tersedia — pastikan apa yang anda perlukan ada sebelum datang."
        />

        <div className="mt-10 overflow-hidden rounded-xl border border-line shadow-2xl shadow-black/40">
          <div className="grid grid-cols-2 lg:grid-cols-[260px_1fr_280px]">
            <div className="border-b border-r border-line lg:border-b-0">
              <div className="grid grid-cols-1">
                {order.map((key) => {
                  const m = muscles[key];
                  const isActive = key === selected;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSelected(key)}
                      aria-pressed={isActive}
                      className={`relative cursor-pointer border-b border-line px-4 py-4 pl-5 text-left transition-colors duration-200 lg:px-6 lg:py-5 lg:pl-7 ${
                        isActive
                          ? "bg-raised"
                          : "bg-surface hover:bg-raised"
                      }`}
                    >
                      <span
                        className={`absolute left-0 top-0 h-full w-[3px] transition-colors duration-200 ${
                          isActive ? "bg-accent" : "bg-transparent"
                        }`}
                        aria-hidden="true"
                      />
                      <span
                        className={`block font-display text-base font-semibold tracking-wide transition-colors duration-200 lg:text-lg ${
                          isActive ? "text-accent" : "text-body"
                        }`}
                      >
                        {m.label}
                      </span>
                      <span className="mt-0.5 block text-xs text-muted">
                        {m.equipment.length} mesin
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="relative flex items-center justify-center overflow-hidden border-b border-line bg-surface p-4 sm:p-8 lg:border-b-0 lg:border-r">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(22rem_22rem_at_50%_50%,color-mix(in_oklab,var(--color-accent)_9%,transparent),transparent_70%)]"
                aria-hidden="true"
              />
              <div className="relative">
                <BodyDiagram active={current.parts} />
              </div>
            </div>

            <div className="col-span-2 bg-surface p-6 text-center lg:col-span-1 lg:p-7 lg:text-left">
              <p className="font-display text-sm font-semibold tracking-[0.15em] text-accent uppercase">
                {current.label}
              </p>
              <p className="mt-1 text-xs text-muted">{current.note}</p>

              <ul className="mx-auto mt-5 grid w-fit grid-cols-2 gap-x-4 gap-y-2.5 text-left lg:mx-0 lg:w-auto lg:grid-cols-1">
                {current.equipment.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 border-t border-line bg-raised px-6 py-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p className="text-sm text-muted">
              Peralatan lebih dari ini? Datang lihat sendiri —{" "}
              <span className="text-body">walk-in RM12</span>, guna semua mesin.
            </p>
            <a
              href={waLink(
                `Hi Alpha Gym, saya nak tanya tentang peralatan untuk ${current.label.toLowerCase()}.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-md bg-wa px-6 py-3 font-display text-sm font-semibold tracking-wide text-white transition-colors duration-200 hover:bg-wa-deep"
            >
              TANYA DI WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
