import type { ReactNode } from "react";

export default function SectionHead({
  title,
  sub,
  align = "left",
}: {
  title: ReactNode;
  sub?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";

  return (
    <div className={centered ? "text-center" : "text-center sm:text-left"}>
      <h2 className="font-display text-4xl font-bold tracking-[-0.01em] sm:text-5xl">
        {title}
      </h2>

      {sub && (
        <p
          className={`mt-4 max-w-xl text-muted ${
            centered ? "mx-auto" : "mx-auto sm:mx-0"
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
