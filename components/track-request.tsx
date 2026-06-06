"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, FileSearch, Receipt } from "lucide-react"
import { SectionLabel } from "@/components/section-label"

export function TrackRequest() {
  const [appId, setAppId] = useState("")
  const [utr, setUtr] = useState("")

  const openWhatsApp = (message: string) => {
    window.open(`https://wa.me/919884341894?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section id="track" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <SectionLabel>Track Your Request</SectionLabel>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Stay updated, in real time
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
            Check your application progress or verify a payment instantly via WhatsApp.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          <form
            onSubmit={(e: React.FormEvent) => {
              e.preventDefault()
              openWhatsApp(`Hi, I'd like to track my application: ${appId}`)
            }}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <span className="flex size-11 items-center justify-center rounded-lg bg-navy text-gold">
              <FileSearch className="size-5" />
            </span>
            <h3 className="mt-4 font-heading text-lg font-bold text-foreground">Track Application</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Application status · Documents · Progress · Completion
            </p>
            <label htmlFor="appId" className="mt-5 block text-sm font-medium text-foreground">
              Application ID or Mobile Number
            </label>
            <input
              id="appId"
              required
              value={appId}
              onChange={(e) => setAppId(e.target.value)}
              placeholder="e.g. GSC12345 or 9884XXXXXX"
              className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-ring/40 placeholder:text-muted-foreground focus:ring-2"
            />
            <button
              type="submit"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-navy-deep transition-opacity hover:opacity-90"
            >
              Track Application
              <ArrowRight className="size-4" />
            </button>
          </form>

          <form
            onSubmit={(e: React.FormEvent) => {
              e.preventDefault()
              openWhatsApp(`Hi, I'd like to track my payment. UTR/Transaction ID: ${utr}`)
            }}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <span className="flex size-11 items-center justify-center rounded-lg bg-navy text-gold">
              <Receipt className="size-5" />
            </span>
            <h3 className="mt-4 font-heading text-lg font-bold text-foreground">Track Payment</h3>
            <p className="mt-1 text-sm text-muted-foreground">Payment received · Verified · Service activated</p>
            <label htmlFor="utr" className="mt-5 block text-sm font-medium text-foreground">
              UTR / Transaction ID
            </label>
            <input
              id="utr"
              required
              value={utr}
              onChange={(e) => setUtr(e.target.value)}
              placeholder="e.g. 4567XXXXXXXX"
              className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-ring/40 placeholder:text-muted-foreground focus:ring-2"
            />
            <button
              type="submit"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-navy-deep transition-opacity hover:opacity-90"
            >
              Track Payment
              <ArrowRight className="size-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
