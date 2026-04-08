import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroBg}>
        <div className={`${styles.heroOrb} ${styles.heroOrb1}`} />
        <div className={`${styles.heroOrb} ${styles.heroOrb2}`} />
        <div className={`${styles.heroOrb} ${styles.heroOrb3}`} />
        <div className={styles.gridPattern} />
      </div>

      <div className={`container ${styles.heroContent}`}>
        <div className={`${styles.heroBadge} animFadeInUp`}>
          <span className={styles.heroBadgeDot} />
          Available for work
        </div>

        <h1 className={`${styles.heroTitle} animFadeInUp animDelay1`}>
          Hi, I&apos;m
          <span className={styles.heroName}>Dailam</span>
        </h1>

        <p className={`${styles.heroSubtitle} animFadeInUp animDelay2`}>
          A passionate full-stack developer crafting modern, beautiful, and
          performant web experiences that delight users and drive results.
        </p>

        <div className={`${styles.heroActions} animFadeInUp animDelay3`}>
          <a href="#projects" className="btnPrimary">
            <span>View My Work</span>
            <span>→</span>
          </a>
          <a href="#contact" className="btnOutline">
            Get in Touch
          </a>
        </div>

        <div className={`${styles.heroStats} animFadeInUp animDelay4`}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>3+</div>
            <div className={styles.statLabel}>Years Experience</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>20+</div>
            <div className={styles.statLabel}>Projects Completed</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>10+</div>
            <div className={styles.statLabel}>Happy Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
}
