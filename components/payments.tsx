"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Check, CheckCircle2, Copy, ShieldAlert, Smartphone } from "lucide-react"
import { SectionLabel } from "@/components/section-label"

const UPI_ID = "9884341894@kotakbank"
const PAYEE_NAME = "Akash Sharma S"
const WHATSAPP = "919884341894"

// Build a UPI deep link, optionally with an app-specific scheme.
function buildUpiLink(scheme: string, amount: string) {
  const params = new URLSearchParams({
    pa: UPI_ID,
    pn: PAYEE_NAME,
    cu: "INR",
  })
  if (amount && Number(amount) > 0) params.set("am", amount)
  return `${scheme}?${params.toString()}`
}

const methods: { name: string; scheme: string }[] = [
  { name: "Google Pay", scheme: "tez://upi/pay" },
  { name: "PhonePe", scheme: "phonepe://pay" },
  { name: "Paytm", scheme: "paytmmp://pay" },
  { name: "BHIM UPI", scheme: "upi://pay" },
  { name: "Amazon Pay", scheme: "upi://pay" },
  { name: "All UPI Apps", scheme: "upi://pay" },
]

function isMobileDevice() {
  if (typeof navigator === "undefined") return false
  return /android|iphone|ipad|ipod|mobile/i.test(navigator.userAgent)
}

const verifyItems = ["Customer Name", "Mobile Number", "Service Name", "Transaction ID (UTR Number)", "Payment Screenshot"]

const statusSteps = [
  { num: "1", label: "Payment Received" },
  { num: "2", label: "Under Verification" },
  { num: "3", label: "Verified Successfully" },
  { num: "4", label: "Service Activated" },
]

