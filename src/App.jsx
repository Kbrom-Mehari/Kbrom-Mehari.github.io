import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';

const App = () => {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [isTerminalMode, setIsTerminalMode] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setIsPaletteOpen((open) => !open);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const konamiSequence = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a'];
    let buffer = [];

    const handleKonami = (event) => {
      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key.toLowerCase();
      buffer.push(key);

      if (buffer.length > konamiSequence.length) {
        buffer.shift();
      }

      const isMatch = buffer.every((value, index) => value === konamiSequence[index]);

      if (isMatch && buffer.length === konamiSequence.length) {
        setIsTerminalMode((mode) => !mode);
        buffer = [];
      }
    };

    window.addEventListener('keydown', handleKonami);
    return () => window.removeEventListener('keydown', handleKonami);
  }, []);

  return(
    <div className="page-shell">
      <div className="page-shell__content">
        <Navbar onOpenPalette={() => setIsPaletteOpen(true)} />

        <main className="page-shell__main">
          <Hero isTerminalMode={isTerminalMode} />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>

      <CommandPalette isOpen={isPaletteOpen} onClose={() => setIsPaletteOpen(false)} />
    </div>
  );
};

export default App;