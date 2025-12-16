import { ArrowDown, Mail, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileAvatar from "@/assets/profile-avatar.png";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(175_80%_50%_/_0.1)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(185_80%_45%_/_0.05)_0%,_transparent_50%)]" />
      
      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for Opportunities
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <span className="text-foreground">Fathimathul</span>
              <br />
              <span className="text-primary glow-text">Harshana</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-display animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              Frontend Engineer | CSE Undergraduate
            </p>
            
            <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              Final-year B.Tech CSE student at Srinivas University with hands-on experience in full-stack web development. Passionate about building user-friendly interfaces and modern web applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">
                  <Eye size={18} />
                  View Projects
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact">
                  <Mail size={18} />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center order-1 lg:order-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/30 shadow-[0_0_60px_hsl(175_80%_50%_/_0.3)] animate-glow-pulse hover:scale-105 transition-transform duration-500">
                <img
                  src={profileAvatar}
                  alt="Fathimathul Harshana"
                  className="w-full h-full object-cover object-top scale-110"
                />
              </div>
              {/* Floating decoration */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-primary/20 blur-2xl animate-float" />
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-primary/10 blur-xl animate-float" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
