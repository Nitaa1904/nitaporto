import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp } from "../animations/fade";
import { DEFAULT_PROJECTS } from "../data/portfolioData";

const Projects = () => {
  const [projects, setProjects] = useState(DEFAULT_PROJECTS);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            setProjects(data);
          }
        }
      } catch (err) {
        // Fallback already pre-loaded into state for 0ms latency and 100% resilience
        console.info("Using embedded project records:", err.message);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="section projects-section" id="projects">
      <div className="section-label">
        <span>02</span>
        SELECTED WORK
      </div>

      <div className="projects-header">
        <motion.h2
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Selected projects that
          <br />
          solve <span>real problems.</span>
        </motion.h2>

        <motion.p
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          A selection of systems I've designed and engineered, focusing on
          backend architecture, secure API development, enterprise workflows, and fullstack applications.
        </motion.p>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => {
          const isNda =
            project.is_nda ||
            project.slug === "enterprise-mobility-rpo-modules";

          return (
            <motion.article
              className={`project-card ${
                project.featured ? "project-featured" : ""
              }`}
              key={project.id || project.slug}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{
                delay: index * 0.12,
              }}
              whileHover={{
                y: -6,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              {/* NUMBER */}
              <div className="project-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* MAIN PROJECT INFO */}
              <div className="project-main">
                <p className="project-category">{project.category}</p>

                <h3>{project.title}</h3>

                <p className="project-description">{project.description}</p>

                <div className="project-stack">
                  {project.tech_stack?.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>

              {/* PROJECT DETAILS */}
              <div className="project-details">
                <p className="detail-label">ROLE</p>

                <p className="project-role">{project.role}</p>

                <p className="detail-label highlight-label">
                  ENGINEERING HIGHLIGHTS
                </p>

                <ul className="project-highlights-list">
                  {project.highlights?.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                {/* ACTIONS */}
                <div className="project-actions">
                  {isNda ? (
                    <div
                      className="project-nda-tag"
                      title="Enterprise mobility module — Strictly NDA safe architecture overview"
                    >
                      <span className="nda-dot"></span>
                      Architecture & Highlights
                      <span className="nda-badge">NDA Safe</span>
                    </div>
                  ) : (
                    <Link
                      to={`/projects/${project.slug}`}
                      className="project-link"
                    >
                      View case study
                      <span>↗</span>
                    </Link>
                  )}

                  {/* LIVE PROJECT */}
                  {project.project_url && (
                    <a
                      href={project.project_url}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      Live project
                      <span>↗</span>
                    </a>
                  )}

                  {/* GITHUB */}
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      GitHub
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
