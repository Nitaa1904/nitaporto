import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight } from "../animations/fade";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <motion.div
          className="availability"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <span className="availability-dot"></span>
          Available for opportunities
        </motion.div>

        <motion.p
          className="eyebrow"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.1 }}
        >
          SOFTWARE ENGINEER · BACKEND FOCUSED
        </motion.p>

        <motion.h1
          variants={fadeLeft}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
        >
          Building systems
          <br />
          behind the <span>interface.</span>
        </motion.h1>

        <motion.p
          variants={fadeLeft}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.35 }}
        >
          I design scalable backend systems, build secure REST APIs, and translate complex business workflows into reliable software used by real users.
        </motion.p>

        <motion.div
          className="hero-actions"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.5 }}
        >
          <a href="#projects" className="btn-primary">
            Explore my work
            <span>↘</span>
          </a>

          <a href="#contact" className="btn-secondary">
            Get in touch
          </a>
        </motion.div>

        <motion.div
          className="hero-stack"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.65 }}
        >
          <span>RUST</span>
          <span>GOLANG</span>
          <span>POSTGRESQL</span>
          <span>REST API</span>
          <span>DOCKER</span>
        </motion.div>
      </div>

      <motion.div
        className="hero-decoration"
        variants={fadeRight}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.4 }}
      >
        <div className="code-window">
          <div className="code-header">
            <div className="code-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <p>developer.json</p>
          </div>

          <div className="code-content">
            <p>
              <span className="code-key">{"{"}</span>
            </p>

            <p className="code-indent">
              <span className="code-property">"name"</span>:{" "}
              <span className="code-value">"Nita Fitrotul Mar'ah"</span>,
            </p>

            <p className="code-indent">
              <span className="code-property">"role"</span>:{" "}
              <span className="code-value">"Software Engineer"</span>,
            </p>

            <p className="code-indent">
              <span className="code-property">"focus"</span>: [
            </p>

            <p className="code-double-indent">
              <span className="code-value">"Backend"</span>,
            </p>

            <p className="code-double-indent">
              <span className="code-value">"API Design"</span>,
            </p>

            <p className="code-double-indent">
              <span className="code-value">"System Architecture"</span>
            </p>

            <p className="code-indent">],</p>

            <p className="code-indent">
              <span className="code-property">"status"</span>:{" "}
              <span className="code-green">"ready_to_build"</span>
            </p>

            <p>
              <span className="code-key">{"}"}</span>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
