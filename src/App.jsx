import { useState, useEffect } from 'react';
import { Nav, Footer } from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Membership from './pages/Membership';
import Volunteer from './pages/Volunteer';
import Events from './pages/Events';
import Meetings from './pages/Meetings';
import Contact from './pages/Contact';

const bannerMessages = [
  {
    text: 'Applications are now open — apply before September 23.',
    cta: 'Apply Now →',
    target: 'Membership',
  },
  {
    text: 'Want to know how many service hours you have? You no longer need to email — just fill out the form.',
    cta: 'Check My Hours →',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSfPfwKGfzWDCmNzUuzzWyvb9x3Eoq23e0bu8XRRgc-zVa1cVw/viewform?usp=header',
  },
];

const App = () => {
  const [page, setPage] = useState('Home');
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const [bannerIndex, setBannerIndex] = useState(0);
  const [bannerVisible, setBannerVisible] = useState(true);

  const handleNavigate = (target) => {
    setPage(target);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    if (bannerDismissed || bannerMessages.length < 2) return;
    const tick = setInterval(() => {
      setBannerVisible(false);
      setTimeout(() => {
        setBannerIndex((i) => (i + 1) % bannerMessages.length);
        setBannerVisible(true);
      }, 250);
    }, 4500);
    return () => clearInterval(tick);
  }, [bannerDismissed]);

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
      {!bannerDismissed && (() => {
        const msg = bannerMessages[bannerIndex];
        const ctaStyle = { background: 'white', color: 'var(--gold)', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', padding: '8px 18px', flexShrink: 0, transition: 'all 0.2s ease' };
        const ctaHoverOn = (e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 18px rgba(255,255,255,0.35)'; };
        const ctaHoverOff = (e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; };
        return (
          <div style={{ background: 'var(--gold)', padding: '12px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, flexWrap: 'wrap', position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, flexWrap: 'wrap', opacity: bannerVisible ? 1 : 0, transition: 'opacity 0.25s ease' }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: 'white', letterSpacing: '0.02em' }}>
                {msg.text}
              </span>
              {msg.href ? (
                <a href={msg.href} target="_blank" rel="noopener noreferrer" className="btn" style={ctaStyle}
                  onMouseEnter={ctaHoverOn} onMouseLeave={ctaHoverOff}>
                  {msg.cta}
                </a>
              ) : (
                <button onClick={() => handleNavigate(msg.target)} className="btn" style={ctaStyle}
                  onMouseEnter={ctaHoverOn} onMouseLeave={ctaHoverOff}>
                  {msg.cta}
                </button>
              )}
            </div>
            <button onClick={() => setBannerDismissed(true)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.8)', fontSize: 18, lineHeight: 1, padding: '0 4px', position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)' }}
              aria-label="Dismiss">
              ×
            </button>
          </div>
        );
      })()}
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
