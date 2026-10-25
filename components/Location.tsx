import { MapPin, Clock, Navigation } from "lucide-react";
import { site, waLink } from "@/lib/site";
import SectionHead from "./SectionHead";

export default function Location() {
  return (
    <section
      id="lokasi"
      className="relative border-t border-line bg-ink py-20 sm:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          title={
            <>
              Jumpa Kami di <span className="text-accent">Alpha Gym</span>
            </>
          }
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-2">
          <div className="space-y-8 bg-surface p-7 lg:p-9">
            <div className="flex gap-4">
              <MapPin
                className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <div>
                <h3 className="font-display text-lg font-semibold tracking-wide">
                  Alamat
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.state}
                </p>
                <p className="mt-2 text-sm text-muted/80">
                  {site.address.landmark}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock
                className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <div>
                <h3 className="font-display text-lg font-semibold tracking-wide">
                  Waktu Operasi
                </h3>
                <p className="mt-1.5 text-sm text-muted">
                  {site.hours.days}
                </p>
                <p className="font-display text-2xl font-semibold tracking-wide text-body">
                  {site.hours.time}
                </p>
                <p className="mt-1 text-sm text-muted/80">{site.hours.note}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={site.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 font-display text-sm font-semibold tracking-wide transition-colors duration-200 hover:border-raised hover:bg-raised"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                DAPATKAN ARAH
              </a>
              <a
                href={waLink("Hi Alpha Gym, saya nak tanya tentang lokasi.")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-wa px-5 py-3 font-display text-sm font-semibold tracking-wide text-white transition-colors duration-200 hover:bg-wa-deep"
              >
                WHATSAPP KAMI
              </a>
            </div>
          </div>

          <div className="min-h-[340px] bg-surface">
            <iframe
              title="Peta lokasi Alpha Gym Kota Bharu"
              src="https://maps.google.com/maps?q=Wisma%20TCH%20Kota%20Bharu&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="h-full w-full grayscale-[0.4] contrast-[1.1]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
