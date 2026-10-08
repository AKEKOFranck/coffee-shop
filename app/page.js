import Link from "next/link";
import Image from "next/image";

import { FiArrowRight, FiArrowDown, FiCoffee, FiHeart, FiMapPin, FiClock } from "react-icons/fi";
import { GiCroissant, GiCakeSlice, GiCoffeeCup } from "react-icons/gi";
import { FaWhatsapp } from "react-icons/fa6";

import styles from "./page.module.css";

const categories = [
  { title: "Coffee", text: "Des cafés soigneusement préparés pour accompagner chaque moment.", icon: GiCoffeeCup },
  { title: "Pâtisseries", text: "Des créations gourmandes, fraîches et préparées avec passion.", icon: GiCroissant },
  { title: "Desserts", text: "Une touche sucrée pour terminer votre expérience en beauté.", icon: GiCakeSlice },
];

const products = [
  { number: "01", name: "Cappuccino", description: "Espresso, lait chaud et mousse délicate.", price: "2 500 FCFA", image: "/FondMain (2).png" },
  { number: "02", name: "Croissant", description: "Feuilletage doré, léger et généreusement beurré.", price: "1 500 FCFA", image: "/FondMain (3).png" },
  { number: "03", name: "Sweet Moment", description: "Une création gourmande imaginée par coffeBABY.", price: "3 500 FCFA", image: "/FondMain (1).png" },
];

const benefits = [
  { icon: FiCoffee, title: "Un café d'exception", text: "Des boissons pensées pour les vrais amateurs de café." },
  { icon: GiCroissant, title: "Des créations fraîches", text: "Une sélection de pâtisseries pour accompagner vos envies." },
  { icon: FiHeart, title: "Une expérience unique", text: "Un univers chaleureux où chaque détail compte." },
];

