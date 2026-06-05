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

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <span>{siteContent.identity.name}</span>
        <small>{siteContent.identity.role}</small>
      </Link>

      <details className="nav-menu">
        <summary>Menu</summary>
        <nav aria-label="Navigazione principale">
          {siteContent.navigation.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </details>
    </header>
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
          <span>{contact.label}</span>
          <strong>{contact.value}</strong>
        </a>
      ))}
    </div>
  );
}
