import { ExternalLink, Github, Users, Calendar as CalendarIcon, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "EasyMed Appointments",
    description: "A comprehensive healthcare appointment booking web application that streamlines the process of scheduling medical appointments for patients, doctors, and administrators.",
    features: [
      "Patient portal for booking appointments with preferred doctors",
      "Doctor dashboard for managing schedules and appointments",
      "Admin panel for managing both doctors and patients",
      "Secure authentication and role-based access control",
    ],
    techStack: ["React", "Node.js", "MySQL", "HTML", "CSS", "JavaScript"],
    featured: true,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 relative bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading text-foreground mb-4">
            projects<span className="text-primary">.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Featured work that showcases my skills
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden border border-border/50 bg-card hover-lift ${
                project.featured ? 'gradient-border' : ''
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30">
                    Featured Project
                  </span>
                </div>
              )}

              <div className="p-8 md:p-10">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Shield size={16} className="text-primary" />
                    Key Features
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="font-display font-semibold text-foreground mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-lg bg-secondary text-secondary-foreground border border-border/50 hover:border-primary/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button variant="hero" size="lg">
                    <ExternalLink size={18} />
                    Live Demo
                  </Button>
                  <Button variant="heroOutline" size="lg">
                    <Github size={18} />
                    View Code
                  </Button>
                </div>
              </div>

              {/* Role Cards */}
              <div className="px-8 md:px-10 pb-8 md:pb-10">
                <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Users size={16} className="text-primary" />
                  User Roles
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { role: "Patient", desc: "Book appointments online" },
                    { role: "Doctor", desc: "Manage schedules" },
                    { role: "Admin", desc: "Oversee entire system" },
                  ].map((item) => (
                    <div
                      key={item.role}
                      className="p-4 rounded-xl bg-secondary/50 border border-border/50"
                    >
                      <p className="font-semibold text-foreground mb-1">{item.role}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
