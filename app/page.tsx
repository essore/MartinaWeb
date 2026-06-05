import { siteContent } from "../content/site";

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">{siteContent.hero.eyebrow}</p>
          <h1>{siteContent.hero.title}</h1>
          <p className="lede">{siteContent.hero.description}</p>

          <div className="hero-actions">
            <a className="button button-primary" href={siteContent.identity.ctaHref}>
              {siteContent.identity.ctaLabel}
            </a>
            <a className="button button-secondary" href="#percorso">
              Scopri di piu
            </a>
          </div>
        </div>

        <aside className="identity-card">
          <span className="identity-label">Identita</span>
          <h2>{siteContent.identity.name}</h2>
          <p>{siteContent.identity.role}</p>
          <strong>{siteContent.identity.city}</strong>
        </aside>
      </section>

      <section className="intro-grid">
        {siteContent.introduction.map((paragraph) => (
          <article className="intro-card" key={paragraph}>
            <p>{paragraph}</p>
          </article>
        ))}
      </section>

      <section className="content-section" id="percorso">
        <div className="section-head">
          <p className="eyebrow">Il percorso</p>
          <h2>Un orientamento chiaro tra approccio clinico, percorsi e setting.</h2>
        </div>

        <div className="card-grid">
          {siteContent.sections.map((section) => (
            <article className="feature-card" id={section.id} key={section.id}>
              <span className="card-index">{section.id}</span>
              <h3>{section.title}</h3>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-head">
          <p className="eyebrow">Di cosa si occupa</p>
          <h2>Ambiti di supporto e percorsi costruiti sulle esigenze della persona.</h2>
        </div>

        <ul className="goal-list">
          {siteContent.supportAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </section>

      <section className="content-section" id="contatti">
        <div className="section-head">
          <p className="eyebrow">Contatti</p>
          <h2>Scegli il modo piu semplice per concordare un primo appuntamento.</h2>
        </div>

        <div className="contact-grid">
          {siteContent.contacts.map((contact) => (
            <a
              className="contact-card"
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <span>{contact.label}</span>
              <strong>{contact.value}</strong>
            </a>
          ))}
        </div>

        <p className="contact-note">
          I miei social:{" "}
          {siteContent.secondaryLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.value}
            </a>
          ))}
        </p>
      </section>

      <section className="content-section">
        <div className="section-head">
          <p className="eyebrow">{siteContent.trustReference.eyebrow}</p>
          <h2>{siteContent.trustReference.title}</h2>
        </div>

        <div className="trust-card">
          <p className="lede">{siteContent.trustReference.body}</p>
          <a
            className="button button-secondary"
            href={siteContent.trustReference.primaryLink.href}
            target="_blank"
            rel="noreferrer"
          >
            {siteContent.trustReference.primaryLink.label}
          </a>
        </div>
      </section>

      <section className="content-section roadmap-block" id="roadmap">
        <div className="section-head">
          <p className="eyebrow">Primo colloquio</p>
          <h2>{siteContent.firstContact.title}</h2>
        </div>

        <p className="lede">{siteContent.firstContact.body}</p>

        <ol className="roadmap-list">
          {siteContent.firstContact.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ol>
      </section>
    </main>
  );
}
