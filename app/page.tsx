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
          <p className="eyebrow">Aree principali</p>
          <h2>Una home essenziale, pensata per accompagnare il primo orientamento.</h2>
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
          <p className="eyebrow">Obiettivi della pagina</p>
          <h2>Cosa deve trasmettere il sito in questa fase.</h2>
        </div>

        <ul className="goal-list">
          {siteContent.releaseGoals.map((goal) => (
            <li key={goal}>{goal}</li>
          ))}
        </ul>
      </section>

      <section className="content-section" id="contatti">
        <div className="section-head">
          <p className="eyebrow">Contatti</p>
          <h2>Riferimenti essenziali in attesa dei dati definitivi.</h2>
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
          <p className="eyebrow">Evoluzione</p>
          <h2>Una base ordinata per integrare contenuti reali e affinare la presentazione.</h2>
        </div>

        <ol className="roadmap-list">
          <li>Consolidare la struttura e il tono visivo della home.</li>
          <li>Integrare i contenuti clinici reali, lo studio e i riferimenti approvati.</li>
          <li>Rifinire responsive, gerarchia e leggibilita prima della prossima release manuale.</li>
        </ol>
      </section>
    </main>
  );
}
