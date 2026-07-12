import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp } from "../animations/fade";
import SkeletonCard from "./SkeletonCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await response.json();
        setProjects(data);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError(err.message);
      } finally {
        setLoading(false);
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
          A selection of systems I've designed and developed, focusing on
          backend architecture, API development, and real-world workflows.
        </motion.p>
      </div>

      {loading && <p className="projects-status">Loading projects...</p>}

      {error && <p className="projects-status">Unable to load projects.</p>}

      {!loading && !error && (
        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.article
              className={`project-card ${
                project.featured ? "project-featured" : ""
              }`}
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.25,
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

                <ul>
                  {project.highlights?.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                {/* ACTIONS */}
                <div className="project-actions">
                  {/* INTERNAL CASE STUDY */}
                  <Link
                    to={`/projects/${project.slug}`}
                    className="project-link"
                  >
                    View case study
                    <span>↗</span>
                  </Link>

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
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
