import { GraduationCap, Briefcase, Award } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading text-foreground mb-4">
              about<span className="text-primary">.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get to know me better
            </p>
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Bio */}
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-semibold text-foreground">
                Who I Am
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate frontend developer and final-year Computer Science Engineering student at Srinivas University Institute of Engineering and Technology, Mukka, Mangalore.
                </p>
                <p>
                  My journey in tech has been enriched by hands-on experience at Accolade Tech Solutions, where I developed full-stack web applications. I've also participated in virtual job simulations at <span className="text-primary">Deloitte Australia (Technology)</span> and <span className="text-primary">Accenture Nordics (Software Engineering)</span>.
                </p>
                <p>
                  I'm dedicated to creating intuitive, user-friendly web interfaces that make a real difference. My focus is on writing clean, maintainable code while staying current with modern frontend technologies.
                </p>
              </div>
            </div>

            {/* Education & Highlights */}
            <div className="space-y-6">
              {/* Education Card */}
              <div className="p-6 rounded-xl bg-card border border-border/50 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">
                      B.Tech in Computer Science Engineering
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Srinivas University Institute of Engineering and Technology
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Mukka, Mangalore
                    </p>
                    <p className="text-sm text-primary mt-2">
                      Expected Graduation: 2026
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience Highlight */}
              <div className="p-6 rounded-xl bg-card border border-border/50 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">
                      Full Stack Development Intern
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Accolade Tech Solutions, Mangalore
                    </p>
                    <p className="text-sm text-primary mt-2">
                      May 2025 – June 2025
                    </p>
                  </div>
                </div>
              </div>

              {/* Virtual Simulations */}
              <div className="p-6 rounded-xl bg-card border border-border/50 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">
                      Virtual Job Simulations
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Deloitte Australia (Technology)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Accenture Nordics (Software Engineering)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
