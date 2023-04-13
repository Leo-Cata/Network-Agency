import About from './components/About';
import Features from './components/Features';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
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
      </TopGradient>
    </div>
  );
}

export default App;
