"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Preloader.module.css";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fixed duration for a clean, non-numerical experience
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="preloader"
          className={styles.wrapper}
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            pointerEvents: "none",
            transition: { duration: 0.8, ease: "easeInOut" } 
          }}
        >
          <div className={styles.container}>
            <div className={styles.logoWrapper}>
              <motion.h1 
                className={styles.logo}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                DAILAM<span className={styles.dot}>.</span>
              </motion.h1>
              
              {/* The "Shimmer" light effect on top of text */}
              <motion.div 
                className={styles.shimmer}
                animate={{ left: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            
            <motion.div 
              className={styles.line}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
