"use client";

import { useState } from "react";
import styles from "./Contact.module.css";
import { HiOutlineEnvelope, HiOutlineMapPin, HiOutlineBriefcase } from "react-icons/hi2";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "6289618418569";
    const waText = `Hi Dailam, I'm reaching out from your portfolio!%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${waText}`, "_blank");
  };
  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className="container">
        <span className="sectionLabel">Contact</span>
        <h2 className="sectionTitle">
          Let&apos;s <span className="gradientText">work together</span>
        </h2>
        <p className="sectionDesc">
          Have a project in mind or want to discuss an opportunity? I&apos;d
          love to hear from you.
        </p>

        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <p className={styles.contactInfoText}>
              I&apos;m always open to new opportunities and interesting
              projects. Whether you have a question or just want to say hi,
              feel free to reach out!
            </p>

            <div className={styles.contactCards}>
              <div className={styles.contactCard}>
                <div className={styles.contactCardIcon}>
                  <HiOutlineEnvelope />
                </div>
                <div>
                  <div className={styles.contactCardLabel}>Email</div>
                  <div className={styles.contactCardValue}>
                    daimoh442@gmail.com
                  </div>
                </div>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.contactCardIcon}>
                  <HiOutlineMapPin />
                </div>
                <div>
                  <div className={styles.contactCardLabel}>Location</div>
                  <div className={styles.contactCardValue}>Indonesia</div>
                </div>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.contactCardIcon}>
                  <HiOutlineBriefcase />
                </div>
                <div>
                  <div className={styles.contactCardLabel}>Status</div>
                  <div className={styles.contactCardValue}>
                    Telkom University Student | Information Systems
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form className={styles.contactForm} onSubmit={handleWhatsAppSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className={styles.formInput}
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={styles.formInput}
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                className={styles.formInput}
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className={styles.formTextarea}
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btnPrimary" style={{ alignSelf: "flex-start" }}>
              <span>Send Message</span>
              <span>✉️</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
