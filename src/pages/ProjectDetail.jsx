import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { slug } = useParams();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`/api/projects/${slug}`);

        if (!response.ok) {
          throw new Error("Project not found");
        }

        const data = await response.json();
        setProject(data);
      } catch (err) {
        console.error("Failed to fetch project:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  if (loading) {
    return (
      <main className="case-study-page">
        <div className="case-study-container">
          <p className="case-status">Loading case study...</p>
        </div>
      </main>
    );
  }

  if (error || !project) {
    return (
      <main className="case-study-page">
        <div className="case-study-container">
          <p className="case-status">Project not found.</p>

          <Link to="/" className="case-back">
            ← Back to portfolio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="case-study-page">
      <div className="case-study-container">
        <nav className="case-nav">
          <Link to="/" className="case-logo">
            nita.
          </Link>

          <Link to="/#projects" className="case-back">
            ← Back to portfolio
          </Link>
        </nav>

        <header className="case-hero">
          <div className="section-label">
            <span>CASE STUDY</span>
            BACKEND ENGINEERING
          </div>

          <div className="case-hero-grid">
            <div>
              <p className="case-category">{project.category}</p>

              <h1>{project.title}</h1>

              <p className="case-description">{project.description}</p>
            </div>

            <div className="case-meta">
              <div className="case-meta-item">
                <span>ROLE</span>
                <p>{project.role}</p>
              </div>

              <div className="case-meta-item">
                <span>FOCUS</span>
                <p>Backend Architecture & API Development</p>
              </div>

              <div className="case-meta-item">
                <span>PROJECT TYPE</span>
                <p>Software Engineering Project</p>
              </div>
            </div>
          </div>
        </header>

        <section className="case-section">
          <div className="case-section-number">01</div>

          <div className="case-section-title">
            <p>TECHNICAL STACK</p>

            <h2>
              Tools behind the
              <br />
              <span>system.</span>
            </h2>
          </div>

          <div className="case-content">
            <div className="case-stack">
              {project.tech_stack?.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="case-section-number">02</div>

          <div className="case-section-title">
            <p>ENGINEERING</p>

            <h2>
              Key technical
              <br />
              <span>highlights.</span>
            </h2>
          </div>

          <div className="case-content">
            <div className="case-highlights">
              {project.highlights?.map((highlight, index) => (
                <div className="case-highlight-item" key={highlight}>
                  <span>{String(index + 1).padStart(2, "0")}</span>

                  <p>{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {project.problem && (
          <section className="case-study-section">
            <div className="case-study-number">03</div>

            <div className="case-study-heading">
              <p className="case-study-label">THE CHALLENGE</p>

              <h2>
                Understanding the
                <br />
                <span>problem.</span>
              </h2>
            </div>

            <div className="case-study-content">
              <p>{project.problem}</p>
            </div>
          </section>
        )}

        {project.problem && (
          <section className="case-study-section">
            <div className="case-study-number">04</div>

            <div className="case-study-heading">
              <p className="case-study-label">ENGINEERING SOLUTION</p>

              <h2>
                Designing a scalable
                <br />
                <span>solution.</span>
              </h2>
            </div>

            <div className="case-study-content">
              <p>{project.solution}</p>
            </div>
          </section>
        )}

        {project.key_features?.length > 0 && (
          <section className="case-study-section">
            <div className="case-study-number">05</div>

            <div className="case-study-heading">
              <p className="case-study-label">MAIN FEATURES</p>

              <h2>
                Designed around the
                <br />
                <span>user journey.</span>
              </h2>
            </div>

            <div className="case-study-content">
              <div className="case-highlights">
                {project.key_features.map((feature, index) => (
                  <div className="case-highlight-item" key={feature}>
                    <span>{String(index + 1).padStart(2, "0")}</span>

                    <p>{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {project.project_context && (
          <section className="case-study-section">
            <div className="case-study-number">06</div>

            <div className="case-study-heading">
              <p className="case-study-label">PROJECT CONTEXT</p>

              <h2>
                From development
                <br />
                to <span>exhibition.</span>
              </h2>
            </div>

            <div className="case-study-content">
              <p>{project.project_context}</p>
            </div>
          </section>
        )}

        {project.problem && (
          <section className="case-study-section architecture-section">
            <div className="case-study-number">05</div>

            <div className="case-study-heading">
              <p className="case-study-label">SYSTEM ARCHITECTURE</p>

              <h2>
                Built with a clear
                <br />
                <span>architecture.</span>
              </h2>
            </div>

            <div className="case-study-content">
              <p>{project.architecture}</p>

              {project.slug === "sicantik-bangsa-v2" && (
                <div className="architecture-flow">
                  <div className="architecture-item">
                    <span>01</span>
                    <strong>Client</strong>
                    <small>Mobile & Web</small>
                  </div>

                  <div className="architecture-arrow">→</div>

                  <div className="architecture-item">
                    <span>02</span>
                    <strong>REST API</strong>
                    <small>Rust · Actix Web</small>
                  </div>

                  <div className="architecture-arrow">→</div>

                  <div className="architecture-item">
                    <span>03</span>
                    <strong>Data Layer</strong>
                    <small>SeaORM</small>
                  </div>

                  <div className="architecture-arrow">→</div>

                  <div className="architecture-item">
                    <span>04</span>
                    <strong>Storage</strong>
                    <small>PostgreSQL · Redis</small>
                  </div>
                </div>
              )}

              {project.slug === "village-cooperative-system" && (
                <div className="architecture-flow">
                  <div className="architecture-item">
                    <span>01</span>
                    <strong>Client</strong>
                    <small>HTTP Request</small>
                  </div>

                  <div className="architecture-arrow">→</div>

                  <div className="architecture-item">
                    <span>02</span>
                    <strong>REST API</strong>
                    <small>Golang</small>
                  </div>

                  <div className="architecture-arrow">→</div>

                  <div className="architecture-item">
                    <span>03</span>
                    <strong>Middleware</strong>
                    <small>JWT · Role Access</small>
                  </div>

                  <div className="architecture-arrow">→</div>

                  <div className="architecture-item">
                    <span>04</span>
                    <strong>Business Logic</strong>
                    <small>Deposit · Loan Rules</small>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {project.problem && (
          <section className="case-study-section security-section">
            <div className="case-study-number">06</div>

            <div className="case-study-heading">
              <p className="case-study-label">SECURITY & AUTHORIZATION</p>

              <h2>
                Access controlled
                <br />
                <span>at every layer.</span>
              </h2>
            </div>

            <div className="case-study-content">
              <p>{project.security}</p>

              {project.slug === "sicantik-bangsa-v2" && (
                <div className="security-flow">
                  <div className="security-step">
                    <span>01</span>
                    <div>
                      <strong>Authentication</strong>
                      <small>User login & credential verification</small>
                    </div>
                  </div>

                  <div className="security-line" />

                  <div className="security-step">
                    <span>02</span>
                    <div>
                      <strong>JWT Validation</strong>
                      <small>Access token verification</small>
                    </div>
                  </div>

                  <div className="security-line" />

                  <div className="security-step">
                    <span>03</span>
                    <div>
                      <strong>Session Check</strong>
                      <small>Active session validation with Redis</small>
                    </div>
                  </div>

                  <div className="security-line" />

                  <div className="security-step">
                    <span>04</span>
                    <div>
                      <strong>RBAC</strong>
                      <small>Role & permission authorization</small>
                    </div>
                  </div>

                  <div className="security-line" />

                  <div className="security-step">
                    <span>05</span>
                    <div>
                      <strong>Institution Scope</strong>
                      <small>Multi-institution data access control</small>
                    </div>
                  </div>

                  <div className="security-line" />

                  <div className="security-step">
                    <span>06</span>
                    <div>
                      <strong>Protected Resource</strong>
                      <small>Authorized API response</small>
                    </div>
                  </div>
                </div>
              )}

              {project.slug === "village-cooperative-system" && (
                <div className="security-flow">
                  <div className="security-step">
                    <span>01</span>
                    <div>
                      <strong>Login</strong>
                      <small>User credential verification</small>
                    </div>
                  </div>

                  <div className="security-line" />

                  <div className="security-step">
                    <span>02</span>
                    <div>
                      <strong>JWT Authentication</strong>
                      <small>Token validation for protected requests</small>
                    </div>
                  </div>

                  <div className="security-line" />

                  <div className="security-step">
                    <span>03</span>
                    <div>
                      <strong>Role Middleware</strong>
                      <small>Role-based endpoint access validation</small>
                    </div>
                  </div>

                  <div className="security-line" />

                  <div className="security-step">
                    <span>04</span>
                    <div>
                      <strong>Protected Operation</strong>
                      <small>Authorized cooperative transaction workflow</small>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {project.testing_result && (
          <section className="testing-section">
            <div className="testing-top">
              <div className="case-study-number">07</div>

              <div className="testing-heading">
                <p className="case-study-label">TESTING & EVALUATION</p>

                <h2>
                  Validated through
                  <br />
                  <span>functional testing.</span>
                </h2>
              </div>

              <div className="testing-description">
                <p>{project.testing_result}</p>
              </div>
            </div>

            <div className="testing-results">
              <div className="testing-result testing-result-main">
                <span className="testing-result-label">TOTAL TEST CASES</span>
                <strong>114</strong>
                <p>API test scenarios executed</p>
              </div>

              <div className="testing-result">
                <span className="testing-result-label">PASSED</span>
                <strong>114</strong>
                <p>Functional tests passed</p>
              </div>

              <div className="testing-result">
                <span className="testing-result-label">FAILED</span>
                <strong>0</strong>
                <p>Failed test cases</p>
              </div>

              <div className="testing-result">
                <span className="testing-result-label">SUCCESS RATE</span>
                <strong>
                  100<span>%</span>
                </strong>
                <p>Functional test success rate</p>
              </div>
            </div>

            <div className="testing-coverage">
              <span>TEST COVERAGE AREAS</span>

              <div className="testing-tags">
                <span>Authentication</span>
                <span>Authorization</span>
                <span>Input Validation</span>
                <span>Role-based Access</span>
                <span>Workflow Behavior</span>
                <span>Successful Requests</span>
              </div>
            </div>
          </section>
        )}

        <footer className="case-footer">
          <div>
            <p>NEXT PROJECT</p>
            <h2>Explore more systems.</h2>
          </div>

          <Link to="/#projects" className="case-next">
            All projects ↗
          </Link>
        </footer>
      </div>
    </main>
  );
};

export default ProjectDetail;
