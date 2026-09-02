import PageHero from '../components/PageHero';

const Meetings = () => (
  <main>
    <PageHero eyebrow="Meeting Archive" title="Past meeting slideshows."
      lede="Missed a meeting? Slideshows from past chapter meetings are added here after each session." />

    <section className="pad-lg">
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ padding: '48px 0', textAlign: 'center', color: 'var(--muted)', fontSize: 15, fontStyle: 'italic', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
          Slideshows will appear here after each chapter meeting.
        </div>

        <div style={{ marginTop: 48, padding: '24px 28px', background: 'var(--parchment)', borderLeft: '3px solid var(--gold)', fontSize: 14, color: 'var(--muted)', lineHeight: 1.6, fontStyle: 'italic' }}>
          New slideshows are added after each chapter meeting. If a deck is missing or you need a copy, email the chapter at <a href="mailto:jthhonorsociety@gmail.com" style={{ color: 'var(--navy)' }}>jthhonorsociety@gmail.com</a>.
        </div>
      </div>
    </section>
  </main>
);

export default Meetings;
