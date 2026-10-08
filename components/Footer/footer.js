import Link from "next/link";
import Image from "next/image";

import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";

import styles from "./footer.module.css";

const links = [
  { label: "Accueil", href: "#accueil" },
  { label: "Notre histoire", href: "#histoire" },
  { label: "La carte", href: "#carte" },
  { label: "Galerie", href: "#galerie" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com/", icon: FaInstagram },
  { label: "TikTok", href: "https://tiktok.com/", icon: FaTiktok },
  { label: "WhatsApp", href: "https://wa.me/2250000000000", icon: FaWhatsapp },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={`${styles.chip} ${styles.chip1}`} />
      <span className={`${styles.chip} ${styles.chip2}`} />
      <span className={`${styles.chip} ${styles.chip3}`} />
      <span className={`${styles.chip} ${styles.chip4}`} />

      <div className={styles.inner}>
        <Link href="#accueil" className={styles.logo} aria-label="coffeBABY">
          <Image src="/logoCook.svg" alt="coffeBABY" width={140} height={60} />
        </Link>

        <p className={styles.tagline}>
          Coffee, pastries
          <br />
          &amp; good moments.
        </p>

        <nav className={styles.links}>
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.socials}>
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>

        <div className={styles.bottom}>
          <span>© 2026 coffeBABY</span>
          <span>Abidjan, Côte d&apos;Ivoire</span>
        </div>
      </div>
    </footer>
  );
}