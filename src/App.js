import './styles/App.css';
import './styles/header-footer.css'
import './styles/hero.css'
import './styles/about.css'

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />

      <About />
      <Footer />
    </div>
  );
}

export default App;
