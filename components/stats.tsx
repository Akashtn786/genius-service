const stats = [
  { value: "10,000+", label: "Applications Processed" },
  { value: "30+", label: "Services Offered" },
  { value: "5★", label: "Customer Rating" },
  { value: "100%", label: "Secure & Confidential" },
]

export function Stats() {
  return (
    <section className="border-y border-white/10 bg-navy">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-4 sm:px-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center justify-center gap-1 py-8 text-center">
            <span className="font-heading text-3xl font-bold text-gold sm:text-4xl">{stat.value}</span>
            <span className="text-xs font-medium uppercase tracking-wide text-white/60 sm:text-sm">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
