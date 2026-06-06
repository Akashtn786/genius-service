import Image from "next/image"
import { CheckCircle2, Copy, ShieldAlert, Smartphone } from "lucide-react"
import { SectionLabel } from "@/components/section-label"

const methods = ["Google Pay", "PhonePe", "Paytm", "BHIM UPI", "Amazon Pay", "All UPI Apps"]

const verifyItems = ["Customer Name", "Mobile Number", "Service Name", "Transaction ID (UTR Number)", "Payment Screenshot"]

const statusSteps = [
  { num: "1", label: "Payment Received" },
  { num: "2", label: "Under Verification" },
  { num: "3", label: "Verified Successfully" },
  { num: "4", label: "Service Activated" },
]

export function Payments() {
  return (
    <section className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <SectionLabel>Secure Online Payments</SectionLabel>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Pay securely via any UPI app
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Quick, contactless and secure payments accepted via all major UPI-enabled applications. Scan the QR or pay
            directly using the UPI ID below.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Left: methods + verification */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-heading text-lg font-bold text-foreground">Accepted Payment Methods</h3>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {methods.map((m) => (
                  <span
                    key={m}
                    className="rounded-lg border border-border bg-secondary px-3 py-2.5 text-center text-sm font-medium text-foreground"
                  >
                    {m}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between gap-3 rounded-lg bg-navy p-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-gold">UPI ID</span>
                  <p className="mt-1 font-mono text-sm font-semibold text-white">9884341894@kotakbank</p>
                  <p className="text-xs text-white/50">Account holder · Akash Sharma S</p>
                </div>
                <span className="flex size-9 items-center justify-center rounded-lg bg-white/10 text-gold">
                  <Copy className="size-4" />
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-heading text-lg font-bold text-foreground">Payment Verification</h3>
              <p className="mt-2 text-sm text-muted-foreground">After completing payment, please submit:</p>
              <ul className="mt-4 space-y-2.5">
                {verifyItems.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="size-4 text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/919884341894"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep"
                >
                  Verify Payment
                </a>
                <a
                  href="#track"
                  className="rounded-lg border border-border bg-secondary px-5 py-2.5 text-sm font-semibold text-foreground"
                >
                  Track Payment Status
                </a>
              </div>
            </div>
          </div>

          {/* Right: QR + status */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-white/10 bg-navy-deep p-6 text-white">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Scan to pay instantly</span>
              <p className="mt-1 font-heading text-lg font-bold">Akash Sharma S</p>
              <p className="font-mono text-sm text-white/60">9884341894@kotakbank</p>
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
