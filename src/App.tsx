import Features from './components/Features';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
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
      </TopGradient>
    </div>
  );
}

export default App;
