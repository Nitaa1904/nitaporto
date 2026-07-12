import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp } from "../animations/fade";
import SkeletonCard from "./SkeletonCard";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await fetch("/api/experiences");

        if (!response.ok) {
          throw new Error("Failed to fetch experiences");
        }

        const data = await response.json();
        setExperiences(data);
      } catch (err) {
        console.error("Error fetching experiences:", err);
        setError(err.message);
      } finally {
        setLoading(false);
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

    return `${start_date} — ${end_date}`;
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
            Experience across backend development, web engineering, product
            design, and technical mentoring.
          </motion.p>
        </div>

        <div className="experience-list">
          {loading && (
            <p className="experience-status">Loading experiences...</p>
          )}

          {error && (
            <p className="experience-status">Unable to load experiences.</p>
          )}

          {!loading &&
            !error &&
            experiences.map((experience, index) => (
              <motion.article
  className="experience-item"
  key={experience.id}
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  transition={{
    delay: index * 0.15,
  }}
  whileHover={{
    x: 10,
    transition: {
      duration: 0.25,
    },
  }}
>
                <div className="experience-period">
                  {formatPeriod(experience)}
                </div>

                <div className="experience-content">
                  <h3>{experience.position}</h3>

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
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
