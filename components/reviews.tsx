import { Star } from "lucide-react"
import { SectionLabel } from "@/components/section-label"

const reviews = [
  {
    quote:
      "Got my PAN card in record time. Akash sir was super helpful and professional throughout the process.",
    name: "Ramesh K.",
    location: "Anna Nagar",
    initial: "R",
  },
  {
    quote:
      "Excellent service for my Passport application. Clear guidance and reasonable charges. Highly recommend!",
    name: "Priya S.",
    location: "Shenoy Nagar",
    initial: "P",
  },
  {
    quote:
      "Did my GST registration here. Smooth, fast and trustworthy. The go-to digital centre in the area.",
    name: "Mohan R.",
    location: "Kilpauk",
    initial: "M",
  },
]

export function Reviews() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <SectionLabel>Customer Reviews</SectionLabel>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Loved by citizens of Chennai
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <figure key={review.name} className="flex flex-col rounded-2xl border border-border bg-card p-6">
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-navy font-heading font-bold text-gold">
                  {review.initial}
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-semibold text-foreground">{review.name}</span>
                  <span className="text-xs text-muted-foreground">{review.location}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