const gallery = [
  { image: "/FondMain (1).png", title: "Coffee moment" },
  { image: "/FondMain (3).png", title: "Sweet break" },
  { image: "/FondMain (2).png", title: "Good moments" },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section id="accueil" className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContent}>
          <div className={styles.heroSmall}>Coffee • Pastries • Good moments</div>

          <h1 className={styles.heroTitle}>
            Your daily
            <br />
            <em>sweet moment.</em>
          </h1>

          <p className={styles.heroDescription}>
            Bienvenue chez coffeBABY, un espace où le café, les pâtisseries et
            les bons moments se rencontrent.
          </p>

          <div className={styles.heroActions}>
            <Link href="#carte" className={styles.primaryButton}>
              Découvrir la carte
              <FiArrowRight />
            </Link>
            <Link href="#histoire" className={styles.secondaryButton}>
              Notre histoire
            </Link>
          </div>
        </div>

        <div className={styles.heroBottom}>
          <span>Abidjan, Côte d&apos;Ivoire</span>
          <Link href="#histoire" aria-label="Descendre">
            <FiArrowDown />
          </Link>
          <span>Est. 2026</span>
        </div>
      </section>

      {/* INTRO */}
      <section className={`${styles.intro} section`}>
        <div className="container">
          <div className={styles.introGrid}>
            <div>
              <span className="sectionLabel">Bienvenue chez coffeBABY</span>
              <h2 className="sectionTitle">
                More than coffee.
                <br />
                <em>A feeling.</em>
              </h2>
            </div>

            <div className={styles.introText}>
              <p>
                Nous croyons qu&apos;un bon café est bien plus qu&apos;une simple
                boisson. C&apos;est une pause, une rencontre, une conversation ou
                simplement quelques minutes pour soi.
              </p>
              <Link href="#carte" className={styles.textLink}>
                Explorer notre univers
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className={styles.categories}>
        <div className="container">
          <div className={styles.categoriesHeader}>
            <div>
              <span className="sectionLabel">Notre univers</span>
              <h2 className="sectionTitle">
                Made for your
                <br />
                <em>good moments.</em>
              </h2>
            </div>
            <p>
              Du premier café du matin à la petite douceur de l&apos;après-midi,
              coffeBABY accompagne vos journées.
            </p>
          </div>

          <div className={styles.categoryGrid}>
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <article key={category.title} className={styles.categoryCard}>
                  <div className={styles.categoryIcon}>
                    <Icon />
                  </div>
                  <span className={styles.categoryNumber}>0{index + 1}</span>
                  <h3>{category.title}</h3>
                  <p>{category.text}</p>
                  <Link href="#carte">
                    Découvrir
                    <FiArrowRight />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HISTOIRE */}
      <section id="histoire" className={`${styles.about} section`}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutVisual}>
              <Image
                src="/FondMain (1).png"
                alt="Univers coffeBABY"
                fill
                sizes="(max-width: 1000px) 100vw, 50vw"
              />
              <div className={styles.aboutBadge}>
                <span>coffe</span>
                <strong>BABY</strong>
              </div>
            </div>

            <div className={styles.aboutContent}>
              <span className="sectionLabel">Notre histoire</span>
              <h2 className="sectionTitle">
                Simple things,
                <br />
                <em>beautifully made.</em>
              </h2>
              <p>
                coffeBABY est né d&apos;une envie simple : créer un endroit
                chaleureux où l&apos;on peut ralentir, savourer un excellent café
                et profiter d&apos;une pâtisserie soigneusement préparée.
              </p>
              <p>
                Notre univers mélange élégance, douceur et convivialité pour
                créer une expérience différente à chaque visite.
              </p>
              <Link href="#contact" className={styles.darkButton}>
                Venez nous rencontrer
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CARTE */}
      <section id="carte" className={`${styles.menu} section`}>
        <div className="container">
          <div className={styles.menuHeader}>
            <div>
              <span className="sectionLabel">La carte</span>
              <h2 className="sectionTitle">
                Little treats,
                <br />
                <em>big happiness.</em>
              </h2>
            </div>
            <Link href="#contact" className={styles.textLink}>
              Voir toute la carte
              <FiArrowRight />
            </Link>
          </div>

          <div className={styles.productGrid}>
            {products.map((product) => (
              <article key={product.number} className={styles.productCard}>
                <div className={styles.productImage}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  />
                  <span>{product.number}</span>
                </div>

                <div className={styles.productInfo}>
                  <div>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                  </div>
                  <strong>{product.price}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className={styles.benefits}>
        <div className="container">
          <div className={styles.benefitGrid}>
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <article key={benefit.title} className={styles.benefit}>
                  <Icon />
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section id="galerie" className={`${styles.gallery} section`}>
        <div className="container">
          <div className={styles.galleryHeader}>
            <span className="sectionLabel">coffeBABY moments</span>
            <h2 className="sectionTitle">
              Good coffee.
              <br />
              <em>Good company.</em>
            </h2>
          </div>

          <div className={styles.galleryGrid}>
            {gallery.map((item, index) => (
              <div
                key={item.title}
                className={`${styles.galleryItem} ${index === 1 ? styles.galleryLarge : ""}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 700px) 100vw, 33vw"
                />
                <div className={styles.galleryOverlay}>{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={styles.contact}>
        <div className="container">
          <div className={styles.contactBox}>
            <div>
              <span className={styles.contactLabel}>Venez nous voir</span>
              <h2>
                Your table
                <br />
                <em>is waiting.</em>
              </h2>
            </div>

            <div className={styles.contactInfo}>
              <div>
                <FiMapPin />
                <div>
                  <strong>Abidjan</strong>
                  <span>Côte d&apos;Ivoire</span>
                </div>
              </div>

              <div>
                <FiClock />
                <div>
                  <strong>Ouvert</strong>
                  <span>Lun — Sam · 08h — 20h</span>
                </div>
              </div>

              <a
                href="https://wa.me/2250000000000"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappButton}
              >
                <FaWhatsapp />
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}