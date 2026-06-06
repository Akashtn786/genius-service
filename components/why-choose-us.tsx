import { Clock, HeadphonesIcon, Lock, ShieldCheck, Tag, ThumbsUp } from "lucide-react"
import { SectionLabel } from "@/components/section-label"

const reasons = [
  { icon: ShieldCheck, title: "Trusted Service", desc: "Authorised CSC partner serving Chennai with integrity." },
  { icon: Clock, title: "Fast Processing", desc: "Quick turnaround on every application, every time." },
  { icon: HeadphonesIcon, title: "Professional Support", desc: "Friendly guidance from start to finish." },
  { icon: Tag, title: "Affordable Pricing", desc: "Transparent fees with no hidden charges." },
  { icon: ThumbsUp, title: "Customer Satisfaction", desc: "Thousands of happy citizens served." },
  { icon: Lock, title: "Secure Documentation", desc: "Your documents handled with full confidentiality." },
]

export function WhyChooseUs() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <SectionLabel>Why Choose Us</SectionLabel>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Built on trust &amp; precision
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="rounded-2xl border border-border bg-card p-6">
              <span className="flex size-11 items-center justify-center rounded-lg bg-gold/15 text-gold">
                <reason.icon className="size-5" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold text-foreground">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
