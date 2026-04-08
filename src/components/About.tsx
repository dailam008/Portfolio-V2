import Image from "next/image";
import profilePhoto from "@/images/Dailam.png";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <div className={styles.aboutGrid}>
          <div className={styles.aboutImageWrapper}>
            <div className={styles.aboutImageBox}>
              <Image
                src={profilePhoto}
                alt="Dailam - Developer"
                fill
                sizes="(max-width: 768px) 320px, (max-width: 1024px) 360px, 420px"
                className={styles.aboutImage}
                priority
              />
            </div>
            <div className={styles.aboutImageDecor} />
          </div>

          <div className={styles.aboutContent}>
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
          </div>
        </div>
      </div>
    </section>
  );
}
