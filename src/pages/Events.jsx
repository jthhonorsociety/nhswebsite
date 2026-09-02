import PageHero from '../components/PageHero';

const EventCard = ({ title, day, mo, detail, spots, url, dateNote }) => (
  <div style={{ background: 'var(--paper)', border: '1px solid var(--rule)', display: 'flex', gap: 0 }}>
    <div style={{ background: 'var(--navy)', color: 'white', minWidth: 84, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px 12px', flexShrink: 0 }}>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 700, lineHeight: 1 }}>{day}</div>
      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-bright)', marginTop: 5 }}>{mo}</div>
      {dateNote && <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginTop: 5, textAlign: 'center' }}>{dateNote}</div>}
    </div>
    <div style={{ padding: '20px 24px', flex: 1 }}>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: 'var(--navy-ink)', marginBottom: 8 }}>{title}</div>
      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: 'var(--muted)', lineHeight: 1.6, marginBottom: spots || url ? 14 : 0 }}>{detail}</div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
        {spots && <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)' }}>{spots} spots remaining</div>}
        {url && <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-navy" style={{ padding: '10px 18px', fontSize: 11 }}>Sign Up →</a>}
      </div>
    </div>
  </div>
);

const RecurringCard = ({ title, dates, detail, spots, url }) => (
  <div style={{ padding: '22px 26px', background: 'var(--parchment)', border: '1px solid var(--rule)', borderLeft: '3px solid var(--gold)' }}>
    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: 'var(--navy-ink)', marginBottom: 4 }}>{title}</div>
    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 10 }}>{dates}</div>
    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>{detail}</div>
    {(spots || url) && (
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 12 }}>
        {spots && <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)' }}>{spots} spots</div>}
        {url && <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-navy" style={{ padding: '10px 18px', fontSize: 11 }}>Sign Up →</a>}
      </div>
    )}
  </div>
);

const Events = ({ onNavigate }) => {
  const upcoming = window.UPCOMING_EVENTS || [];
  const recurring = window.RECURRING_EVENTS || [];

  return (
    <main>
      <PageHero
        eyebrow="Chapter-Sponsored Events"
        title="Upcoming service opportunities."
        lede="Pre-approved events organized by the chapter. Sign up for a spot, attend, and submit your validation form within 48 hours to earn service hours." />

      {/* Back link */}
      <div style={{ background: 'var(--parchment)', borderBottom: '1px solid var(--rule)', padding: '12px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <button onClick={() => onNavigate('Volunteer')} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600,
            letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)',
            display: 'flex', alignItems: 'center', gap: 8, padding: 0,
          }}>
            ← Back to Volunteer
          </button>
        </div>
      </div>

      {/* Upcoming Events */}
      <section className="pad-lg" style={{ background: 'var(--paper)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Open Now</div>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 32px)', marginBottom: 8 }}>Upcoming events</h2>
          <hr className="gold-rule" />
          {upcoming.length === 0 ? (
            <div style={{ padding: '48px 0', textAlign: 'center', color: 'var(--muted)', fontSize: 15, fontStyle: 'italic', borderTop: '1px solid var(--rule)', marginTop: 16 }}>
              No upcoming events scheduled right now. Check back soon — new events are added regularly.
            </div>
          ) : (
            <div style={{ display: 'grid', gap: 14, marginTop: 16 }}>
              {upcoming.map((e, i) => <EventCard key={i} {...e} />)}
            </div>
          )}
        </div>
      </section>

      {/* Recurring */}
      {recurring.length > 0 && (
        <section className="pad-lg" style={{ background: 'var(--parchment)', borderTop: '1px solid var(--rule)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>Ongoing</div>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 32px)', marginBottom: 8 }}>Recurring opportunities</h2>
            <hr className="gold-rule" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16, marginTop: 16 }}>
              {recurring.map((e, i) => <RecurringCard key={i} {...e} />)}
            </div>
          </div>
        </section>
      )}

      {/* Reminder */}
      <section className="pad-lg" style={{ borderTop: '1px solid var(--rule)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '28px 32px', background: 'var(--navy-ink)', color: 'white' }}>
          <div className="eyebrow on-dark" style={{ marginBottom: 10 }}>Don't forget</div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: 'white', marginBottom: 10 }}>After every event, submit your hours.</div>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.72)', lineHeight: 1.6, marginBottom: 20, maxWidth: 560 }}>
            Signing up does not log your hours. You must submit the electronic Validation Form within 48 hours of completing any event — photo evidence required.
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScUIrWWqzVdeAHumUk542qSpsuQGpCcp4OUkuavulrDlzsB7g/viewform?usp=header"
            target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{ padding: '12px 24px', fontSize: 11 }}>
            Open Validation Form →
          </a>
        </div>
      </section>
    </main>
  );
};

export default Events;
