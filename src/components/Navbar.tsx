"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { useTheme } from "next-themes";
import { HiMoon, HiSun } from "react-icons/hi2";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}
        id="navbar"
      >
        <div className={styles.navInner}>
          <a href="#hero" className={styles.logo} onClick={() => scrollTo("#hero")}>
            D<span className={styles.logoAccent}>.</span>
          </a>

          <div className={styles.navLinks}>
            {navItems.map((item) => (
              <button
                key={item.href}
                className={styles.navLink}
                onClick={() => scrollTo(item.href)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className={styles.navActions}>
            <button
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {mounted && (theme === "dark" ? <HiSun /> : <HiMoon />)}
            </button>

            <button
              className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ""}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ""}`}
      >
        {navItems.map((item) => (
          <button
            key={item.href}
            className={styles.mobileLink}
            onClick={() => scrollTo(item.href)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
}
