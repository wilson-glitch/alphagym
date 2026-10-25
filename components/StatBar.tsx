const stats = [
  { value: "5.0", unit: "★", caption: "Rating Google" },
  { value: "10", unit: "+", caption: "Review" },
  { value: "0", unit: "RM", unitLead: true, caption: "Yuran Pendaftaran" },
];

function Corner({ className }: { className: string }) {
  return (
    <span
      className={`pointer-events-none absolute h-3 w-3 border-accent/50 sm:h-4 sm:w-4 ${className}`}
      aria-hidden="true"
    />
  );
}

export default function StatBar() {
  return (
    <div className="relative rounded-xl border border-line bg-ink/80 backdrop-blur-sm">
      <Corner className="left-2 top-2 border-l border-t" />
      <Corner className="right-2 top-2 border-r border-t" />
      <Corner className="bottom-2 left-2 border-b border-l" />
      <Corner className="bottom-2 right-2 border-b border-r" />

      <dl className="grid grid-cols-3">
        {stats.map((s, i) => (
          <div
            key={s.caption}
            className={`group px-2 py-4 text-center transition-colors duration-200 sm:px-4 sm:py-6 ${
              i > 0 ? "border-l border-line" : ""
            }`}
          >
            <dd className="flex items-baseline justify-center gap-0.5 sm:gap-1">
              {s.unitLead && (
                <span className="font-display text-xs font-semibold text-accent sm:text-sm">
                  {s.unit}
                </span>
              )}
              <span className="font-display text-2xl font-extrabold tracking-tight text-body transition-colors duration-200 group-hover:text-accent sm:text-3xl md:text-4xl">
                {s.value}
              </span>
              {!s.unitLead && (
                <span className="font-display text-base font-bold text-accent sm:text-xl">
                  {s.unit}
                </span>
              )}
            </dd>

            <dt className="mt-1.5 font-display text-[9px] font-semibold leading-tight tracking-[0.12em] text-muted uppercase transition-colors duration-200 group-hover:text-body sm:mt-2 sm:text-[11px] sm:tracking-[0.18em]">
              {s.caption}
            </dt>
          </div>
        ))}
      </dl>
    </div>
  );
}
