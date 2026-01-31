import { Award, GraduationCap, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import doctorImage from "@/assets/doctor-portrait.jpg";

const HeroSection = () => {
  const stats = [
    { icon: GraduationCap, value: "5+", label: "Years Experience" },
    { icon: Stethoscope, value: "1000+", label: "Procedures" },
    { icon: Award, value: "AIIMS", label: "Training" },
  ];

  return (
    <section className="relative min-h-screen pt-32 md:pt-40 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary rounded-bl-[100px] -z-10" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10" />
      
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm mb-6">
              Senior Resident • Gastroenterology
            </span>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Dr. Harshal{" "}
              <span className="text-gradient">Mahesh</span>{" "}
              <span className="text-gradient">Goel</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Passionate gastroenterologist dedicated to advancing digestive and hepatic health 
              through expert clinical care, patient education, and evidence-based practice.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link to="/book-consultation">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
                >
                  Book Consultation
                </Button>
              </Link>
              <Link to="/expertise">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
                >
                  View Expertise
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 animate-fade-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-up" style={{ animationDelay: "200ms" }}>
            <div className="relative z-10">
              <img
                src={doctorImage}
                alt="Dr. Harshal Mahesh Goel"
                className="w-full max-w-md mx-auto rounded-3xl shadow-card-hover object-cover aspect-[3/4]"
              />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 md:left-0 bg-card rounded-2xl shadow-card-hover p-6 animate-fade-up z-20" style={{ animationDelay: "400ms" }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">DM Gastroenterology</div>
                  <div className="text-sm text-muted-foreground">Fellow</div>
                </div>
              </div>
            </div>

            {/* Background decorations */}
            <div className="absolute -top-4 -right-4 w-32 h-32 border-2 border-primary/20 rounded-3xl -z-10" />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-accent/10 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
