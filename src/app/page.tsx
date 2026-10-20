import { Header, Contact, Arrow, About } from "@/components/portfolio/Shared";
import ProjectCollection from "@/components/portfolio/ProjectCollection";
import { profile, contributions, career } from "@/data/content";

export default function ProductPortfolio() {
  return (
    <div className="product-design">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <section className="product-hero shell" aria-labelledby="hero-title">
          <p className="eyebrow">
            <span className="blue-dot" /> Yusuf Adeniyi · Product-minded
            engineer
          </p>
          <h1 id="hero-title">
            From first build.
            <br />
            <span>To what comes next.</span>
          </h1>
          <div className="hero-bottom">
            <p>{profile.productIntro}</p>
            <a className="solid-link" href="#work">
              Explore my work <Arrow down />
            </a>
          </div>
          <div className="hero-footnote">
            <span>Backend depth. Product perspective.</span>
            <span>
              7+ years building for the real world <Arrow down />
            </span>
          </div>
        </section>

        <section
          id="work"
          className="work-section shell"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / In good company</p>
              <h2 id="work-title">
                Selected company work<span>.</span>
              </h2>
            </div>
            <p>
              Products I’ve helped build.
              <br />
              Outcomes I’ve helped make possible.
            </p>
          </div>
          <div className="company-grid">
            {contributions.map((work, index) => (
              <article
                className={`company-card company-${index}`}
                key={work.company}
              >
                <div className="card-top">
                  <span>{work.company}</span>
                  <span className="small-label">Company work</span>
                </div>
                <p className="eyebrow">{work.category}</p>
                <h3>{work.title}</h3>
                <p className="work-summary">{work.summary}</p>
                <div className="metric-row">
                  {work.metrics?.map((metric) => (
                    <div key={metric.label}>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>
                <details>
                  <summary>
                    My contributions <span aria-hidden="true">+</span>
                  </summary>
                  <ul>
                    {work.achievements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </details>
                <div className="card-role">
                  {work.role}
                  <br />
                  <span>{work.period}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="projects"
          className="independent-section shell"
          aria-labelledby="projects-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / Built with curiosity</p>
              <h2 id="projects-title">
                Outside the day job<span>.</span>
              </h2>
            </div>
            <p>
              Independent ideas.
              <br />
              Useful tools, built to be used.
            </p>
          </div>
          <ProjectCollection />
        </section>

        <About />

        <section
          id="experience"
          className="experience-section shell"
          aria-labelledby="experience-title"
        >
          <div className="experience-intro">
            <p className="eyebrow">03 / The journey so far</p>
            <h2 id="experience-title">
              Built over time<span>.</span>
            </h2>
            <p>
              From early-stage ideas to systems people rely on. A little of the
              journey behind the work.
            </p>
            <a className="text-link" href={profile.resume} download>
              Download my resume <Arrow />
            </a>
          </div>
          <div className="career-list">
            {career.map((job) => (
              <details className="career-row" key={job.company}>
                <summary>
                  <span>
                    <strong>{job.company}</strong>
                    <span>{job.role}</span>
                  </span>
                  <span className="career-date">
                    {job.period}
                    <span className="expand-icon" aria-hidden="true">
                      +
                    </span>
                  </span>
                </summary>
                <ul>
                  {job.achievements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </section>
        <Contact />
      </main>
    </div>
  );
}
