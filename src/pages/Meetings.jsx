import PageHero from '../components/PageHero';

const presentations = [
  {
    id: '15Q9KfaWXGrfYb319JtzZR8jbiuL8F4OVZ8KBfCFAWEI',
    title: 'Chapter Meeting',
    date: 'Fall 2026',
  },
];

const SlideEmbed = ({ id, title }) => (
  <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', background: '#000' }}>
    <iframe
      src={`https://docs.google.com/presentation/d/${id}/embed?start=false&loop=false&delayms=5000`}
      title={title}
      allowFullScreen
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
    />
  </div>
);

const Meetings = () => (
  <main>
    <PageHero eyebrow="Meeting Archive" title="Past meeting slideshows."
      lede="Missed a meeting? Slideshows from past chapter meetings are added here after each session." />

    <section className="pad-lg">
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 48 }}>
        {presentations.map((p) => (
          <div key={p.id}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 16, flexWrap: 'wrap' }}>
              <h2 style={{ fontSize: 'clamp(18px, 2vw, 24px)', color: 'var(--navy-ink)' }}>{p.title}</h2>
              <div className="eyebrow">{p.date}</div>
            </div>
            <SlideEmbed id={p.id} title={p.title} />
          </div>
        ))}

        <div style={{ padding: '24px 28px', background: 'var(--parchment)', borderLeft: '3px solid var(--gold)', fontSize: 14, color: 'var(--muted)', lineHeight: 1.6, fontStyle: 'italic' }}>
          New slideshows are added after each chapter meeting. If a deck is missing or you need a copy, email the chapter at <a href="mailto:jthhonorsociety@gmail.com" style={{ color: 'var(--navy)' }}>jthhonorsociety@gmail.com</a>.
        </div>
      </div>
    </section>
  </main>
);

export default Meetings;
