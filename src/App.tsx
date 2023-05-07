import About from './components/About';
import BottomGradient from './components/BottomGradient';
import CTA from './components/CTA';
import Carousel from './components/Carousel';
import Certifications from './components/Certifications';
import Features from './components/Features';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Services from './components/Services';
import TechCompanies from './components/TechCompanies';
import TopGradient from './components/TopGradient';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TopGradient>
        <TechCompanies />
        <Features />
        <Services />
        <About />
        <Certifications />
      </TopGradient>
      <Projects />
      <BottomGradient>
        <Carousel />
        <CTA />
      </BottomGradient>
    </div>
  );
}

export default App;
