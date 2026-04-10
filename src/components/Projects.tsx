"use client";

import { useState } from "react";
import styles from "./Projects.module.css";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import Image, { StaticImageData } from "next/image";
import project1Img from "../images/project_1.png";
import project2Img from "../images/project_2.png";
import project3Img from "../images/project_3.png";
import project4Img from "../images/project_4.png";
import project5Img from "../images/project_5.png";

interface Project {
  title: string;
  desc: string;
  tags: string[];
  emoji?: string;
  gradient?: string;
  image?: StaticImageData | string;
  liveUrl?: string;
  repoUrl: string;
  category: string;
}

const projects: Project[] = [
  {
    title: "Biofir Health Jewelry E-Commerce App",
    desc: "A mobile application for selling Biofir health necklaces and bracelets. Built with Flutter and integrated with Firebase for real-time data management and user authentication.",
    tags: ["Flutter", "Firebase", "Dart", "Mobile App"],
    category: "Mobile",
    image: project1Img,
    repoUrl: "https://github.com/dailam008/Project_Perangkat_Lunak.git",
  },
  {
    title: "AI Smart Money Guardian",
    desc: "An intelligent, full-stack personal finance tracker and budget management platform. Features include interactive dashboards and smart categorization.",
    tags: ["Next.js", "TypeScript", "Python", "FastAPI", "Tailwind CSS"],
    category: "Web App",
    image: project2Img,
    repoUrl: "https://github.com/dailam008/AI_Smart_Money_Guardian",
  },
  {
    title: "Git Helper CLI",
    desc: "A beautiful, interactive CLI tool that automates daily Git operations. Features include one-step quick push, interactive branching, merging, and stash management.",
    tags: ["Node.js", "Inquirer.js", "CLI", "Automation"],
    category: "CLI/Tools",
    image: project3Img,
    repoUrl: "https://github.com/dailam008/git-helper.git",
  },
  {
    title: "PlayStation Rental Management System",
    desc: "A comprehensive web application for managing PlayStation rental businesses. Features include active session tracking with Start/Stop controls, PS unit management, and customizable billing timers.",
    tags: ["Laravel 12", "PHP 8.2", "Tailwind CSS v4", "Vite"],
    category: "Web App",
    image: project4Img,
    repoUrl: "https://github.com/dailam008/DYS_Project.git",
  },
  {
    title: "RapidConvert — All-in-One File Converter",
    desc: "A 100% client-side web application offering 15+ productivity tools including PDF conversion, image editing, compression, and OCR, processing everything locally for maximum privacy.",
    tags: ["Vanilla JS", "Vite", "PDF.js", "Tesseract.js"],
    category: "Web App",
    image: project5Img,
    repoUrl: "https://github.com/dailam008/rapidconvert.git",
  },
];

export default function Projects() {
  const categories = ["All", "Web App", "Mobile", "CLI/Tools"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter((project) => 
    activeCategory === "All" || project.category === activeCategory
  );

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

        <div className={styles.filterContainer}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.filterTab} ${activeCategory === category ? styles.activeTab : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredProjects.length > 0 ? (
          <div className={styles.projectsGrid}>
            {filteredProjects.map((project) => (
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
