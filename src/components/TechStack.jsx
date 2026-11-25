import { motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp } from "../animations/fade";
import { TECH_GROUPS } from "../data/portfolioData";

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
          My core expertise centers on backend architecture and secure REST APIs, expanded with modern fullstack web frameworks, scalable databases, and enterprise testing tools.
        </motion.p>
      </div>

      <div className="tech-groups">
        {TECH_GROUPS.map((group, index) => (
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
              y: -4,
              borderColor: "#3b82f6",
              transition: {
                duration: 0.2,
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
