import { Calendar, MapPin, Building2 } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Web App Development Intern",
    company: "Accolade Tech Solutions",
    location: "Mangalore",
    period: "May 2025 – June 2025",
    description: [
      "Worked on EasyMed Appointments, a comprehensive healthcare appointment booking system",
      "Collaborated on both frontend and backend modules of the application",
      "Implemented features for patients, doctors, and admin roles",
      "Gained hands-on experience in building scalable web applications",
    ],
    current: true,
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading text-foreground mb-4">
            experience<span className="text-primary">.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey so far
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12 pb-12 last:pb-0">
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
              
              {/* Timeline Dot */}
              <div className={`absolute left-0 top-0 w-3 h-3 rounded-full -translate-x-1/2 ${exp.current ? 'bg-primary shadow-[0_0_10px_hsl(175_80%_50%_/_0.5)]' : 'bg-muted-foreground'}`} />

              {/* Content Card */}
              <div className="p-6 rounded-xl bg-card border border-border/50 hover-lift">
                {exp.current && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    Current
                  </span>
                )}
                
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {exp.title}
                </h3>
                
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Building2 size={14} className="text-primary" />
                    {exp.company}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} className="text-primary" />
                    {exp.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} className="text-primary" />
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
