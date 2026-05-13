import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Taylor W.",
  description: "Selected projects by Taylor Williams — full-stack engineer.",
};

const projects = [
  {
    num: "01",
    name: "Event Stream Platform",
    year: "2021 – Present",
    description:
      "High-throughput, multi-tenant event application built with PHP Laravel and managed on AWS Elastic Beanstalk. Increased backend customization efficiency by 100% and enabled rapid deployment of real-time event streams. Engineered a modular Blade/Laravel template layer that cut development lifecycle time by 20%, and developed RESTful APIs for live data synchronization across interactive event components.",
    tags: ["PHP Laravel", "AWS Elastic Beanstalk", "REST API", "MySQL", "GitHub CI/CD"],
    highlight: "100% efficiency increase",
  },
  {
    num: "02",
    name: "E-Commerce Storefront Rebuild",
    year: "2019 – 2021",
    description:
      "Full-stack Zencart rebuild with a custom HTML/CSS/JS/jQuery frontend and optimized MySQL backend hosted on DigitalOcean. Managed the complete project lifecycle including Google Ads, Bing, and Shopping ad campaigns. Oversaw GoDaddy and DigitalOcean server infrastructure to ensure high availability and performance.",
    tags: ["HTML/CSS", "JavaScript", "jQuery", "PHP", "MySQL", "Bootstrap"],
    highlight: "Full lifecycle ownership",
  },
  {
    num: "03",
    name: "Healthcare CRM Integration",
    year: "2017 – 2018",
    description:
      "ASP.NET web platform integrated with Salesforce CRM, built for an active care organization. Served as Scrum Master, leading Agile sprints and coordinating cross-functional development and operations teams through Visual Studio TFS. Maintained multiple concurrent projects while ensuring code quality and delivery timelines.",
    tags: ["ASP.NET", "C#", "Salesforce Admin", "SQL", "Bootstrap", "Agile/Scrum"],
    highlight: "Scrum Master & dev lead",
  },
];

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <section className="projects-hero">
        <p className="eyebrow">Selected work</p>
        <h1 className="page-title">Projects</h1>
        <p className="page-sub">
          A collection of builds across full-stack web, cloud infrastructure,
          and enterprise tooling.
        </p>
      </section>

      <section className="projects-list">
        {projects.map((project) => (
          <article key={project.num} className="project-item">
            <div className="project-meta">
              <span className="project-num">{project.num}</span>
              <span className="project-year">{project.year}</span>
            </div>
            <div className="project-content">
              <h2 className="project-name">{project.name}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-footer">
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="project-highlight">{project.highlight}</span>
              </div>
            </div>
          </article>
        ))}
      </section>

      <style>{`
        .projects-page {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 2.5rem 6rem;
        }

        /* ── Hero ── */
        .projects-hero {
          padding: 4rem 0 3rem;
          border-bottom: 1px solid #1e1e1e;
          margin-bottom: 0;
        }

        .eyebrow {
          font-family: "Space Mono", monospace;
          font-size: 11px;
          color: #c8f55a;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin: 0 0 1rem;
        }

        .page-title {
          font-size: clamp(36px, 6vw, 56px);
          font-weight: 300;
          letter-spacing: -0.04em;
          line-height: 1.05;
          color: #e8e8e0;
          margin: 0 0 1rem;
        }

        .page-sub {
          font-size: 15px;
          color: #666;
          line-height: 1.7;
          max-width: 460px;
          margin: 0;
        }

        /* ── Project list ── */
        .projects-list {
          display: flex;
          flex-direction: column;
        }

        .project-item {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 2rem;
          padding: 2.5rem 0;
          border-bottom: 1px solid #1e1e1e;
          transition: background 0.2s;
        }

        /* ── Meta column ── */
        .project-meta {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          padding-top: 3px;
        }

        .project-num {
          font-family: "Space Mono", monospace;
          font-size: 11px;
          color: #333;
          letter-spacing: 0.06em;
        }

        .project-year {
          font-family: "Space Mono", monospace;
          font-size: 11px;
          color: #444;
          line-height: 1.5;
        }

        /* ── Content column ── */
        .project-content {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .project-name {
          font-size: 22px;
          font-weight: 400;
          letter-spacing: -0.025em;
          color: #e8e8e0;
          margin: 0;
          line-height: 1.2;
        }

        .project-description {
          font-size: 14px;
          color: #666;
          line-height: 1.75;
          margin: 0;
          max-width: 580px;
        }

        /* ── Footer row ── */
        .project-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 0.25rem;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .tag {
          font-family: "Space Mono", monospace;
          font-size: 10px;
          padding: 4px 10px;
          border: 1px solid #222;
          color: #555;
          border-radius: 2px;
          letter-spacing: 0.04em;
        }

        .project-highlight {
          font-family: "Space Mono", monospace;
          font-size: 11px;
          color: #c8f55a;
          letter-spacing: 0.06em;
          white-space: nowrap;
          opacity: 0.8;
        }

        /* ── Responsive ── */
        @media (max-width: 640px) {
          .projects-page {
            padding: 0 1.25rem 4rem;
          }

          .project-item {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }

          .project-meta {
            flex-direction: row;
            gap: 1rem;
          }

          .project-footer {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </main>
  );
}
