import About from './components/About';
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
      <Carousel />
    </div>
  );
}

export default App;
