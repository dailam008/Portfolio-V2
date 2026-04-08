import Image from "next/image";
import magangPhoto from "@/images/Foto_Magang .png";
import styles from "./Experience.module.css";
import { HiOutlineBriefcase, HiOutlineCalendar } from "react-icons/hi2";

export default function Experience() {
  return (
    <section className={`section ${styles.experience}`} id="experience">
      <div className="container">
        <span className="sectionLabel">Experience</span>
        <h2 className="sectionTitle">
          Professional <span className="gradientText">journey</span>
        </h2>
        <p className="sectionDesc">
          Building real-world skills through hands-on experience in the
          industry.
        </p>

        <div className={styles.experienceLayout}>
          {/* Image Side */}
          <div className={styles.experienceImageSide}>
            <div className={styles.experienceImageCard}>
              <Image
                src={magangPhoto}
                alt="Dailam - Internship at PT MTM, Network Operations Center"
                fill
                sizes="(max-width: 768px) 340px, (max-width: 1024px) 400px, 500px"
                className={styles.experienceImage}
                priority
              />
              <div className={styles.experienceImageOverlay} />

              {/* Floating badge on photo */}
              <div className={styles.experienceImageBadge}>
                <div className={styles.badgeIconWrapper}>
                  <HiOutlineBriefcase style={{ color: "#fff" }} />
                </div>
                <div className={styles.badgeText}>
                  <span className={styles.badgeLabel}>Division</span>
                  <span className={styles.badgeValue}>
                    Network Operations Center
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative corners */}
            <div className={styles.experienceImageDecor} />
            <div className={styles.experienceImageDecor2} />
          </div>

          {/* Content Side */}
          <div className={styles.experienceContent}>
            {/* Main Timeline Card */}
            <div className={styles.timelineCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>🖥️</div>
                <div className={styles.cardInfo}>
                  <h3 className={styles.cardRole}>NOC Intern</h3>
                  <span className={styles.cardCompany}>
                    PT Medis Telekomunikasi Mandiri (MTM)
                  </span>
                  <span className={styles.cardDivision}>
                    Network Operations Center (NOC) Division
                  </span>
                </div>
              </div>

              <div className={styles.dateRow}>
                <span className={styles.cardDate}>
                  <span className={styles.cardDateIcon}>
                    <HiOutlineCalendar />
                  </span>
                  Feb 2026 — Aug 2026
                </span>
                <span className={styles.statusBadge}>
                  <span className={styles.statusDot} />
                  Ongoing
                </span>
              </div>

              <p className={styles.cardDescription} style={{ textAlign: "justify" }}>
                Completed an internship at the Network Operations Center (NOC) division, 
                responsible for monitoring SD-WAN network infrastructure, handling network 
                disruptions, and ensuring 24/7 network service availability for corporate clients.
              </p>

              <div className={styles.cardResponsibilities}>
                <div className={styles.responsibilityItem}>
                  <span className={styles.responsibilityIcon}>✓</span>
                  <span style={{ textAlign: "justify" }}>
                    Monitored SD-WAN networks in real-time using Tools-Q Internal 
                    to ensure optimal uptime and performance.
                  </span>
                </div>
                <div className={styles.responsibilityItem}>
                  <span className={styles.responsibilityIcon}>✓</span>
                  <span style={{ textAlign: "justify" }}>
                    Performed network troubleshooting and efficiently escalated 
                    tickets to the relevant technical teams.
                  </span>
                </div>
                <div className={styles.responsibilityItem}>
                  <span className={styles.responsibilityIcon}>✓</span>
                  <span style={{ textAlign: "justify" }}>
                    Created daily reports and analyzed network performance 
                    for evaluation and continuous improvement.
                  </span>
                </div>
                <div className={styles.responsibilityItem}>
                  <span className={styles.responsibilityIcon}>✓</span>
                  <span style={{ textAlign: "justify" }}>
                    Collaborated with network engineers to perform maintenance 
                    and network device configurations.
                  </span>
                </div>
              </div>

              <div className={styles.cardTags}>
                <span className={styles.cardTag}>SD-WAN Monitoring</span>
                <span className={styles.cardTag}>Troubleshooting</span>
                <span className={styles.cardTag}>Tools-Q Internal</span>
                <span className={styles.cardTag}>Ticketing System</span>
                <span className={styles.cardTag}>Report Analysis</span>
                <span className={styles.cardTag}>Team Collaboration</span>
              </div>
            </div>

            {/* Stats Row */}
            <div className={styles.statsRow}>
              <div className={styles.statItem}>
                <div className={styles.statValue}>6</div>
                <div className={styles.statLabel}>Months</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statValue}>NOC</div>
                <div className={styles.statLabel}>Division</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statValue}>24/7</div>
                <div className={styles.statLabel}>Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
