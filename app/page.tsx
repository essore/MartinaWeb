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
            <a className="button button-secondary" href="#roadmap">
              Vedi roadmap
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

      <section className="content-section">
        <div className="section-head">
          <p className="eyebrow">Architettura v1</p>
          <h2>Una home essenziale, ma gia pronta a crescere.</h2>
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
          <p className="eyebrow">Prima release</p>
          <h2>Cosa deve dimostrare la demo.</h2>
        </div>

        <ul className="goal-list">
          {siteContent.releaseGoals.map((goal) => (
            <li key={goal}>{goal}</li>
          ))}
        </ul>
      </section>

      <section className="content-section" id="contatti">
        <div className="section-head">
          <p className="eyebrow">Contatti base</p>
          <h2>La demo mantiene i riferimenti essenziali.</h2>
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
      </section>

      <section className="content-section roadmap-block" id="roadmap">
        <div className="section-head">
          <p className="eyebrow">Roadmap</p>
          <h2>Sviluppo pensato su piu giorni, non come pagina unica da rifare ogni volta.</h2>
        </div>

        <ol className="roadmap-list">
          <li>V1 demo: struttura, tono visivo, sezioni minime e contatti.</li>
          <li>V2 contenuti: testo clinico vero, studio, setting, CTA e proof points.</li>
          <li>V3 release: responsive refinement, validazione build e deploy Netlify.</li>
        </ol>
      </section>
    </main>
  );
}
