import type { Metadata } from "next";
import { siteContent } from "../../content/site";
import { ContactCards, PageIntro } from "../components";

export const metadata: Metadata = {
  title: "Contatti | Dott.ssa Martina Pallottini",
  description:
    "Contatta la Dott.ssa Martina Pallottini per disponibilità, tariffe e primo appuntamento a Fermo oppure online.",
};

export default function ContactsPage() {
  const page = siteContent.pages.contacts;

  return (
    <main className="page-shell">
      <PageIntro
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
      />

      <section className="content-section">
        <ContactCards />
      </section>

      <section className="content-section">
        <div className="trust-card">
          <p className="eyebrow">Riferimenti</p>
          <h2>{siteContent.legalReference.title}</h2>
          <ul className="goal-list">
            {siteContent.legalReference.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <a
            className="button button-secondary"
            href={siteContent.verification.orderSearchHref}
            target="_blank"
            rel="noreferrer"
          >
            {siteContent.verification.orderSearchLabel}
          </a>
        </div>
      </section>
    </main>
  );
}
