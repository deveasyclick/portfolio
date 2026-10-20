import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { ArrowUpRight, ArrowDown, Download } from "lucide-react";
import { profile } from "@/data/content";

export function Arrow({ down = false }: { down?: boolean }) {
  return down ? (
    <ArrowDown size={17} aria-hidden="true" />
  ) : (
    <ArrowUpRight size={17} aria-hidden="true" />
  );
}

export function Header({ editorial = false }: { editorial?: boolean }) {
  return (
    <header className="site-header shell">
      <Link
        href={editorial ? "/editoria" : "/"}
        className="wordmark"
        aria-label="Yusuf Adeniyi home"
      >
        ya<span>.</span>
      </Link>
      <nav aria-label="Main navigation">
        <a href="#work">Work</a>
        {!editorial && <a href="#about">About</a>}
        <a href={editorial ? "#about" : "#experience"}>
          {editorial ? "About" : "Experience"}
        </a>
        <a href="#contact">
          Contact <Arrow />
        </a>
      </nav>
      <div className="header-tools">
        <Link className="design-switch" href={editorial ? "/" : "/editoria"}>
          {editorial ? "Product view" : "Editorial view"} <Arrow />
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}

export function Contact({ editorial = false }: { editorial?: boolean }) {
  return (
    <>
      <section id="contact" className="contact shell">
        <div className="eyebrow">
          {editorial ? "The next chapter" : "Have something in mind?"}
        </div>
        <div className="contact-heading">
          <h2>
            Let’s build
            <br />
            something <em>good.</em>
          </h2>
          <a
            className="contact-arrow"
            href={`mailto:${profile.email}`}
            aria-label="Email Yusuf Adeniyi"
          >
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="contact-bottom">
          <p>
            Thoughtful products. Dependable systems.
            <br />
            I’d love to hear what you’re working on.
          </p>
          <a className="text-link" href={`mailto:${profile.email}`}>
            {profile.email} <Arrow />
          </a>
        </div>
      </section>
      <footer className="site-footer shell">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <div>
          <a href={profile.github}>
            GitHub <Arrow />
          </a>
          <a href={profile.linkedin}>
            LinkedIn <Arrow />
          </a>
          <a href={profile.resume} download>
            Resume <Download size={14} aria-hidden="true" />
          </a>
        </div>
        <Link href={editorial ? "/" : "/editoria"}>
          {editorial ? "Switch to product view" : "Switch to editorial view"}{" "}
          <Arrow />
        </Link>
      </footer>
    </>
  );
}

export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tags" aria-label="Technologies and focus">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function ProfilePortrait() {
  return (
    <figure className="profile-portrait">
      <Image
        src={profile.photo}
        alt="Portrait of Yusuf Adeniyi"
        width={460}
        height={460}
        sizes="(max-width: 700px) calc(100vw - 40px), 360px"
      />
      <figcaption>
        <span>{profile.name}</span>
        <span>{profile.role}</span>
      </figcaption>
    </figure>
  );
}

export function MoreProjectsLink() {
  return (
    <a
      className="text-link more-projects"
      href={`${profile.github}?tab=repositories`}
    >
      Explore more on GitHub <Arrow />
    </a>
  );
}
