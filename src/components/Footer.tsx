"use client";

import styles from "./Footer.module.css";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

const socials = [
  { label: "GitHub", icon: <FaGithub />, url: "https://github.com/dailam008" },
  { label: "LinkedIn", icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/mochamad-dailam/" },
  { label: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/dailammhb/" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          <div className={styles.footerLeft}>
            <div className={styles.footerLogo}>
              D<span className={styles.footerLogoAccent}>.</span>
            </div>
            <p className={styles.footerCopy}>
              © {new Date().getFullYear()} Dailam. All rights reserved.
            </p>
          </div>

          <div className={styles.footerSocials}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                className={styles.footerSocialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>

          <button
            className={styles.backToTop}
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
