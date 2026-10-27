import { ArrowRight, Tag } from "lucide-react";
import { site, waLink } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80')",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-ink/75 mix-blend-multiply"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-accent/[0.07] via-transparent to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-ink-2 via-ink/70 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-ink via-ink/55 to-transparent lg:w-3/4"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-3xl text-center sm:text-left">
          <h1 className="font-display text-[clamp(2rem,11vw,3.75rem)] font-extrabold leading-[1.06] tracking-[-0.02em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Gym Terbaru di
            <br />
            <span className="text-accent">{site.city}</span>
          </h1>

          <p className="mt-5 font-display text-base font-semibold leading-[1.65] text-body/90 sm:mt-6 sm:text-xl md:text-2xl">
            Ada aircond.
            <br />
            Peralatan baru.
            <br />
            Buka setiap hari 7AM–12AM.
          </p>

          <div className="mx-auto mt-8 flex max-w-sm flex-col gap-3 sm:mx-0 sm:mt-10">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-lg bg-wa px-6 py-5 text-left shadow-lg shadow-wa/25 transition-colors duration-200 hover:bg-wa-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7 shrink-0 text-white"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.99 2.896 9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z" />
              </svg>

              <span className="min-w-0 flex-1 text-center font-display text-lg font-bold tracking-wide text-white sm:text-left">
                WHATSAPP KAMI
              </span>

              <ArrowRight
                className="h-5 w-5 shrink-0 text-white/80 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>

            <a
              href="#harga"
              className="group flex items-center gap-4 rounded-lg border border-accent/50 bg-ink/60 px-6 py-4 text-left shadow-lg shadow-accent/25 backdrop-blur-sm transition-all duration-200 hover:border-accent hover:bg-ink/80 hover:shadow-accent/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Tag className="h-5 w-5 shrink-0 text-accent" strokeWidth={2} aria-hidden="true" />
              <span className="min-w-0 flex-1 text-center font-display text-base font-bold tracking-wide text-body sm:text-left">
                LIHAT HARGA &amp; PAKEJ
              </span>
              <ArrowRight
                className="h-5 w-5 shrink-0 text-accent/80 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
