import './styles/App.css';
import './styles/header-footer.css'
import './styles/hero.css'
import './styles/about.css'

import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroBottom from "./components/HeroBottom"
import Footer from "./components/Footer";
import Options from './components/Options';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Options />
      <HeroBottom />
      <Footer />
    </div>
  );
}

export default App;
