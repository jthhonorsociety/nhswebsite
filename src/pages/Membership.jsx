import { useState } from 'react';
import PageHero from '../components/PageHero';

const EligibilityCard = ({ grade, semester }) => (
  <div style={{ background: 'var(--parchment)', border: '1px solid var(--rule)', borderTop: '3px solid var(--gold)', padding: '24px' }}>
    <div className="eyebrow">{grade}</div>
    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: 'var(--navy-ink)', marginTop: 8 }}>{semester}</div>
  </div>
);

const HourStat = ({ n, label }) => (
  <div style={{ borderTop: '2px solid var(--gold-bright)', paddingTop: 16 }}>
    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(40px, 5vw, 56px)', fontWeight: 700, color: 'white', lineHeight: 1 }}>{n}</div>
    <div className="eyebrow on-dark" style={{ marginTop: 12 }}>{label}</div>
  </div>
);

const Membership = () => {
  const [view, setView] = useState('Apply');
  const [openIdx, setOpenIdx] = useState(0);

  const requirements = [
    { title: 'Character Standards', body: 'All members are expected to consistently maintain the characteristics of exemplary character, leadership, and service. Even before formal induction, candidates are treated as members and held to the same higher expectations — academically and socially.' },
    { title: 'Academic Performance — 3.6 GPA Minimum', body: 'Grades are checked each grading period. Students whose unweighted GPAs fall below 3.6 enter a probationary period and have the following grading period to correct the deficiency before dismissal from NHS.' },
    { title: 'Meeting Attendance', body: 'Members are expected to attend all chapter meetings (dates announced by email — please check your email regularly). Absences must be approved in advance with the adviser. Excused absences include school activities such as Science/Math competitions, away sporting events, and school trips. Missing more than three meetings will result in probation or dismissal.' },
    { title: 'Submission of Materials', body: "All required materials must be submitted to the adviser on time. Responsibility is one of the characteristics for which members are selected, and missed deadlines are grounds for dismissal. Late materials will not be accepted and will forfeit one's membership." },
    { title: 'Service Hour Requirements', body: 'NHS is, first and foremost, a service organization. Members are required to complete at least 20 volunteer hours per year, with a minimum of 5 hours per semester. Hours may be earned through chapter-sponsored or unsponsored events, but cannot be shared with another club or group ("double dipping").' },
    { title: 'Conduct & Dismissal', body: "Any in-school or out-of-school suspension results in automatic dismissal from NHS. Notice of appeal may be filed with the adviser. Any member who willfully and persistently violates school rules, or engages in immoral or disreputable conduct, is subject to dismissal. Dismissed members must surrender their membership card, certificate, and pin; record of membership is removed from permanent school records, and refunds are not given." },
  ];

  const stages = [
    { label: 'First Stage', title: 'Application', body: 'Candidates apply within the application window each semester. Every question must be answered in a single sentence — this forces real thought. After the window closes, applicants must find two unique adults to read the sentences for each pillar and confirm via Google Form that they reflect who you are. Reference forms are sent automatically.', meta: 'Applications due March 20, 2026 at 4:00 PM. Late applications will not be accepted.' },
    { label: 'Second Stage', title: 'Faculty Council Review', body: "Complete applications are reviewed first by the chapter's leadership team and then by the Faculty Council. Approved candidates are notified by email with details and forms required to continue.", meta: 'To appeal, notify Coach Moody in writing within 7 days. Face-to-face appeals are not granted — the Faculty Council remains anonymous. Further appeals reference the Hoggard NHS by-laws.' },
    { label: 'Third Stage', title: 'Acceptance & Dues', body: 'Acceptance gives you the opportunity to pursue membership — you are not yet a formal member. Dues of $50 cover your graduation stole, induction certificate, pin with National Database number, and registration into the NHS National database.', meta: 'Pay dues on School Cash Online by April 29, 2026 at 11:59 PM (not the date listed on School Cash Online). Check email daily during this stage.' },
    { label: 'Final Stage', title: 'Induction Ceremony', body: 'Inductions are held each semester and are MANDATORY. The ceremony is when you receive your official database certificate, your pin, and your identification card — this is what makes your acceptance official, and the final step before NHS can be added to college and job applications.', meta: 'From induction forward, the laws and by-laws of the National and Hoggard chapters apply in full. GPAs are checked at the end of each semester.' },
  ];

  return (
    <main>
      <PageHero eyebrow="Membership" title="Application & membership."
        lede="Membership in the Viking Chapter is an honor and a year-long commitment. Below are the steps to apply and the standards every active member is expected to meet." />

      <section className="pad-sm-top">
        <div className="grid-cta" style={{ maxWidth: 1100, margin: '0 auto', background: 'var(--navy)', color: 'white', padding: '40px 32px' }}>
          <div>
            <div className="eyebrow on-dark">Begin Your Candidacy</div>
            <h2 style={{ color: 'white', fontSize: 'clamp(22px, 2.5vw, 30px)', marginTop: 8 }}>New Member Application</h2>
            <p style={{ color: 'rgba(255,255,255,0.78)', marginTop: 8, fontSize: 15 }}>
              Applications are open now and <strong>close September 25 at 4:00 PM</strong>. Submit the application form below, then use the linked instructions to screenshot your GPA for your reference forms.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a href="https://forms.gle/o5PfywJmC8kfFtYj7"
              target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{ padding: '16px 32px', textAlign: 'center' }}>
              Application Form →
            </a>
            <a href="https://docs.google.com/presentation/d/12a09hdntrVKdla81NmL0ACeo1lsK1k93Jhkf2h9PVe4/edit?usp=sharing"
              target="_blank" rel="noopener noreferrer" className="btn btn-outline-light" style={{ padding: '16px 32px', textAlign: 'center' }}>
              GPA Screenshot Instructions ↗
            </a>
          </div>
        </div>
      </section>

      {/* View switcher */}
      <section style={{ padding: '40px 20px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="tab-scroll">
            {['Apply', 'Maintain'].map((v) => (
              <button key={v} onClick={() => setView(v)} style={{
                background: 'transparent', border: 'none', padding: '14px 28px', whiteSpace: 'nowrap',
                fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.16em',
                textTransform: 'uppercase', cursor: 'pointer',
                color: view === v ? 'var(--navy-ink)' : 'var(--muted)',
                borderBottom: view === v ? '2px solid var(--gold)' : '2px solid transparent',
                marginBottom: -1,
              }}>{v === 'Apply' ? 'Application Process' : 'Maintaining Membership'}</button>
            ))}
          </div>
        </div>
      </section>

      {view === 'Apply' && (
        <>
          <section className="pad-md">
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
              <div className="eyebrow">Eligibility Windows</div>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 32px)', marginTop: 12, marginBottom: 18 }}>Who can apply, and when.</h2>
              <hr className="gold-rule" />
              <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.7, maxWidth: 760, marginBottom: 28 }}>
                The National Honor Society application has transitioned to a fully online process. The application window opens by grade level — make sure you apply during the right semester.
              </p>
              <div className="grid-eligibility">
                <EligibilityCard grade="Sophomores" semester="Spring Semester Only" />
                <EligibilityCard grade="Juniors" semester="Fall and Spring Semesters" />
                <EligibilityCard grade="Seniors" semester="Fall Semester Only" />
              </div>
              <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 20, fontStyle: 'italic' }}>
                Juniors and sophomores who remain eligible after being removed in the First Stage may reapply. Sophomore invitations are only sent in the spring.
              </p>
            </div>
          </section>

          <section className="pad-lg-r">
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
              <div className="eyebrow">Four Stages</div>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 32px)', marginTop: 12, marginBottom: 36 }}>From application to induction.</h2>
              <hr className="gold-rule" />
              <div style={{ marginTop: 24 }}>
                {stages.map((s, i) => (
                  <div key={s.label} className="grid-stages" style={{ padding: '32px 0', borderTop: i === 0 ? 'none' : '1px solid var(--rule)' }}>
                    <div>
                      <div className="eyebrow">{s.label}</div>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 38, color: 'var(--gold)', lineHeight: 1, marginTop: 12 }}>
                        {String(i + 1).padStart(2, '0')}
                      </div>
                    </div>
                    <div>
                      <h3 style={{ fontSize: 24, marginBottom: 12 }}>{s.title}</h3>
                      <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 14 }}>{s.body}</p>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: 'var(--navy-ink)', background: 'var(--parchment)', borderLeft: '3px solid var(--gold)', padding: '10px 14px', lineHeight: 1.55 }}>{s.meta}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {view === 'Maintain' && (
        <>
          <section className="pad-md">
            <div style={{
              maxWidth: 1100, margin: '0 auto', background: 'var(--parchment)',
              border: '1px solid var(--rule)', borderLeft: '4px solid var(--gold)',
              padding: '24px 20px', display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap',
            }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 38, color: 'var(--gold)', lineHeight: 1, flexShrink: 0 }}>※</div>
              <div style={{ flex: 1, minWidth: 200 }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: 'var(--navy-ink)', marginBottom: 4 }}>Required at Induction</div>
                <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.55 }}>
                  All NHS members must complete, sign, and turn in the <strong>Honor Code</strong>, the <strong>Requirements for Maintaining NHS Membership</strong>, and the <strong>Meeting Agenda</strong> at their first NHS meeting.
                </p>
              </div>
              <a href="https://docs.google.com/document/d/1vhIGKKLhcIoc7pW50SB5KiyrXypEz_BXvfccOZEg8M4/edit?usp=sharing"
                target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '10px 18px', fontSize: 11 }}>
                Read Bylaws ↗
              </a>
            </div>
          </section>

          <section className="pad-lg-r">
            <div className="grid-sidebar" style={{ maxWidth: 1100, margin: '0 auto' }}>
              <div className="sidebar-sticky">
                <div className="eyebrow">Six Standards</div>
                <h2 style={{ fontSize: 28, marginTop: 12, marginBottom: 16 }}>Requirements for maintaining membership</h2>
                <hr className="gold-rule" />
                <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>
                  Click any standard to expand the full text. These mirror the requirements signed at induction.
                </p>
              </div>

              <div>
                {requirements.map((r, i) => {
                  const isOpen = openIdx === i;
                  return (
                    <div key={r.title} style={{ borderTop: i === 0 ? '1px solid var(--rule)' : 'none', borderBottom: '1px solid var(--rule)' }}>
                      <button onClick={() => setOpenIdx(isOpen ? -1 : i)}
                        style={{ width: '100%', background: 'transparent', border: 'none', padding: '20px 0', display: 'flex', alignItems: 'center', gap: 20, cursor: 'pointer', textAlign: 'left' }}>
                        <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 20, color: 'var(--gold)', width: 36, flexShrink: 0 }}>
                          {['I.', 'II.', 'III.', 'IV.', 'V.', 'VI.'][i]}
                        </span>
                        <span style={{ flex: 1, fontFamily: "'Playfair Display', serif", fontSize: 20, color: 'var(--navy-ink)', lineHeight: 1.3 }}>{r.title}</span>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, color: 'var(--navy)', transform: isOpen ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.2s', flexShrink: 0 }}>+</span>
                      </button>
                      <div style={{
                        maxHeight: isOpen ? '400px' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.35s ease',
                      }}>
                        <div style={{ paddingLeft: 56, paddingBottom: 24, paddingRight: 20 }}>
                          <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.7 }}>{r.body}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="pad-lg" style={{ background: 'var(--navy-ink)', color: 'white', marginTop: 48 }}>
            <div className="grid-stat-strip" style={{ maxWidth: 1100, margin: '0 auto' }}>
              <HourStat n="3.6" label="Min. unweighted GPA" />
              <HourStat n="20" label="Service hours / yr" />
              <HourStat n="5" label="Hours / semester min" />
              <HourStat n="3" label="Max meetings missed" />
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default Membership;
