import { motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp } from "../animations/fade";

const techGroups = [
  {
    number: "01",
    title: "Backend",
    description:
      "Building APIs, business logic, authentication, and backend services.",
    technologies: [
      "Rust",
      "Actix Web",
      "Golang",
      "Node.js",
      "Express.js",
      "PHP",
      "Laravel",
      "REST API",
    ],
  },
  {
    number: "02",
    title: "Data & Infrastructure",
    description:
      "Working with relational databases, caching, containers, and deployment workflows.",
    technologies: [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "SeaORM",
      "Docker",
      "Docker Compose",
      "Neon",
    ],
  },
  {
    number: "03",
    title: "Frontend",
    description:
      "Building responsive interfaces and connecting applications with backend services.",
    technologies: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
      "Flutter",
    ],
  },
  {
    number: "04",
    title: "Tools & Workflow",
    description:
      "Supporting development, API testing, documentation, and version control.",
    technologies: [
      "Git",
      "GitHub",
      "Postman",
      "Swagger",
      "OpenAPI",
      "Linux",
      "Vercel",
    ],
  },
];

const TechStack = () => {
  return (
    <section className="section tech-section" id="stack">
      <div className="section-label">
        <span>04</span>
        TECH STACK
      </div>

      <div className="tech-header">
        <motion.h2
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Technologies I use to
          <br />
          build <span>reliable systems.</span>
        </motion.h2>

        <motion.p
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          My primary focus is backend engineering, supported by experience
          across databases, infrastructure, frontend development, and
          engineering workflows.
        </motion.p>
      </div>

      <div className="tech-groups">
        {techGroups.map((group, index) => (
          <motion.article
  className="tech-group"
  key={group.number}
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  transition={{
    delay: index * 0.1,
  }}
  whileHover={{
    scale: 1.03,
    transition: {
      duration: 0.25,
    },
  }}
>
            <div className="tech-group-number">{group.number}</div>

            <div className="tech-group-info">
              <h3>{group.title}</h3>
              <p>{group.description}</p>
            </div>

            <div className="tech-list">
              {group.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
