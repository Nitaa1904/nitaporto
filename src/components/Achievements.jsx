import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp } from "../animations/fade";
import { DEFAULT_ACHIEVEMENTS } from "../data/portfolioData";

const Achievements = () => {
  const [achievements, setAchievements] = useState(DEFAULT_ACHIEVEMENTS);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await fetch("/api/achievements");
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            setAchievements(data);
          }
        }
      } catch (err) {
        console.info("Using embedded achievement records:", err.message);
      }
    };

    fetchAchievements();
  }, []);

  return (
    <section className="section achievements-section" id="achievements">
      <div className="section-label">
        <span>05</span>
        ACHIEVEMENTS
      </div>

      <div className="achievements-header">
        <motion.h2
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Milestones along
          <br />
          the <span>journey.</span>
        </motion.h2>

        <motion.p
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          National competitions, registered intellectual property, and certified industry programs that validate my engineering discipline and dedication.
        </motion.p>
      </div>

      <div className="achievements-list">
        {achievements.map((item, index) => (
          <motion.article
            className="achievement-item"
            key={item.id || index}
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
            <div className="achievement-year">{item.year}</div>

            <div className="achievement-type">{item.type}</div>

            <div className="achievement-content">
              <h3>{item.title}</h3>

              <p className="achievement-subtitle">{item.subtitle}</p>

              <p className="achievement-description">{item.description}</p>
            </div>

            <div className="achievement-action">
              {item.credential_url && (
                <a
                  href={item.credential_url}
                  target="_blank"
                  rel="noreferrer"
                  className="achievement-link"
                  title="View Credential / Proof"
                >
                  <span>↗</span>
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
