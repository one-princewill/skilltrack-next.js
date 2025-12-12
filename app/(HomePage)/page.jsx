import 'boxicons/css/boxicons.min.css';
import HeroSection from './(Components)/HeroSection/HeroSection.jsx'
import HowItWorks from './(Components)/How it works/Howitworks.jsx';
import Benefits from './(Components)/Benefits/Benefits.jsx';
import Features from './(Components)/Features/Features.jsx';
import Pricing from './(Components)/Pricing/Pricing.jsx';
import Faq from './(Components)/FAQ/Faq.jsx';
import Cta from './(Components)/CTA/Cta.jsx';


export default function Home() {
  return (
    <main>
      <HeroSection />
      <HowItWorks />
      <Benefits />
      <Features />
      <Pricing />
      <Faq />
      <Cta />
    </main>
  );
}