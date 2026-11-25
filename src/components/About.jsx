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
            I am a Software Engineering graduate from Telkom University Purwokerto (GPA 3.92/4.00) with hands-on experience in backend architecture, RESTful APIs, and fullstack web development.
          </p>

          <p>
            My engineering work focuses on designing scalable REST APIs, role-based access control (RBAC), modular monolith architectures, and enterprise fullstack web services.
          </p>

          <p>
            I prioritize understanding how high-reliability systems operate behind the interface — from business requirements and data flow to strict schema validation, concurrent query optimization, API contract testing, and deployment.
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
              <strong>3.92</strong>
              <span>GPA CUM LAUDE</span>
            </motion.div>

            <motion.div
              className="stat"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
            >
              <strong>114</strong>
              <span>API TESTS PASSED (100%)</span>
            </motion.div>

            <motion.div
              className="stat"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <strong>80+</strong>
              <span>REST APIS DOCUMENTED</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
