import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustIndicators } from "./components/TrustIndicators";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Process } from "./components/Process";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div 
      className="min-h-screen bg-background text-foreground"
      style={{
        backgroundColor: '#ffffff',
        color: '#000000'
      }}
    >
      <Navbar />
      <main>
        <Hero />
        <TrustIndicators />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}