import { motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp } from "../animations/fade";

const About = () => {
  return (
    <section className="section about-section" id="about">
      <div className="section-label">
        <span>01</span>
        ABOUT
      </div>

      <div className="about-grid">
        {/* LEFT */}
        <div className="about-heading">
          <motion.h2
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            More than writing code.
            <br />
            I build <span>systems.</span>
          </motion.h2>
        </div>

        {/* RIGHT */}
        <motion.div
          className="about-content"
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className="about-main-text">
            I'm a Software Engineer with a strong interest in
            backend development and system architecture.
          </p>

          <p>
            My work focuses on designing REST APIs, authentication and
            authorization systems, database structures, and maintainable backend
            architectures.
          </p>

          <p>
            I enjoy understanding how a system works behind the interface —
            from business requirements and data flow to API design,
            implementation, testing, and deployment.
          </p>

          <div className="about-stats">
            <motion.div
              className="stat"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <strong>10+</strong>
              <span>Projects Delivered</span>
            </motion.div>

            <motion.div
              className="stat"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
            >
              <strong>3+</strong>
              <span>Backend Technologies</span>
            </motion.div>

            <motion.div
              className="stat"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <strong>114</strong>
              <span>API Tests Passed</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;