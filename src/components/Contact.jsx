import { motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp } from "../animations/fade";

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section className="section contact-section" id="contact">
        <div className="section-label">
          <span>07</span>
          CONTACT
        </div>

        <div className="contact-layout">
          <div className="contact-heading">
            <p className="contact-eyebrow">
              HAVE A PROJECT, OPPORTUNITY, OR JUST WANT TO CONNECT?
            </p>

            <motion.h2
  variants={fadeLeft}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>
              Let's build something
              <br />
              <span>meaningful.</span>
            </motion.h2>

            <motion.p
  className="contact-description"
  variants={fadeRight}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>
              I'm open to software engineering opportunities, backend
              development projects, and conversations about building useful
              technology.
            </motion.p>
          </div>

          <div className="contact-panel">
            <p className="contact-panel-label">GET IN TOUCH</p>

            <motion.a
  href="mailto:nitafitrotul1904@gmail.com"
  className="contact-main-link"
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
  whileHover={{
    y: -4,
    transition: { duration: 0.2 },
  }}
>
              <div>
                <span>EMAIL</span>
                <strong>nitafitrotul1904@gmail.com</strong>
              </div>

              <span>↗</span>
            </motion.a>

            <motion.a
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            whileHover={{
              y: -4,
            }}
              href="https://github.com/Nitaa1904"
              target="_blank"
              rel="noreferrer"
              className="contact-main-link"
            >
              <div>
                <span>GITHUB</span>
                <strong>Nitaa1904</strong>
              </div>

              <span>↗</span>
            </motion.a>

            <motion.a
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{
              y: -4,
            }}
              href="https://linkedin.com/in/nitafitrotul"
              target="_blank"
              rel="noreferrer"
              className="contact-main-link"
            >
              <div>
                <span>LINKEDIN</span>
                <strong>Nita Fitrotul Mar'ah</strong>
              </div>

              <span>↗</span>
            </motion.a>
          </div>
        </div>
      </section>

      <motion.footer
  className="portfolio-footer"
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>
        <div className="footer-inner">
          <div className="footer-brand">
            <strong>nita.</strong>
            <span>Software Engineer · Backend Focused</span>
          </div>

          <p>© {currentYear} Nita Fitrotul Mar'ah</p>

          <a href="#top">Back to top ↑</a>
        </div>
      </motion.footer>
    </>
  );
};

export default Contact;
