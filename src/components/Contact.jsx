import { useState } from "react";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp } from "../animations/fade";
import { DEVELOPER_PROFILE } from "../data/portfolioData";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(DEVELOPER_PROFILE.contact.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2200);
  };

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
              I am open to software engineering opportunities, fullstack & backend roles, and technical discussions. Recruiters and engineering teams can reach out directly or review my credentials.
            </motion.p>
          </div>

          <div className="contact-panel">
            <p className="contact-panel-label">DIRECT CHANNELS & PROFILES</p>

            {/* EMAIL ROW WITH QUICK COPY BUTTON */}
            <motion.div
              className="contact-main-link contact-email-row"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <a
                href={`mailto:${DEVELOPER_PROFILE.contact.email}`}
                className="contact-email-left"
              >
                <span>PRIMARY EMAIL</span>
                <strong>{DEVELOPER_PROFILE.contact.email}</strong>
              </a>

              <div className="contact-actions-right">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`btn-copy-email ${copied ? "copied" : ""}`}
                  aria-label="Copy email address"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <span className="copy-icon">✓</span>
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <span className="copy-icon">📋</span>
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${DEVELOPER_PROFILE.contact.email}`}
                  className="contact-icon-arrow"
                  title="Open mail client"
                >
                  ↗
                </a>
              </div>
            </motion.div>

            {/* DOWNLOAD CV LINK */}
            <motion.a
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              whileHover={{
                y: -3,
              }}
              href={DEVELOPER_PROFILE.contact.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-main-link contact-cv-card"
            >
              <div>
                <span>CURRICULUM VITAE</span>
                <strong>Download CV (Latest PDF)</strong>
              </div>

              <div className="contact-actions-right">
                <span className="cv-badge">PDF</span>
                <span className="contact-icon-arrow">↗</span>
              </div>
            </motion.a>

            {/* GITHUB */}
            <motion.a
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              whileHover={{
                y: -3,
              }}
              href={DEVELOPER_PROFILE.contact.github}
              target="_blank"
              rel="noreferrer"
              className="contact-main-link"
            >
              <div>
                <span>GITHUB REPOSITORY</span>
                <strong>github.com/Nitaa1904</strong>
              </div>

              <span className="contact-icon-arrow">↗</span>
            </motion.a>

            {/* LINKEDIN */}
            <motion.a
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              whileHover={{
                y: -3,
              }}
              href={DEVELOPER_PROFILE.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-main-link"
            >
              <div>
                <span>LINKEDIN NETWORK</span>
                <strong>linkedin.com/in/nitafitrotul</strong>
              </div>

              <span className="contact-icon-arrow">↗</span>
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
            <span>Software Engineer · Backend & Fullstack Focused</span>
          </div>

          <p>© {currentYear} Nita Fitrotul Mar'ah • All rights reserved</p>

          <a href="#home">Back to top ↑</a>
        </div>
      </motion.footer>
    </>
  );
};

export default Contact;
