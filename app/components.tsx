import Link from "next/link";
import { siteContent } from "../content/site";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

type TextCardProps = {
  title: string;
  body: string;
};

function ContactIcon({ icon }: { icon: string }) {
  if (icon === "wa") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.5 19.2 4 20l.9-3.3a8.2 8.2 0 1 1 2.6 2.5Z" />
        <path d="M9.2 8.2c.2-.3.4-.3.6-.2l1.1 1.4c.1.2.1.4 0 .6l-.5.7c.6 1.1 1.5 2 2.6 2.6l.7-.5c.2-.1.4-.1.6 0l1.4 1.1c.2.1.2.4.1.6-.4.8-1 1.3-1.8 1.3-2.6-.1-6-3.5-6.1-6.1 0-.7.4-1.3 1.2-1.7Z" />
      </svg>
    );
  }

  if (icon === "tg") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m4 12 16-7-3.2 16-4.5-5.2-3.3 3.1 1-4.6L4 12Z" />
        <path d="m10 14.3 6.6-6.2" />
      </svg>
    );
  }

  if (icon === "tel") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.2 5.2 10 9l-1.3 1.5c.9 1.9 2.4 3.4 4.3 4.3L14.5 13l3.8 1.8-.5 3.3c-.1.6-.6 1-1.2 1A13.6 13.6 0 0 1 5 7.4c0-.6.4-1.1 1-1.2l2.2-.4Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.5 7.5h15v9h-15v-9Z" />
      <path d="m5 8 7 5 7-5" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-block footer-identity">
        <strong>Dott.ssa {siteContent.identity.name}</strong>
        <p>{siteContent.identity.role}</p>
        <p>{siteContent.identity.board}</p>
        <p>{siteContent.identity.vat}</p>
      </div>

      <div className="footer-block">
        <span className="footer-label">Verifica</span>
        <img
          className="order-logo"
          src="/ordine-psicologi-marche-logo.png"
          alt="Ordine degli Psicologi delle Marche"
          width={70}
          height={43}
        />
        <a
          href={siteContent.verification.orderSearchHref}
          target="_blank"
          rel="noreferrer"
        >
          {siteContent.verification.orderSearchLabel}
        </a>
        <p>{siteContent.verification.orderSearchNote}</p>
        <a
          href={siteContent.trustReference.primaryLink.href}
          target="_blank"
          rel="noreferrer"
        >
          GuidaPsicologi
        </a>
      </div>

      <div className="footer-block">
        <span className="footer-label">Studio</span>
        <p>{siteContent.identity.address}</p>
        <p>{siteContent.identity.city}</p>
      </div>

      <div className="footer-block footer-contact">
        <span className="footer-label">Contatti</span>
        <a className="footer-cta" href={siteContent.identity.ctaHref}>
          {siteContent.identity.ctaLabel}
        </a>
        <a href={siteContent.identity.phoneHref}>{siteContent.identity.phone}</a>
        <a href={siteContent.identity.emailHref}>{siteContent.identity.email}</a>
        <Link href="/contatti">Tutti i contatti</Link>
      </div>
    </footer>
  );
}

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="lede">{description}</p>
    </section>
  );
}

export function TextCard({ title, body }: TextCardProps) {
  return (
    <article className="feature-card">
      <h2>{title}</h2>
      <p>{body}</p>
    </article>
  );
}

export function ContactCards() {
  return (
    <div className="contact-grid">
      {siteContent.contacts.map((contact) => (
        <a
          className="contact-card"
          key={contact.label}
          href={contact.href}
          target={contact.href.startsWith("http") ? "_blank" : undefined}
          rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
        >
          <span className="contact-icon" aria-hidden="true">
            <ContactIcon icon={contact.icon} />
          </span>
          <span>{contact.label}</span>
          <strong>{contact.value}</strong>
        </a>
      ))}
    </div>
  );
}
