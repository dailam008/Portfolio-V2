"use client";

import Image from "next/image";
import profilePhoto from "@/images/Dailam.png";
import styles from "./About.module.css";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function About() {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-150, 150], [-25, 25]);
  const shadowX = useTransform(x, [-150, 150], [20, -20]);

  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <div className={styles.aboutGrid}>
          <motion.div 
            className={styles.aboutImageWrapper}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ paddingTop: "60px" }}
          >
            <motion.div 
              className={styles.aboutImageBox}
              style={{ 
                x, 
                rotate,
                boxShadow: useTransform(shadowX, (val) => `${val}px 25px 50px rgba(0,0,0,0.3)`)
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.8}
              whileDrag={{ cursor: "grabbing" }}
              whileHover={{ cursor: "grab" }}
              animate={{
                rotate: [rotate.get(), rotate.get() + 1.5, rotate.get(), rotate.get() - 1.5, rotate.get()],
              }}
              transition={{
                rotate: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <Image
                src={profilePhoto}
                alt="Dailam - Developer"
                fill
                sizes="(max-width: 768px) 320px, (max-width: 1024px) 360px, 420px"
                className={styles.aboutImage}
                priority
              />
            </motion.div>
            <motion.div 
              className={styles.aboutImageDecor} 
              animate={{
                rotate: [0, 90, 180, 270, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>

          <motion.div 
            className={styles.aboutContent}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="sectionLabel">About Me</span>
            <h2 className="sectionTitle">
              Turning ideas into{" "}
              <span className="gradientText">digital reality</span>
            </h2>

            <p className={styles.aboutText}>
              I&apos;m a{" "}
              <span className={styles.aboutHighlight}>full-stack developer</span>{" "}
              with a passion for building beautiful, functional, and user-centered
              digital experiences. With 3+ years of experience, I specialize in
              creating modern web applications that solve real-world problems.
            </p>

            <p className={styles.aboutText}>
              I love working across the entire stack — from crafting pixel-perfect
              UIs to designing robust backend architectures. My goal is to write
              clean, efficient code that{" "}
              <span className={styles.aboutHighlight}>makes an impact</span>.
            </p>

            <div className={styles.aboutInfoGrid}>
              <div className={styles.aboutInfoItem}>
                <div className={styles.aboutInfoLabel}>Name</div>
                <div className={styles.aboutInfoValue}>Mochammad Dailam Al Muhibi</div>
              </div>
              <div className={styles.aboutInfoItem}>
                <div className={styles.aboutInfoLabel}>Location</div>
                <div className={styles.aboutInfoValue}>Indonesia</div>
              </div>
              <div className={styles.aboutInfoItem}>
                <div className={styles.aboutInfoLabel}>Education</div>
                <div className={styles.aboutInfoValue}>Information Systems, Telkom Univ.</div>
              </div>
              <div className={styles.aboutInfoItem}>
                <div className={styles.aboutInfoLabel}>Interests</div>
                <div className={styles.aboutInfoValue}>Web, AI, Design</div>
              </div>
            </div>

            <a href="#contact" className="btnPrimary" style={{ alignSelf: "flex-start" }}>
              <span>Let&apos;s Talk</span>
              <span>💬</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
