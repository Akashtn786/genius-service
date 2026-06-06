import Image from "next/image"
import { BadgeCheck, MapPin, Star, Zap } from "lucide-react"
import { SectionLabel } from "@/components/section-label"

const badges = [
  { icon: BadgeCheck, label: "Authorised CSC" },
  { icon: BadgeCheck, label: "Govt. Approved" },
  { icon: Star, label: "5★ Rated" },
  { icon: Zap, label: "Same-day Service" },
]

export function About() {
  return (
    <section id="about" className="bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <SectionLabel>About Us</SectionLabel>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            Your trusted partner for digital citizen services
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Genius Service Centre is a professional Digital Service and CSC Support Centre dedicated to providing
            government, financial, educational, travel and citizen-centric online services efficiently and securely.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Founded and led by <span className="font-semibold text-foreground">Akash Sharma</span>, we operate from
            Shenoy Nagar, Chennai — bringing fast, reliable and affordable access to over 30 essential services under
            one roof.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span
                key={badge.label}
                className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
              >
                <badge.icon className="size-4 text-gold" />
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
            <Image
              src="/about-office.png"
              alt="Genius Service Centre office in Chennai assisting a customer"
              width={720}
              height={520}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 right-6 rounded-xl border border-white/10 bg-navy-deep p-5 text-white shadow-xl sm:left-auto sm:right-6 sm:w-72">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Mission</span>
            <p className="mt-2 text-sm leading-relaxed text-white/80">
              Provide citizens with fast, reliable, affordable and professional online services through a single
              digital platform.
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs text-white/60">
              <MapPin className="size-3.5 text-gold" />
              Shenoy Nagar, Chennai – 600030
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