export function Payments() {
  const [amount, setAmount] = useState("")
  const [copied, setCopied] = useState(false)
  const [utr, setUtr] = useState("")
  const [utrName, setUtrName] = useState("")
  const [notice, setNotice] = useState<string | null>(null)

  const openUpiApp = (name: string, scheme: string) => {
    if (!amount || Number(amount) <= 0) {
      setNotice("Please enter a valid amount before choosing a payment app.")
      return
    }
    setNotice(null)

    if (!isMobileDevice()) {
      // On desktop the app cannot open — guide the user to the QR / UPI ID.
      setNotice(`${name} opens only on your phone. On desktop, scan the QR code or pay to ${UPI_ID} from any UPI app.`)
      return
    }

    const link = buildUpiLink(scheme, amount)
    // Navigating the current window triggers the app intent on mobile.
    window.location.href = link
  }

  const copyUpiId = async () => {
    try {
      await navigator.clipboard.writeText(UPI_ID)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  const submitUtr = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Payment Verification Request%0A%0AName: ${utrName}%0AAmount: ₹${amount || "—"}%0AUTR / Transaction ID: ${utr}%0AUPI ID paid to: ${UPI_ID}`
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="payments" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <SectionLabel>Secure Online Payments</SectionLabel>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Pay securely via any UPI app
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Enter the amount, then tap your preferred UPI app to open it instantly with the payment details prefilled.
            On mobile the app opens automatically; on desktop, scan the QR code instead.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Left: amount + methods + UTR */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-heading text-lg font-bold text-foreground">Make a Payment</h3>

              {/* Amount field */}
              <label htmlFor="amount" className="mt-4 block text-sm font-medium text-foreground">
                Enter Amount (₹)
              </label>
              <div className="mt-2 flex items-center rounded-lg border border-input bg-background px-4 focus-within:ring-2 focus-within:ring-ring/40">
                <span className="text-sm font-semibold text-muted-foreground">₹</span>
                <input
                  id="amount"
                  inputMode="decimal"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ""))}
                  placeholder="100"
                  className="w-full bg-transparent px-2 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                />
              </div>

              {/* Payment method buttons */}
              <p className="mt-5 text-sm font-medium text-foreground">Choose a payment app</p>
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {methods.map((m) => (
                  <button
                    key={m.name}
                    type="button"
                    onClick={() => openUpiApp(m.name, m.scheme)}
                    className="rounded-lg border border-border bg-secondary px-3 py-2.5 text-center text-sm font-medium text-foreground transition-colors hover:border-gold hover:bg-gold/10"
                  >
                    {m.name}
                  </button>
                ))}
              </div>

              {notice && (
                <p className="mt-3 rounded-lg border border-gold/40 bg-gold/10 px-3 py-2 text-sm font-medium text-foreground">
                  {notice}
                </p>
              )}

              {/* UPI ID + copy */}
              <div className="mt-5 flex items-center justify-between gap-3 rounded-lg bg-navy p-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-gold">UPI ID</span>
                  <p className="mt-1 font-mono text-sm font-semibold text-white">{UPI_ID}</p>
                  <p className="text-xs text-white/50">Account holder · {PAYEE_NAME}</p>
                </div>
                <button
                  type="button"
                  onClick={copyUpiId}
                  aria-label="Copy UPI ID"
                  className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-gold transition-colors hover:bg-white/20"
                >
                  {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                </button>
              </div>
              {copied && <p className="mt-2 text-xs font-medium text-gold">UPI ID copied to clipboard</p>}
            </div>

            {/* UTR submission form */}
            <form onSubmit={submitUtr} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-heading text-lg font-bold text-foreground">Submit Transaction ID (UTR)</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                After paying, submit your UTR / Transaction ID to start payment verification.
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="utrName" className="block text-sm font-medium text-foreground">
                    Your Name *
                  </label>
                  <input
                    id="utrName"
                    required
                    value={utrName}
                    onChange={(e) => setUtrName(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-ring/40 placeholder:text-muted-foreground focus:ring-2"
                  />
                </div>
                <div>
                  <label htmlFor="utr" className="block text-sm font-medium text-foreground">
                    UTR / Transaction ID *
                  </label>
                  <input
                    id="utr"
                    required
                    value={utr}
                    onChange={(e) => setUtr(e.target.value)}
                    placeholder="e.g. 4567XXXXXXXX"
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-ring/40 placeholder:text-muted-foreground focus:ring-2"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-5 w-full rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-navy-deep transition-opacity hover:opacity-90"
              >
                Submit for Verification
              </button>
            </form>
          </div>

          {/* Right: QR + verification + status */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-white/10 bg-navy-deep p-6 text-white">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Scan to pay instantly</span>
              <p className="mt-1 font-heading text-lg font-bold">{PAYEE_NAME}</p>
              <p className="font-mono text-sm text-white/60">{UPI_ID}</p>
              <div className="mt-5 overflow-hidden rounded-xl bg-white p-4">
                <Image
                  src="/upi-qr.png"
                  alt="Scan UPI QR to pay Genius Service Centre"
                  width={280}
                  height={280}
                  className="mx-auto h-auto w-full max-w-[260px]"
                />
              </div>
              <p className="mt-4 flex items-center justify-center gap-2 text-sm text-white/60">
                <Smartphone className="size-4 text-gold" />
                Any UPI app accepted
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-heading text-lg font-bold text-foreground">Payment Verification</h3>
              <p className="mt-2 text-sm text-muted-foreground">After completing payment, please provide:</p>
              <ul className="mt-4 space-y-2.5">
                {verifyItems.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="size-4 text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-heading text-lg font-bold text-foreground">Payment Status</h3>
              <ol className="mt-4 space-y-3">
                {statusSteps.map((step) => (
                  <li key={step.num} className="flex items-center gap-3">
                    <span className="flex size-7 items-center justify-center rounded-full bg-navy text-xs font-bold text-gold">
                      {step.num}
                    </span>
                    <span className="text-sm font-medium text-foreground">{step.label}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex gap-3 rounded-2xl border border-gold/30 bg-gold/10 p-5">
              <ShieldAlert className="size-5 shrink-0 text-gold" />
              <div>
                <h4 className="text-sm font-semibold text-foreground">Security Notice</h4>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  All transactions are processed securely through UPI-enabled payment networks. Please retain your
                  transaction reference number for payment verification and tracking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
