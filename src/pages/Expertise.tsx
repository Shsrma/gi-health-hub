import { 
  Stethoscope, 
  Microscope, 
  Shield,
  Activity,
  Pill,
  Scan
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Expertise = () => {
  const expertiseAreas = [
    {
      icon: Stethoscope,
      title: "GI Disorders Diagnosis & Management",
      description: "Comprehensive evaluation and care for disorders affecting the gastrointestinal tract, including diagnostic workup and personalized treatment plans.",
      details: ["Abdominal Pain", "Chronic Diarrhea", "Constipation", "GERD", "Dyspepsia"],
    },
    {
      icon: Microscope,
      title: "Endoscopic Procedures",
      description: "Advanced endoscopic skills for both diagnostic and therapeutic interventions with precision and patient comfort.",
      details: ["Upper GI Endoscopy", "Lower GI Endoscopy (Colonoscopy)", "ERCP", "EUS", "Polypectomy"],
    },
    {
      icon: Activity,
      title: "Chronic Liver Disease & Cirrhosis",
      description: "Expert management of liver conditions from early detection to advanced cirrhosis care and monitoring.",
      details: ["Fatty Liver Disease", "Viral Hepatitis", "Alcoholic Liver Disease", "Cirrhosis Management"],
    },
    {
      icon: Shield,
      title: "Preventive GI Cancer Screening",
      description: "Routine screenings for early detection of gastrointestinal cancers, enabling timely intervention.",
      details: ["Colon Cancer Screening", "Upper GI Cancer Detection", "Surveillance Protocols", "Risk Assessment"],
    },
  ];

  const conditions = [
    { icon: Activity, name: "Inflammatory Bowel Disease (IBD)" },
    { icon: Pill, name: "Irritable Bowel Syndrome (IBS)" },
    { icon: Stethoscope, name: "Pancreatitis" },
    { icon: Scan, name: "Fatty Liver Disease" },
    { icon: Microscope, name: "Hepatitis" },
    { icon: Shield, name: "GI Cancers" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm mb-6">
              Clinical Expertise
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Specialized <span className="text-gradient">Gastroenterology</span> Care
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Comprehensive care for all digestive and hepatic conditions with 
              state-of-the-art diagnostic and therapeutic approaches.
            </p>
          </div>
        </section>

        {/* Main expertise cards */}
        <section className="container mb-16">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
        </section>

        {/* Conditions treated */}
        <section className="container">
          <div className="bg-hero-gradient rounded-3xl p-8 md:p-12 max-w-5xl mx-auto">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground text-center mb-8">
              Conditions Treated
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {conditions.map((condition, index) => (
                <div
                  key={index}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <condition.icon className="w-8 h-8 text-primary-foreground mx-auto mb-3" />
                  <span className="text-sm text-primary-foreground font-medium">
                    {condition.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Expertise;
