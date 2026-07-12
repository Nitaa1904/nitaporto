import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp } from "../animations/fade";
import SkeletonCard from "./SkeletonCard";

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await fetch("/api/achievements");

        if (!response.ok) {
          throw new Error("Failed to fetch achievements");
        }

        const data = await response.json();
        setAchievements(data);
      } catch (err) {
        console.error("Error fetching achievements:", err);
        setError(err.message);
      } finally {
        setLoading(false);
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
          Competitions, certifications, and programs that have shaped my
          technical journey and professional growth.
        </motion.p>
      </div>

      {loading && (
        <p className="achievements-status">Loading achievements...</p>
      )}

      {error && (
        <p className="achievements-status">Unable to load achievements.</p>
      )}

      {!loading && !error && (
        <div className="achievements-list">
          {achievements.map((item, index) => (
            <motion.article
  className="achievement-item"
  key={item.id}
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  transition={{
    delay: index * 0.12,
  }}
  whileHover={{
    x: 8,
    transition: {
      duration: 0.25,
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
                    >
                      <span>↗</span>
                    </a>
                  )}
                </div>
            </motion.article>
          ))}
        </div>
      )}
    </section>
  );
};

export default Achievements;
