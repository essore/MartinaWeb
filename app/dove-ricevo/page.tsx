import type { Metadata } from "next";
import { siteContent } from "../../content/site";
import { PageIntro } from "../components";

export const metadata: Metadata = {
  title: "Dove ricevo | Dott.ssa Martina Pallottini",
  description:
    "Studio privato a Rapagnano, vicino Fermo, e colloqui online. Scopri dove riceve la Dott.ssa Martina Pallottini.",
};

export default function LocationPage() {
  const page = siteContent.pages.location;

  return (
    <main className="page-shell">
      <PageIntro
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
      />

      <section className="content-section">
        <div className="trust-card">
          <p className="eyebrow">Studio</p>
          <h2>{siteContent.identity.address}</h2>
          <p className="lede">
            Lo studio si trova a pochi minuti da Campiglione di Fermo. Il
            setting è pensato per sostenere privacy, confidenzialità e
            continuità del lavoro terapeutico.
          </p>
          <a
            className="button button-secondary"
            href={page.mapHref}
            target="_blank"
            rel="noreferrer"
          >
            Apri il navigatore
          </a>
        </div>
      </section>

      <section className="content-section">
        <div className="section-head">
          <p className="eyebrow">Setting</p>
          <h2>Uno spazio riservato per il percorso terapeutico.</h2>
        </div>

        <ul className="goal-list">
          {page.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
