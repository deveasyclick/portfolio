import type { Metadata } from "next";
import { Asterisk } from "lucide-react";
import { Header, Contact, Arrow, Tags } from "@/components/portfolio/Shared";
import { profile, contributions, independentProjects } from "@/data/content";

export const metadata: Metadata = { title: "Yusuf Adeniyi — Editorial" };

export default function EditorialPortfolio() {
  return (
    <div className="editorial-design">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header editorial />
      <main id="main" tabIndex={-1}>
        <section className="editorial-hero shell" aria-labelledby="hero-title">
          <div className="editorial-kicker">
            <p className="eyebrow">An engineer’s portfolio</p>
            <p className="eyebrow">Systems. Products. People.</p>
          </div>
          <h1 id="hero-title">
            Good software.
            <br />
            <em>Thoughtfully</em> built.
          </h1>
          <div className="editorial-hero-bottom">
            <span className="editorial-mark" aria-hidden="true">
              <Asterisk size={90} strokeWidth={1.25} />
            </span>
            <p>{profile.editorialIntro}</p>
            <a className="text-link" href="#work">
              Selected contributions <Arrow down />
            </a>
          </div>
        </section>

        <section
          id="work"
          className="editorial-work shell"
          aria-labelledby="work-title"
        >
          <div className="editorial-section-label">
            <h2 id="work-title">Selected contributions</h2>
            <span>Company work / 01—03</span>
          </div>
          {contributions.map((work, index) => (
            <article className="editorial-story" key={work.company}>
              <div className="story-index">
                <span>0{index + 1}</span>
                <p>{work.company}</p>
                <p>
                  {work.role}
                  <br />
                  {work.period}
                </p>
              </div>
              <div className="story-content">
                <p className="eyebrow">{work.category}</p>
                <h3>{work.title}</h3>
                <p className="story-summary">{work.summary}</p>
                <ul className="story-achievements">
                  {work.achievements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Tags items={work.stack ?? []} />
              </div>
              <div className="story-metrics">
                {work.metrics?.map((metric) => (
                  <div key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>

        <div className="editorial-personal shell">
          <section id="projects" aria-labelledby="projects-title">
            <p className="eyebrow">On my own terms</p>
            <h2 id="projects-title">
              Independent
              <br />
              <em>by design.</em>
            </h2>
            {independentProjects.map((project) => (
              <article className="editorial-project" key={project.name}>
                <p className="eyebrow">{project.category}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <Tags items={project.stack} />
                <div className="project-links">
                  {project.website && (
                    <a href={project.website}>
                      Visit project <Arrow />
                    </a>
                  )}
                  <a href={project.github}>
                    View source <Arrow />
                  </a>
                </div>
              </article>
            ))}
          </section>
          <section
            id="about"
            className="editorial-about"
            aria-labelledby="about-title"
          >
            <p className="eyebrow">A little context</p>
            <h2 id="about-title">
              The person
              <br />
              <em>behind the work.</em>
            </h2>
            <p>{profile.about}</p>
            <p>
              I work across the stack, with a focus on reliable APIs, payment
              systems, and the infrastructure that keeps products running.
            </p>
            <div className="about-note">
              <p className="eyebrow">Tools of the trade</p>
              <Tags items={profile.skills} />
            </div>
            <div className="about-note">
              <p className="eyebrow">Education</p>
              <p>{profile.education}</p>
            </div>
            <a className="text-link" href={profile.resume} download>
              Read the full resume <Arrow />
            </a>
          </section>
        </div>
        <Contact editorial />
      </main>
    </div>
  );
}
