import styles from "./Projects.module.css";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import Image, { StaticImageData } from "next/image";
import project1Img from "../images/project_1.png";

interface Project {
  title: string;
  desc: string;
  tags: string[];
  emoji?: string;
  gradient?: string;
  image?: StaticImageData | string;
  liveUrl?: string;
  repoUrl: string;
}

const projects: Project[] = [
  {
    title: "Biofir Health Jewelry E-Commerce App",
    desc: "A mobile application for selling Biofir health necklaces and bracelets. Built with Flutter and integrated with Firebase for real-time data management and user authentication.",
    tags: ["Flutter", "Firebase", "Dart", "Mobile App"],
    image: project1Img,
    repoUrl: "https://github.com/dailam008/Project_Perangkat_Lunak.git",
  },
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
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    <div
                      className={styles.projectImagePlaceholder}
                      style={{ background: project.gradient }}
                    >
                      {project.emoji}
                    </div>
                  )}
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
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className={`${styles.projectLink} ${styles.projectLinkPrimary}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo ↗
                      </a>
                    )}
                    <a
                      href={project.repoUrl}
                      className={`${styles.projectLink} ${styles.projectLinkSecondary}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub ↗
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
