"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Preloader.module.css";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const letters = "DAILAM".split("");

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        const diff = Math.random() * 20;
        return Math.min(prev + diff, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  return (
    <AnimatePresence>
      {loading && (
        <div className={styles.wrapper}>
          {/* Top Panel with Spring Physics */}
          <motion.div
            className={styles.panel}
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ 
              type: "spring",
              stiffness: 40,
              damping: 20,
              mass: 1,
              delay: 0.2 
            }}
          />
          {/* Bottom Panel */}
          <motion.div
            className={styles.panelBottom}
            initial={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ 
              type: "spring",
              stiffness: 40,
              damping: 20,
              mass: 1,
              delay: 0.2 
            }}
          />

          <motion.div
            className={styles.content}
            exit={{ opacity: 0, scale: 0.96, y: -20 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          >
            <div className={styles.logoWrapper}>
              <motion.div 
                className={styles.logoContainer}
                animate={{ 
                  scale: [1, 1.02, 1],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                {letters.map((letter, i) => (
                  <motion.span
                    key={i}
                    className={styles.letter}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      delay: i * 0.08
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
                <span className={styles.dot}>.</span>
              </motion.div>
              <motion.div 
                className={styles.shimmer}
                animate={{ x: ["-150%", "250%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </div>
            
            <motion.div 
              className={styles.loadingText}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              System Ready
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
