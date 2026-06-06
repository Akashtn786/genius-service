import { Briefcase, CreditCard, GraduationCap, Landmark, Plane, UserCheck } from "lucide-react"
import { SectionLabel } from "@/components/section-label"

const categories = [
  {
    icon: UserCheck,
    title: "Identity Services",
    items: ["PAN Card", "Aadhaar Update", "Voter ID", "Passport Assistance"],
  },
  {
    icon: Plane,
    title: "Travel Services",
    items: ["IRCTC Ticket Booking", "Flight Booking", "Bus Ticket Booking"],
  },
  {
    icon: Landmark,
    title: "Government Services",
    items: ["Income Certificate", "Community Certificate", "Patta & Chitta", "e-Sevai Services"],
  },
  {
    icon: CreditCard,
    title: "Financial Services",
    items: ["DigiPay", "Insurance", "Banking", "AEPS & Money Transfer"],
  },
  {
    icon: Briefcase,
    title: "Business Services",
    items: ["GST Registration", "FSSAI", "MSME", "Shop Act Registration"],
  },
  {
    icon: GraduationCap,
    title: "Education Services",
    items: ["Scholarships", "Exam Registration", "Job Assistance", "Skill Development"],
  },
]

export function Services() {
  return (
    <section id="services" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <SectionLabel>Our Services</SectionLabel>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Everything you need, under one roof
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            Six categories. Thirty-plus services. One trusted team.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-navy text-gold transition-colors group-hover:bg-gold group-hover:text-navy-deep">
                <cat.icon className="size-6" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-bold text-foreground">{cat.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="size-1.5 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
