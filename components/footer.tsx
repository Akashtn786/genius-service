import { Sparkles } from "lucide-react"

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Why Us", href: "#track" },
  { label: "Contact", href: "#contact" },
]

const legalLinks = ["Privacy Policy", "Terms & Conditions", "Refund Policy"]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-lg bg-gold text-navy-deep">
              <Sparkles className="size-5" />
            </span>
            <span className="font-heading text-lg font-bold">Genius Service Centre</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
            Your trusted CSC and Digital Service Centre in Shenoy Nagar, Chennai. Government, financial, travel and
            business services — handled professionally.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-gold">Quick Links</h4>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm text-white/60 transition-colors hover:text-gold">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-gold">Legal</h4>
          <ul className="mt-4 space-y-2.5">
            {legalLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-white/60 transition-colors hover:text-gold">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-center text-xs text-white/50 sm:flex-row sm:px-6 sm:text-left">
          <p>© 2026 Genius Service Centre. All Rights Reserved.</p>
          <p>Built with care in Chennai · Owner: Akash Sharma</p>
        </div>
      </div>
    </footer>
  )
}
