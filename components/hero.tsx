import { ArrowRight, MessageCircle, Phone, ShieldCheck } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-deep">
      {/* subtle radial accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 size-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -right-24 top-32 size-96 rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
        <div className="flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold w-fit">
          <ShieldCheck className="size-3.5" />
          Authorised CSC &amp; Digital Service Partner
        </div>

        <h1 className="mt-6 max-w-3xl text-balance font-heading text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
          One Stop Solution for{" "}
          <span className="text-gold">All Digital &amp; Government</span> Services
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
          PAN Card, Aadhaar Services, Voter ID, Passport Assistance, IRCTC Booking, Insurance, Scholarships, CSC
          Services and many more — handled with speed and care.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-navy-deep transition-opacity hover:opacity-90"
          >
            Apply Now
            <ArrowRight className="size-4" />
          </a>
          <a
            href={`https://wa.me/919884341894?text=${encodeURIComponent(
              "Hi Genius Service Centre, I need assistance with your services.",
            )}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <MessageCircle className="size-4" />
            WhatsApp Us
          </a>
          <a
            href="tel:+919884341894"
            className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Phone className="size-4" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  )
}
