"use client";

import styles from "./Hero.module.css";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 2.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero() {

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroBg}>
        <div className={`${styles.heroOrb} ${styles.heroOrb1}`} />
        <div className={`${styles.heroOrb} ${styles.heroOrb2}`} />
        <div className={`${styles.heroOrb} ${styles.heroOrb3}`} />
        <div className={styles.gridPattern} />
      </div>

      <motion.div
        className={`container ${styles.heroContent}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className={styles.heroBadge} variants={itemVariants}>
          <span className={styles.heroBadgeDot} />
          Available for work
        </motion.div>

        <motion.h1 className={styles.heroTitle} variants={itemVariants}>
          Hi, I&apos;m
          <span className={styles.heroName}>Dailam</span>
        </motion.h1>

        <motion.p className={styles.heroSubtitle} variants={itemVariants}>
          A passionate full-stack developer crafting modern, beautiful, and
          performant web experiences that delight users and drive results.
        </motion.p>

        <motion.div className={styles.heroActions} variants={itemVariants}>
          <a href="#projects" className="btnPrimary">
            <span>View My Work</span>
            <span>→</span>
          </a>
          <a href="#contact" className="btnOutline">
            Get in Touch
          </a>
        </motion.div>

        <motion.div className={styles.heroStats} variants={itemVariants}>
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
        </motion.div>
      </motion.div>
    </section>
  );
}
