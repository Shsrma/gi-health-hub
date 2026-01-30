import { 
  Stethoscope, 
  Microscope, 
  HeartPulse, 
  Shield,
  Activity,
  Pill
} from "lucide-react";

const ExpertiseSection = () => {
  const expertiseAreas = [
    {
      icon: Stethoscope,
      title: "Diagnosis & Management",
      description: "Comprehensive evaluation and care for disorders affecting the GI tract, liver, pancreas, gallbladder, and biliary tree.",
      details: ["IBD Management", "IBS Treatment", "Hepatitis Care", "Pancreatitis", "GI Cancer Care"],
    },
    {
      icon: Microscope,
      title: "Endoscopic Procedures",
      description: "Advanced endoscopic skills for diagnosis and therapeutic interventions.",
      details: ["Upper GI Endoscopy", "Colonoscopy", "ERCP", "EUS", "Polyp Removal", "GI Bleeding Management"],
    },
    {
      icon: HeartPulse,
      title: "Chronic Disease Care",
      description: "Expert long-term management for chronic gastrointestinal conditions.",
      details: ["Crohn's Disease", "Ulcerative Colitis", "Celiac Disease", "Fatty Liver Disease", "Cirrhosis"],
    },
    {
      icon: Shield,
      title: "Preventive Screening",
      description: "Routine screenings for early detection and preventive care for digestive health.",
      details: ["Colon Cancer Screening", "GI Cancer Detection", "Preventive Health", "Risk Assessment"],
    },
  ];

  const conditions = [
    { icon: Activity, name: "Inflammatory Bowel Disease" },
    { icon: Pill, name: "Irritable Bowel Syndrome" },
    { icon: HeartPulse, name: "Hepatitis & Liver Disease" },
    { icon: Stethoscope, name: "Pancreatitis" },
    { icon: Microscope, name: "GI Cancers" },
    { icon: Shield, name: "Biliary Disorders" },
  ];

  return (
    <section id="expertise" className="py-20 bg-medical-blue-light">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Clinical Expertise
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Specialized <span className="text-gradient">Gastroenterology</span> Care
          </h2>
          <p className="text-muted-foreground">
            Comprehensive care for all digestive and hepatic conditions with 
            state-of-the-art diagnostic and therapeutic approaches.
          </p>
        </div>

        {/* Main expertise cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <area.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                {area.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {area.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {area.details.map((detail, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Conditions treated */}
        <div className="bg-hero-gradient rounded-3xl p-8 md:p-12">
          <h3 className="font-display text-2xl font-bold text-primary-foreground text-center mb-8">
            Conditions We Treat
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {conditions.map((condition, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors"
              >
                <condition.icon className="w-8 h-8 text-primary-foreground mx-auto mb-3" />
                <span className="text-sm text-primary-foreground font-medium">
                  {condition.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
