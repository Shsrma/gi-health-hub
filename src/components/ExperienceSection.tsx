import { Briefcase, MapPin, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Resident",
      department: "Dept. of Gastroenterology",
      institution: "MG Medical College & Hospital",
      location: "Jaipur",
      period: "Present",
      isCurrent: true,
    },
    {
      title: "Assistant Professor",
      department: "Dept. of Medicine",
      institution: "AFSMS",
      location: "Faridabad, Haryana",
      period: "Previous",
      isCurrent: false,
    },
    {
      title: "Medical Officer Incharge",
      department: "G20 Summit",
      institution: "Government of India",
      location: "New Delhi",
      period: "2023",
      isCurrent: false,
      isSpecial: true,
    },
    {
      title: "Senior Resident",
      department: "Dept. of Medicine",
      institution: "UCMS & GTB Hospital",
      location: "New Delhi",
      period: "Previous",
      isCurrent: false,
    },
    {
      title: "Junior Resident",
      department: "Dept. of Emergency Medicine",
      institution: "AIIMS",
      location: "New Delhi",
      period: "Previous",
      isCurrent: false,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Professional Journey
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Experience & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground">
            A distinguished career path through India's premier medical institutions, 
            building expertise in gastroenterology and internal medicine.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 animate-fade-up ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full border-4 border-card z-10 top-8 md:top-1/2 md:-translate-y-1/2">
                <div className={`w-full h-full rounded-full ${exp.isCurrent ? "bg-accent animate-pulse-gentle" : exp.isSpecial ? "bg-accent" : "bg-primary"}`} />
              </div>

              {/* Card */}
              <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                <div 
                  className={`bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 ${
                    exp.isCurrent ? "border-2 border-accent" : exp.isSpecial ? "border-2 border-primary/30" : ""
                  }`}
                >
                  {exp.isCurrent && (
                    <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full mb-4">
                      Current Position
                    </span>
                  )}
                  {exp.isSpecial && !exp.isCurrent && (
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
                      Special Assignment
                    </span>
                  )}
                  
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {exp.title}
                  </h3>
                  
                  <p className="text-primary font-medium mb-3">{exp.department}</p>
                  
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.institution}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
