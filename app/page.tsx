import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ProcessTracking } from "@/components/process-tracking"
import { Reviews } from "@/components/reviews"
import { Payments } from "@/components/payments"
import { TrackRequest } from "@/components/track-request"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Services />
      <WhyChooseUs />
      <ProcessTracking />
      <Reviews />
      <Payments />
      <TrackRequest />
      <Contact />
      <Footer />
    </main>
  )
}
