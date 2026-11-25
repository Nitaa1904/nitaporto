import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp } from "../animations/fade";
import { DEFAULT_EXPERIENCES } from "../data/portfolioData";

const Experience = () => {
  const [experiences, setExperiences] = useState(DEFAULT_EXPERIENCES);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await fetch("/api/experiences");
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            setExperiences(data);
          }
        }
      } catch (err) {
        console.info("Using embedded experience records:", err.message);
      }
    };

    fetchExperiences();
  }, []);

  const formatPeriod = (experience) => {
    const { start_date, end_date } = experience;

    if (!start_date && !end_date) {
      return "";
    }

    if (!end_date || start_date === end_date) {
      return start_date;
    }

    return `${start_date} – ${end_date}`;
  };

  return (
    <section className="section experience-section" id="experience">
      <div className="section-label">
        <span>03</span>
        EXPERIENCE
      </div>

      <div className="experience-layout">
        <div className="experience-intro">
          <motion.h2
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Where I've
            <br />
            <span>built & learned.</span>
          </motion.h2>

          <motion.p
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Engineering track record across enterprise fullstack mobility systems, backend micro-services, university laboratory platforms, and technical mentorship.
          </motion.p>
        </div>

        <div className="experience-list">
          {experiences.map((experience, index) => {
            const isCurrent =
              experience.end_date?.toUpperCase() === "PRESENT" ||
              experience.start_date?.includes("OCT 2026");

            return (
              <motion.article
                className={`experience-item ${
                  isCurrent ? "experience-item-current" : ""
                }`}
                key={experience.id || index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  x: 8,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="experience-period">
                  <span className="experience-date">
                    {formatPeriod(experience)}
                  </span>
                  {isCurrent && (
                    <div className="current-badge-wrapper">
                      <span className="current-badge">
                        <span className="current-dot" />
                        CURRENT
                      </span>
                    </div>
                  )}
                </div>

                <div className="experience-content">
                  <div className="experience-title-row">
                    <h3>{experience.position}</h3>
                  </div>

                  <p className="experience-company">{experience.company}</p>

                  <p className="experience-description">
                    {experience.description}
                  </p>

                  <div className="experience-tags">
                    {experience.tech_stack?.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
