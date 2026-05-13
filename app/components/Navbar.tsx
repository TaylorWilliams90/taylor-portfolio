"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <nav className="navbar">
      <Link href="/" className="navbar-logo">
        Taylor W.
      </Link>
      <div className="navbar-links">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`navbar-link ${pathname === href ? "active" : ""}`}
          >
            {label}
          </Link>
        ))}
      </div>

      <style jsx>{`
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 2.5rem;
          border-bottom: 1px solid #1e1e1e;
          position: sticky;
          top: 0;
          background: #0a0a0a;
          z-index: 50;
        }

        .navbar-logo {
          font-family: "Space Mono", monospace;
          font-size: 15px;
          color: #e8e8e0;
          text-decoration: none;
          letter-spacing: -0.02em;
          transition: color 0.2s;
        }

        .navbar-logo:hover {
          color: #c8f55a;
        }

        .navbar-links {
          display: flex;
          gap: 2rem;
        }

        .navbar-link {
          font-size: 13px;
          color: #888;
          text-decoration: none;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          transition: color 0.2s;
        }

        .navbar-link:hover {
          color: #e8e8e0;
        }

        .navbar-link.active {
          color: #c8f55a;
        }

        @media (max-width: 600px) {
          .navbar {
            padding: 1rem 1.25rem;
          }
          .navbar-links {
            gap: 1.25rem;
          }
        }
      `}</style>
    </nav>
  );
}
