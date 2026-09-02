import PageHero from '../components/PageHero';

const EventCard = ({ title, day, mo, detail, spots, url, url2, dateNote }) => (
  <div style={{ background: 'var(--paper)', border: '1px solid var(--rule)', display: 'flex', gap: 0 }}>
    <div style={{ background: 'var(--navy)', color: 'white', minWidth: 80, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '18px 12px', flexShrink: 0 }}>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 38, fontWeight: 700, lineHeight: 1 }}>{day}</div>
      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-bright)', marginTop: 4 }}>{mo}</div>
      {dateNote && <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginTop: 4, textAlign: 'center' }}>{dateNote}</div>}
    </div>
    <div style={{ padding: '18px 20px', flex: 1 }}>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: 'var(--navy-ink)', marginBottom: 6 }}>{title}</div>
      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: 'var(--muted)', lineHeight: 1.55, marginBottom: spots || url ? 10 : 0 }}>{detail}</div>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
        {spots && <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)' }}>{spots} spots</div>}
        {url && <a href={url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--navy)', textDecoration: 'underline' }}>Sign Up</a>}
        {url2 && <a href={url2} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--navy)', textDecoration: 'underline' }}>More Info</a>}
      </div>
    </div>
  </div>
);

const RecurringCard = ({ title, dates, detail, spots, url }) => (
  <div style={{ padding: '20px 24px', background: 'var(--parchment)', border: '1px solid var(--rule)', borderLeft: '3px solid var(--gold)' }}>
    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: 'var(--navy-ink)', marginBottom: 2 }}>{title}</div>
    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 8 }}>{dates}</div>
    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: 'var(--muted)', lineHeight: 1.55 }}>{detail}</div>
    {(spots || url) && (
      <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginTop: 10 }}>
        {spots && <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)' }}>{spots} spots</div>}
        {url && <a href={url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--navy)', textDecoration: 'underline' }}>Sign Up</a>}
      </div>
    )}
  </div>
);

const Meetings = () => {
  const upcoming = window.UPCOMING_EVENTS || [];
  const recurring = window.RECURRING_EVENTS || [];

  return (
    <main>
      <PageHero eyebrow="Meetings & Events" title="What's coming up."
        lede="Upcoming chapter events, service opportunities, and recurring meeting schedule — updated directly from the chapter calendar." />

      {/* Upcoming Events */}
      <section className="pad-lg" style={{ background: 'var(--paper)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Upcoming Events</div>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 32px)', marginBottom: 8 }}>On the calendar</h2>
          <hr className="gold-rule" />
          {upcoming.length === 0 ? (
            <div style={{ padding: '40px 0', textAlign: 'center', color: 'var(--muted)', fontSize: 15, fontStyle: 'italic', borderTop: '1px solid var(--rule)' }}>
              No upcoming events scheduled. Check back soon.
            </div>
          ) : (
            <div style={{ display: 'grid', gap: 12, marginTop: 16 }}>
              {upcoming.map((e, i) => <EventCard key={i} {...e} />)}
            </div>
          )}
        </div>
      </section>

      {/* Recurring */}
      {recurring.length > 0 && (
        <section className="pad-lg" style={{ background: 'var(--parchment)', borderTop: '1px solid var(--rule)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>Regular Schedule</div>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 32px)', marginBottom: 8 }}>Recurring events</h2>
            <hr className="gold-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16, marginTop: 16 }}>
              {recurring.map((e, i) => <RecurringCard key={i} {...e} />)}
            </div>
          </div>
        </section>
      )}

      {/* Slideshow archive */}
      <section className="pad-lg" style={{ borderTop: '1px solid var(--rule)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Meeting Archive</div>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 32px)', marginBottom: 8 }}>Past meeting slideshows</h2>
          <hr className="gold-rule" />
          <div style={{ padding: '40px 0', textAlign: 'center', color: 'var(--muted)', fontSize: 15, fontStyle: 'italic', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)', marginTop: 16 }}>
            Slideshows will appear here after each chapter meeting.
          </div>
          <div style={{ marginTop: 24, padding: '20px 24px', background: 'var(--parchment)', borderLeft: '3px solid var(--gold)', fontSize: 14, color: 'var(--muted)', lineHeight: 1.6, fontStyle: 'italic' }}>
            New slideshows are added after each chapter meeting. If a deck is missing or you need a copy, email the chapter at <a href="mailto:jthhonorsociety@gmail.com" style={{ color: 'var(--navy)' }}>jthhonorsociety@gmail.com</a>.
          </div>
        </div>
      </section>
    </main>
  );
};

export default Meetings;
