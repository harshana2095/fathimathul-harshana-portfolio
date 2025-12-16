import { Code2, Globe, Database, GitBranch, FileCode, Layout, Server, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Programming & Core",
    icon: Code2,
    skills: ["Java", "Data Structures", "Algorithms"],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Backend & Database",
    icon: Database,
    skills: ["Node.js", "MySQL"],
  },
  {
    title: "Tools & Version Control",
    icon: GitBranch,
    skills: ["Git", "GitHub"],
  },
];

const allSkills = [
  { name: "Java", icon: FileCode, level: 85 },
  { name: "JavaScript", icon: Terminal, level: 90 },
  { name: "React", icon: Globe, level: 85 },
  { name: "HTML/CSS", icon: Layout, level: 95 },
  { name: "Node.js", icon: Server, level: 75 },
  { name: "MySQL", icon: Database, level: 70 },
  { name: "Git", icon: GitBranch, level: 80 },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 relative bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading text-foreground mb-4">
            skills<span className="text-primary">.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="p-6 rounded-xl bg-card border border-border/50 hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <category.icon size={20} />
                </div>
                <h3 className="font-display font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground border border-border/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Bars */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-display text-xl font-semibold text-foreground mb-8 text-center">
            Proficiency Levels
          </h3>
          <div className="space-y-6">
            {allSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <skill.icon size={16} className="text-primary" />
                    <span className="font-medium text-foreground">{skill.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_10px_hsl(175_80%_50%_/_0.5)]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
