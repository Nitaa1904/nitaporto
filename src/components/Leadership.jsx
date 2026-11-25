import { motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp } from "../animations/fade";
import { LEADERSHIPS } from "../data/portfolioData";

const Leadership = () => {
  return (
    <section className="section leadership-section" id="leadership">
      <div className="section-label">
        <span>06</span>
        LEADERSHIP
      </div>

      <div className="leadership-grid">
        <div className="leadership-heading">
          <motion.h2
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Building software,
            <br />
            leading <span>people.</span>
          </motion.h2>

          <motion.p
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Beyond technical implementation, I coordinate cross-functional teams, direct departmental roadmaps, and mentor aspiring software engineers.
          </motion.p>
        </div>

        <div className="leadership-list">
          {LEADERSHIPS.map((item, index) => (
            <motion.article
              className="leadership-item"
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{
                delay: index * 0.12,
              }}
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <div className="leadership-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div>
                <p className="leadership-period">{item.period}</p>

                <h3>{item.role}</h3>

                <p className="leadership-org">{item.organization}</p>

                <p className="leadership-description">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
