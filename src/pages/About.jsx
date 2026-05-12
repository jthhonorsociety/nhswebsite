import PageHero from '../components/PageHero';

const Stat = ({ n, label }) => (
  <div style={{ borderTop: '2px solid var(--gold)', paddingTop: 14 }}>
    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 38, fontWeight: 700, color: 'var(--navy-ink)', lineHeight: 1 }}>{n}</div>
    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 8 }}>{label}</div>
  </div>
);

const OfficerCard = ({ role, name, url }) => (
  <div style={{ background: 'var(--paper)', border: '1px solid var(--rule)' }}>
    <div style={{ aspectRatio: '3/4', overflow: 'hidden' }}>
      <img src={url} alt={name}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        onError={(e) => { e.target.parentNode.style.display = 'none'; }} />
    </div>
    <div style={{ padding: '20px 18px', textAlign: 'center' }}>
      <div className="eyebrow">{role}</div>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, marginTop: 6, color: 'var(--navy-ink)' }}>{name}</div>
    </div>
  </div>
);

const About = () => (
  <main>
    <PageHero
      eyebrow="About the Chapter"
      title="A tradition of leadership at Hoggard."
      lede="Founded as the Viking Chapter of the National Honor Society, our chapter recognizes Hoggard students who demonstrate the four pillars — and equips them to lead in school and across Wilmington." />

    <section className="pad-lg" style={{ background: 'var(--paper)' }}>
      <div className="grid-about" style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div>
          <img src="https://res.cloudinary.com/dbc9mudek/image/upload/v1778535200/IMG_1078_ymzrc0.jpg"
            alt="Chapter officers"
            style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
            onError={(e) => { e.target.style.display = 'none'; }} />
        </div>
        <div>
          <div className="eyebrow">Our Story</div>
          <h2 style={{ fontSize: 'clamp(28px, 3vw, 36px)', marginTop: 12, marginBottom: 18 }}>What we are, and what we do.</h2>
          <hr className="gold-rule" />
          <p style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 20 }}>
            The National Honor Society was founded in 1921 to recognize outstanding high school students. The Viking Chapter at John T. Hoggard High School carries that mission forward in Wilmington, North Carolina and selects students who have demonstrated excellence in <em>Scholarship, Service, Leadership,</em> and <em>Character</em>.
          </p>
          <p style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 28 }}>
            Members commit to a higher standard. They tutor younger students, raise funds for community partners, organize cleanups, and lead service projects of their own design. Membership is not an honor accepted lightly — it is a year-long commitment to the chapter and to the community.
          </p>
          <div className="grid-3col">
            <Stat n="284" label="Active members" />
            <Stat n="5,500+" label="Service hours / yr" />
            <Stat n="20+" label="Partner organizations" />
          </div>
        </div>
      </div>
    </section>

    {/* Officers */}
    <section className="pad-lg" style={{ background: 'var(--parchment)', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="eyebrow">2026–2027 Officers</div>
          <h2 style={{ fontSize: 'clamp(28px, 3vw, 36px)', marginTop: 12 }}>Chapter leadership</h2>
          <hr className="gold-rule center" />
        </div>
        <div className="grid-officers">
          {[
            { role: 'President', name: 'Lillie Nichols', url: 'https://res.cloudinary.com/dbc9mudek/image/upload/v1778539451/lillie_1_lw21m1.jpg' },
            { role: 'Vice President', name: 'Vivian Skiba', url: 'https://res.cloudinary.com/dbc9mudek/image/upload/v1778539864/Screenshot_2026-05-11_at_6.50.58_PM_tmn1k0.png' },
            { role: 'Treasurer', name: 'Lawson Kievit', url: 'https://res.cloudinary.com/dbc9mudek/image/upload/v1778539454/lawson_1_gd7aah.png' },
            { role: 'Induction Coordinator', name: 'Jaylin Wilson', url: 'https://res.cloudinary.com/dbc9mudek/image/upload/v1778539814/Screenshot_2026-05-11_at_6.50.07_PM_n1gfzj.png' },
            { role: 'Service Hours Coordinator', name: 'Camille Walker', url: 'https://res.cloudinary.com/dbc9mudek/image/upload/v1778539457/camille_1_dllujh.png' },
            { role: 'Communications Team', name: 'Greyson Clymer & Hutton Badrock', url: 'https://res.cloudinary.com/dbc9mudek/image/upload/v1778621119/greysonhuttonnew_ujeo6i.jpg' },
          ].map((o) => <OfficerCard key={o.role} {...o} />)}
        </div>
        <div style={{ textAlign: 'center', marginTop: 32, fontFamily: "'Inter', sans-serif", fontSize: 12, color: 'var(--muted)', letterSpacing: '0.08em' }}>
          Faculty Adviser: <strong style={{ color: 'var(--navy-ink)' }}>— Hunter Moody —</strong> · hunter.moody@nhcs.net
        </div>
      </div>
    </section>

    {/* Pillars detail */}
    <section className="pad-xl" style={{ background: 'var(--paper)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(28px, 3vw, 36px)', marginBottom: 36 }}>The Four Pillars</h2>
        <hr className="gold-rule" />
        <div style={{ display: 'grid', gap: 0, marginTop: 16 }}>
          {[
            { roman: 'I.', title: 'Scholarship', body: 'A minimum unweighted GPA of 3.6 is required for selection and continued membership. Grades are reviewed each grading period.' },
            { roman: 'II.', title: 'Service', body: 'Members complete a minimum of 20 service hours per year (5 minimum per semester) through chapter and individually-organized events.' },
            { roman: 'III.', title: 'Leadership', body: 'Initiative shown in school clubs, athletics, performing arts, student government, and self-organized Individual Service Projects.' },
            { roman: 'IV.', title: 'Character', body: 'Members are expected to model integrity, responsibility, and respect — on campus and off. The Honor Code is signed at induction.' },
          ].map((p, i) => (
            <div key={p.title} className="grid-pillar-detail" style={{
              padding: '28px 0',
              borderTop: i === 0 ? 'none' : '1px solid var(--rule)',
            }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 28, color: 'var(--gold)' }}>{p.roman}</div>
              <h3 style={{ fontSize: 26 }}>{p.title}</h3>
              <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.65 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default About;
