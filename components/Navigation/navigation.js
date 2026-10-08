"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";

import styles from "./navigation.module.css";

const LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "Notre histoire", href: "#histoire" },
  { label: "La carte", href: "#carte" },
  { label: "Galerie", href: "#galerie" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Fermer le menu mobile avec la touche Échap
  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e) => e.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <Link
          href="#accueil"
          className={styles.logo}
          aria-label="coffeBABY - Retour à l'accueil"
          onClick={closeMenu}
        >
          <Image
            src="/logo.svg"
            alt="coffeBABY"
            width={160} /* ⚠️ remplace par le vrai ratio de ton SVG */
            height={56}
            priority
            className={styles.logoImage}
          />
        </Link>

        <nav className={styles.desktopNav} aria-label="Navigation principale">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link href="#contact" className={styles.orderButton}>
            Commander
            <FiArrowRight />
          </Link>

          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div id="mobile-menu" className={styles.mobileMenu}>
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}

          <Link
            href="#contact"
            className={styles.mobileOrder}
            onClick={closeMenu}
          >
            Commander
            <FiArrowRight />
          </Link>
        </div>
      )}
    </header>
  );
}