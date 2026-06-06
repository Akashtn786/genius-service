"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Track", href: "#track" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-deep/95 backdrop-blur supports-[backdrop-filter]:bg-navy-deep/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#" className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center overflow-hidden rounded-full ring-1 ring-gold/40">
            <Image src="/logo.jpeg" alt="Genius Service Centre logo" width={40} height={40} className="size-full object-cover" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-heading text-base font-bold text-white sm:text-lg">Genius Service Centre</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">Chennai</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+919884341894"
            className="hidden items-center gap-2 rounded-lg bg-gold px-4 py-2 text-sm font-semibold text-navy-deep transition-opacity hover:opacity-90 sm:flex"
          >
            <Phone className="size-4" />
            Call Now
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-lg text-white md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div className={cn("border-t border-white/10 bg-navy-deep md:hidden", open ? "block" : "hidden")}>
        <nav className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/5 py-3 text-sm font-medium text-white/80 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+919884341894"
            className="mt-2 mb-3 flex items-center justify-center gap-2 rounded-lg bg-gold px-4 py-2.5 text-sm font-semibold text-navy-deep"
          >
            <Phone className="size-4" />
            Call Now
          </a>
        </nav>
      </div>
    </header>
  )
}
