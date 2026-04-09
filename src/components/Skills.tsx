import styles from "./Skills.module.css";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiHtml5,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiFigma,
  SiPhp,
  SiLaravel,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skills = [
  { name: "JavaScript", icon: <SiJavascript />, level: 90, color: "#F7DF1E" },
  { name: "TypeScript", icon: <SiTypescript />, level: 85, color: "#3178C6" },
  { name: "React", icon: <SiReact />, level: 90, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, level: 85, color: "#ffffff" },
  { name: "Node.js", icon: <SiNodedotjs />, level: 80, color: "#339933" },
  { name: "Python", icon: <SiPython />, level: 75, color: "#3776AB" },
  { name: "HTML/CSS", icon: <SiHtml5 />, level: 95, color: "#E34F26" },
  { name: "Tailwind", icon: <SiTailwindcss />, level: 85, color: "#06B6D4" },
  { name: "PostgreSQL", icon: <SiPostgresql />, level: 75, color: "#4169E1" },
  { name: "MongoDB", icon: <SiMongodb />, level: 70, color: "#47A248" },
  { name: "Git", icon: <SiGit />, level: 85, color: "#F05032" },
  { name: "Docker", icon: <SiDocker />, level: 70, color: "#2496ED" },
  { name: "Figma", icon: <SiFigma />, level: 75, color: "#F24E1E" },
  { name: "PHP", icon: <SiPhp />, level: 85, color: "#777BB4" },
  { name: "Laravel", icon: <SiLaravel />, level: 90, color: "#FF2D20" },
  { name: "REST API", icon: <TbApi />, level: 85, color: "#8B5CF6" },
];

export default function Skills() {
  return (
    <section className={`section ${styles.skills}`} id="skills">
      <div className="container">
        <span className="sectionLabel">Skills</span>
        <h2 className="sectionTitle">
          My <span className="gradientText">tech stack</span>
        </h2>
        <p className="sectionDesc">
          Technologies and tools I use to bring ideas to life.
        </p>

        <div className={styles.skillsGrid}>
          {skills.map((skill) => (
            <div key={skill.name} className={styles.skillCard}>
              <span className={styles.skillIcon} style={{ color: skill.color }}>
                {skill.icon}
              </span>
              <div className={styles.skillName}>{skill.name}</div>
              <div className={styles.skillBar}>
                <div
                  className={styles.skillBarFill}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
