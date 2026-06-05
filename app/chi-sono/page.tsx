import type { Metadata } from "next";
import { siteContent } from "../../content/site";
import { PageIntro } from "../components";

export const metadata: Metadata = {
  title: "Chi sono | Dott.ssa Martina Pallottini",
  description:
    "Formazione, iscrizione all'Albo e profilo clinico della Dott.ssa Martina Pallottini, psicologa psicoterapeuta a Fermo.",
};

export default function AboutPage() {
  const page = siteContent.pages.about;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dott.ssa Martina Pallottini",
    jobTitle: siteContent.identity.role,
    description: page.description,
    email: siteContent.identity.email,
    telephone: "+393347211002",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteContent.identity.addressShort,
      addressLocality: "Rapagnano",
      addressRegion: "FM",
      addressCountry: "IT",
    },
    sameAs: siteContent.secondaryLinks.map((link) => link.href),
    knowsAbout: siteContent.knowsAbout,
    identifier: siteContent.identity.board,
  };

  return (
    <main className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <PageIntro
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
      />

      <section className="content-section">
        <div className="intro-grid">
          {page.paragraphs.map((paragraph) => (
            <article className="intro-card" key={paragraph}>
              <p>{paragraph}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-head">
          <p className="eyebrow">E-E-A-T</p>
          <h2>Dati professionali chiari e verificabili.</h2>
        </div>

        <ul className="goal-list">
          {page.credentials.map((credential) => (
            <li key={credential}>{credential}</li>
          ))}
        </ul>
        <p className="contact-note">{siteContent.verification.orderSearchNote}</p>
        <a
          className="button button-secondary"
          href={siteContent.verification.orderSearchHref}
          target="_blank"
          rel="noreferrer"
        >
          {siteContent.verification.orderSearchLabel}
        </a>
      </section>
    </main>
  );
}
