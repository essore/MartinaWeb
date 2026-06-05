import type { Metadata } from "next";
import { siteContent } from "../../../content/site";
import { PageIntro, TextCard } from "../../components";

export const metadata: Metadata = {
  title: "Ansia e stress | Dott.ssa Martina Pallottini",
  description:
    "Scopri quando chiedere supporto per ansia e stress con la Dott.ssa Martina Pallottini, psicoterapeuta a Fermo e online.",
};

export default function AnxietyStressPage() {
  const page = siteContent.pages.anxietyStress;

  return (
    <main className="page-shell">
      <PageIntro
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
      />

      <section className="content-section">
        <div className="card-grid">
          {page.sections.map((section) => (
            <TextCard
              key={section.title}
              title={section.title}
              body={section.body}
            />
          ))}
        </div>
      </section>

      <section className="content-section roadmap-block">
        <div className="section-head">
          <p className="eyebrow">Primo passo</p>
          <h2>Valutare insieme il percorso piu adatto.</h2>
        </div>
        <p className="lede">
          Un primo contatto serve a capire la richiesta, chiarire modalita e
          disponibilita, e verificare se il percorso proposto e coerente con il
          bisogno della persona.
        </p>
        <a className="button button-primary" href={siteContent.identity.ctaHref}>
          {siteContent.identity.ctaLabel}
        </a>
      </section>
    </main>
  );
}
