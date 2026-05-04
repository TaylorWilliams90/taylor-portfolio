"use client";

import React from 'react';
import {  
  Cpu, 
  Globe, 
  Layers,
} from 'lucide-react';

// --- DATA ---
const skills = [
  { name: "HTML5 & CSS3", years: "12+", color: "text-orange-400" },
  { name: "JavaScript", years: "8+", color: "text-yellow-400" },
  { name: "MySQL & PHP", years: "8+", color: "text-indigo-400" },
  { name: "AWS Elastic Beanstalk", years: "4+", color: "text-orange-500" },
  { name: "GitHub / CI/CD", years: "5+", color: "text-blue-400" },
  { name: "Vuejs & Reactjs", years: "3", color: "text-cyan-400" },
];

const experiences = [
  {
    role: "Lead Software Engineer",
    company: "Cornerstone Technologies LLC",
    period: "2021 - Present",
    desc: [
      " Architected a high-throughput event application using PHP Laravel, increasing backend customization efficiency by 100% and enabling rapid deployment of multi-tenant event streams.",
      " Managed full-stack cloud infrastructure using AWS Elastic Beanstalk throughout the entire tenure, overseeing automated deployments from GitHub repositories to multi-tier environments.",
      " Established a rigorous deployment pipeline utilizing Sandbox environments for comprehensive testing and validation before final Production server deployments, ensuring 100% system uptime during live events.",
      " Engineered a modular template logic layer (Blade/Laravel) that reduced system overhead and development lifecycle time by 20% for large-scale digital events.",
      " Developed and optimized RESTful APIs to handle real-time data synchronization between the core application and interactive event components.",
      " Managed the full system lifecycle using Monday.com and GitHub (CI/CD), ensuring code quality through rigorous peer reviews and architectural audits.",
    ],
    icon: <Cpu className="w-6 h-6 text-blue-400" />
  },
  {
    role: "Web Project Manager",
    company: "Westech Equipment",
    period: "2019 - 2021",
    desc: [
      "Successfully develop and modify Zencart sites using HTML, CSS, JavaScript, jQuery, Bootstrap, PHP, MySQL",
      "Manage Google Ads, Bing, and Shopping ads",
      "Run Projects and Tasks through Asana",
      "Manage Godaddy and DigitalOcean servers",
    ],
    icon: <Globe className="w-6 h-6 text-green-400" />
  },
  {
    role: "Developer/Salesforce Admin",
    company: "Active Care",
    period: "2017 - 2018",
    desc: [
      "Successfully develop and modify websites using HTML, CSS, JavaScript, jQuery, C#, ASP.NET, SQL and Bootstrap",
      "Salesforce administrator working closely with the development team",
      "Manage multiple projects at once",
      "Scrum Master inside of a team of Developers and Operations", 
      "Ran Agile Projects through Visual Studio TFS",
    ],
    icon: <Layers className="w-6 h-6 text-purple-400" />
  }
];

const certs = [
  { title: "jQuery Tutorial", issuer: "Sololearn", id: "1082-110829517" },
  { title: "C# Tutorial", issuer: "Sololearn", id: "1080-11829517" },
  { title: "JavaScript", issuer: "Sololearn", id: "1024-11829517" },
];

// --- COMPONENTS ---

interface BentoCardProps {
  children: React.ReactNode;
  title: string;
  icon?: React.ReactNode;
  className?: string;
}

function BentoCard({ children, title, icon, className = "" }: BentoCardProps) {
  return (
    <div className={`bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 backdrop-blur-sm ${className}`}>
      <div className="flex items-center gap-3 mb-2">
        {icon && <span className="text-blue-500">{icon}</span>}
        <h3 className="text-zinc-400 text-sm font-semibold uppercase tracking-wider">{title}</h3>
      </div>
      {children}
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-24">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              Taylor <br /> <span className="text-zinc-500">Developer.</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-sm">
              Full-stack engineer specializing in scalable web architectures and clean code.
            </p>
          </div>
          
          <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 flex flex-col justify-center">
            <p className="text-zinc-400 text-lg mb-6">
              Currently focused on building high-performance cloud applications.
            </p>
            <div className="flex gap-4">
              <a href="mailto:taylordwilliams90@gmail.com" className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors">
                Contact Me
              </a>
              <a href="https://docs.google.com/document/d/1-rIeZgf6xXkM1qFWlUyQdB4ceZ9jEayXiesB_Uqaahs/edit?usp=sharing" target="_blank" className="px-6 py-3 bg-zinc-800 text-white rounded-full font-medium hover:bg-zinc-700 transition-colors">
                View Resume
              </a>
            </div>
          </div>
        </section>

        {/* Experience & Tech Stack Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Experience Column */}
          <div className="md:col-span-2 space-y-6">
            <BentoCard title="Experience">
              <div className="space-y-6 mt-4">
                {experiences.map((exp, i) => (
                  <div key={i} className="relative pl-6 border-l border-zinc-800 pb-2">
                    <div className="absolute w-2 h-2 bg-blue-500 rounded-full -left-[4.5px] top-2" />
                    <h4 className="font-bold text-zinc-200">{exp.role}</h4>
                    <p className="text-sm text-zinc-500">{exp.company} • {exp.period}</p>
                    <ul className="space-y-3">
                      {exp.desc.map((point: string, index: number) => (
                        <li key={index} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </BentoCard>
          </div>

          {/* Skills/Tech Column */}
          <div className="space-y-6">
            <BentoCard title="Skilles & Tech">
              <div className="flex flex-wrap gap-2 mt-4">
                {skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm">
                    {skill.name} <span className={skill.color}>{skill.years}</span>
                  </span>
                ))}
              </div>
            </BentoCard>
            <BentoCard title="Certifications">
              <div className="flex flex-wrap gap-2 mt-4">
                {certs.map((cert, i) => (
                  <span key={i} className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm">
                    {cert.title} - {cert.issuer}
                    </span>
                ))}
              </div>
            </BentoCard>
          </div>
        </section>

      </div>
    </main>
  );
}

