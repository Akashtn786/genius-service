import { SectionLabel } from "@/components/section-label"

const steps = [
  { num: "01", title: "Submit Application", desc: "Choose your service and submit your details online or in-person." },
  { num: "02", title: "Upload Documents", desc: "Securely upload required documents via WhatsApp or email." },
  { num: "03", title: "Track Status", desc: "Get real-time updates on your application progress." },
  { num: "04", title: "Receive Notifications", desc: "SMS, email and WhatsApp alerts at every milestone." },
]

export function ProcessTracking() {
  return (
    <section className="bg-navy-deep py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <SectionLabel>Application Tracking</SectionLabel>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold text-white sm:text-4xl">
            From request to result — always in the loop
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-gold/40"
            >
              <span className="font-heading text-4xl font-bold text-gold/40">{step.num}</span>
              <h3 className="mt-4 font-heading text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
