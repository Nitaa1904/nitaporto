import { motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp } from "../animations/fade";

const leaderships = [
  {
    period: "2024 — 2025",
    role: "Vice Chairperson",
    organization: "Software Engineering Student Association",
    description:
      "Led 7 departments in executing organizational programs and administrative digitalization initiatives. Coordinated the 8th Software Engineering Anniversary with 300+ participants nationwide.",
  },
  {
    period: "2023 — 2024",
    role: "Secretary",
    organization: "Software Engineering Student Association",
    description:
      "Produced 200+ organizational documents, prepared 7+ major event proposals, and coordinated internal communication and official administrative workflows.",
  },
  {
    period: "2024",
    role: "General Staff Mentor",
    organization: "Pusat Prestasi Satria Muda",
    description:
      "Reviewed 100+ competition proposals and mentored students preparing for national competitions including GEMASTIK and KMI Expo.",
  },
];
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
            Beyond technical work, I've learned to coordinate teams, manage
            responsibilities, and contribute to communities.
          </motion.p>
        </div>

        <div className="leadership-list">
          {leaderships.map((item, index) => (
            <motion.article
  className="leadership-item"
  key={index}
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  transition={{
    delay: index * 0.15,
  }}
  whileHover={{
    y: -6,
    transition: {
      duration: 0.25,
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
