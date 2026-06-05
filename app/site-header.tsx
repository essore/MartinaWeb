"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { siteContent } from "../content/site";

export function SiteHeader() {
  const menuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    function closeMenuOnOutsideClick(event: MouseEvent) {
      const menu = menuRef.current;

      if (!menu?.open || !(event.target instanceof Node)) {
        return;
      }

      if (!menu.contains(event.target)) {
        menu.open = false;
      }
    }

    document.addEventListener("click", closeMenuOnOutsideClick);

    return () => {
      document.removeEventListener("click", closeMenuOnOutsideClick);
    };
  }, []);

  function closeMenu() {
    const menu = menuRef.current;

    if (menu) {
      menu.open = false;
    }
  }

  return (
    <header className="site-header">
      <Link className="brand" href="/" onClick={closeMenu}>
        <img
          src="/ordine-psicologi-marche-logo.png"
          alt="Ordine degli Psicologi delle Marche"
          width={54}
          height={34}
        />
        <span>
          <strong>{siteContent.identity.name}</strong>
          <small>{siteContent.identity.role}</small>
        </span>
      </Link>

      <details className="nav-menu" ref={menuRef}>
        <summary>Menu</summary>
        <nav aria-label="Navigazione principale">
          {siteContent.navigation.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
        </nav>
      </details>
    </header>
  );
}
