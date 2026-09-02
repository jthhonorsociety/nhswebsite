import { useState, useEffect } from 'react';
import { Nav, Footer } from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Membership from './pages/Membership';
import Volunteer from './pages/Volunteer';
import Events from './pages/Events';
import Meetings from './pages/Meetings';
import Contact from './pages/Contact';

const App = () => {
  const [page, setPage] = useState('Home');

  const handleNavigate = (target) => {
    setPage(target);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    const html = document.documentElement;
    const onScroll = () => {
      const atBottom = window.scrollY + window.innerHeight >= html.scrollHeight - 2;
      html.style.background = atBottom ? '#0e1a36' : '#fdfbf6';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      html.style.background = '';
    };
  }, [page]);

  const sections = {
    pillars: true,
    mission: true,
    quickLinks: true,
    gallery: true,
  };

  return (
    <>
      <Nav active={page} onNavigate={handleNavigate} />
      <div style={{ background: 'var(--gold)', padding: '12px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: 'white', letterSpacing: '0.02em' }}>
          📋 Want to know how many service hours you have? You no longer need to email — just fill out the form.
        </span>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfPfwKGfzWDCmNzUuzzWyvb9x3Eoq23e0bu8XRRgc-zVa1cVw/viewform?usp=header"
          target="_blank" rel="noopener noreferrer"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', background: 'white', padding: '8px 16px', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>
          Check My Hours →
        </a>
      </div>
      <div key={page}>
        {page === 'Home' && <Home onNavigate={handleNavigate} sections={sections} />}
        {page === 'About' && <About />}
        {page === 'Membership' && <Membership />}
        {page === 'Volunteer' && <Volunteer onNavigate={handleNavigate} />}
        {page === 'Events' && <Events onNavigate={handleNavigate} />}
        {page === 'Meetings' && <Meetings />}
        {page === 'Contact' && <Contact />}
      </div>
      <Footer onNavigate={handleNavigate} />
    </>
  );
};

export default App;
