import BentoGrid from "@/components/BentoGrid";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NetworkBanner from "@/components/NetworkBanner";
import Pricing from "@/components/Pricing";
import Roadmap from "@/components/Roadmap";
import SocialProof from "@/components/SocialProof";
import Testimonials from "@/components/Testimonials";

export default function HomePage(): React.ReactElement {
  return (
    <>
      <NetworkBanner />
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <BentoGrid />
        <Roadmap />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
