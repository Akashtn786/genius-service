"use client"

import type React from "react"

import { useState } from "react"
import { Clock, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react"
import { SectionLabel } from "@/components/section-label"

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `New Service Request%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AService: ${form.service}%0AMessage: ${form.message}`
    window.open(`https://wa.me/919884341894?text=${text}`, "_blank")
  }

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }))

  const inputClass =
    "mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-ring/40 placeholder:text-muted-foreground focus:ring-2"

  return (
    <section id="contact" className="bg-navy-deep py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <SectionLabel>Contact Us</SectionLabel>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s get your work done
          </h2>

          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-white/5 text-gold">
                <MapPin className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Visit us</p>
                <p className="text-sm text-white/60">Shenoy Nagar, Chennai – 600030</p>
              </div>
            </div>
            <a href="tel:+919884341894" className="flex items-start gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-white/5 text-gold">
                <Phone className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Call us</p>
                <p className="text-sm text-white/60">+91 98843 41894</p>
              </div>
            </a>
            <a href="mailto:geniussrevicestn786@gmail.com" className="flex items-start gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-white/5 text-gold">
                <Mail className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Email us</p>
                <p className="text-sm text-white/60">geniussrevicestn786@gmail.com</p>
              </div>
            </a>
            <div className="flex items-start gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-white/5 text-gold">
                <Clock className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Business Hours</p>
                <p className="text-sm text-white/60">Mon – Sat · 9:00 AM – 8:00 PM</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/919884341894"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep"
            >
              <MessageCircle className="size-4" />
              Chat on WhatsApp
            </a>
            <a
              href="https://maps.google.com/?q=Shenoy+Nagar+Chennai"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white"
            >
              <Navigation className="size-4" />
              Get Directions
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white">
                Your Name *
              </label>
              <input id="name" required value={form.name} onChange={update("name")} className={inputClass} />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white">
                Phone Number *
              </label>
              <input id="phone" required value={form.phone} onChange={update("phone")} className={inputClass} />
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input id="email" type="email" value={form.email} onChange={update("email")} className={inputClass} />
          </div>
          <div className="mt-5">
            <label htmlFor="service" className="block text-sm font-medium text-white">
              Service Needed *
            </label>
            <input id="service" required value={form.service} onChange={update("service")} className={inputClass} />
          </div>
          <div className="mt-5">
            <label htmlFor="message" className="block text-sm font-medium text-white">
              Message
            </label>
            <textarea id="message" rows={4} value={form.message} onChange={update("message")} className={inputClass} />
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-navy-deep transition-opacity hover:opacity-90"
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  )
}
