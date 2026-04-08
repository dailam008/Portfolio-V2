import styles from "./Projects.module.css";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

interface Project {
  title: string;
  desc: string;
  tags: string[];
  emoji: string;
  gradient: string;
  liveUrl: string;
  repoUrl: string;
}

// Tambahkan project kamu di sini
const projects: Project[] = [
  // Contoh format:
  // {
  //   title: "Nama Project",
  //   desc: "Deskripsi singkat project kamu.",
  //   tags: ["React", "Next.js", "TypeScript"],
  //   emoji: "🚀",
  //   gradient: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.2))",
  //   liveUrl: "https://project-demo.com",
  //   repoUrl: "https://github.com/username/project",
  // },
];

export default function Projects() {
  return (
    <section className={`section ${styles.projects}`} id="projects">
      <div className="container">
        <span className="sectionLabel">Projects</span>
        <h2 className="sectionTitle">
          Featured <span className="gradientText">works</span>
        </h2>
        <p className="sectionDesc">
          A selection of projects that showcase my skills and passion for
          building great products.
        </p>

        {projects.length > 0 ? (
          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <div key={project.title} className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <div
                    className={styles.projectImagePlaceholder}
                    style={{ background: project.gradient }}
                  >
                    {project.emoji}
                  </div>
                </div>

                <div className={styles.projectBody}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.desc}</p>

                  <div className={styles.projectTags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.projectTag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className={styles.projectLinks}>
                    <a
                      href={project.liveUrl}
                      className={`${styles.projectLink} ${styles.projectLinkPrimary}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo ↗
                    </a>
                    <a
                      href={project.repoUrl}
                      className={`${styles.projectLink} ${styles.projectLinkSecondary}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <span className={styles.emptyIcon}><HiOutlineRocketLaunch /></span>
            <p className={styles.emptyText}>
              Projects coming soon — stay tuned!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
