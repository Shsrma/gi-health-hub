import { CheckCircle, GraduationCap, BookOpen, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const educationTimeline = [
    {
      degree: "MBBS",
      institution: "King George's Medical University, Lucknow",
      description: "Foundation in medical sciences and clinical practice",
    },
    {
      degree: "MD Medicine",
      institution: "Postgraduate Training",
      description: "Advanced training in internal medicine",
    },
    {
      degree: "DNB Medicine",
      institution: "National Board of Examinations",
      description: "Diplomate of National Board in Medicine",
    },
    {
      degree: "DM Gastroenterology (Fellow)",
      institution: "Super Specialization",
      description: "Fellowship in Gastroenterology and Hepatology",
    },
  ];

  const coreValues = [
    {
      icon: Users,
      title: "Patient-Centered Care",
      description: "Every treatment plan is tailored to the individual patient's needs, ensuring personalized and compassionate healthcare.",
    },
    {
      icon: BookOpen,
      title: "Evidence-Based Practice",
      description: "All clinical decisions are grounded in the latest medical research and proven treatment protocols.",
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "Committed to staying updated with the latest advancements in gastroenterology and medical science.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm mb-6">
              About Dr. Goel
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Compassionate Care,{" "}
              <span className="text-gradient">Advanced Medicine</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Dr. Harshal Mahesh Goel is a dedicated gastroenterologist committed to advancing 
              digestive and hepatic health through expert clinical care. With extensive training 
              from premier institutions including AIIMS New Delhi and KGMU Lucknow, he brings 
              a wealth of knowledge and experience to patient care.
            </p>
          </div>
        </section>

        {/* Career Objective */}
        <section className="container mb-20">
          <div className="bg-hero-gradient rounded-3xl p-8 md:p-12 text-primary-foreground max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-center">
              Career Objective
            </h2>
            <p className="text-lg leading-relaxed opacity-95 text-center">
              Passionate gastroenterologist dedicated to advancing digestive and hepatic 
              health through expert clinical care, patient education, and evidence-based 
              advocacy. Committed to using digital platforms to share reliable medical 
              knowledge, foster professional collaboration, and empower individuals to 
              make informed healthcare decisions.
            </p>
          </div>
        </section>

        {/* Education Timeline */}
        <section className="container mb-20">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">
              Educational Journey
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4">
              Academic <span className="text-gradient">Excellence</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

              {educationTimeline.map((item, index) => (
                <div
                  key={index}
                  className="relative flex gap-6 mb-8 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow flex-1">
                    <h3 className="font-display text-xl font-bold text-foreground mb-1">
                      {item.degree}
                    </h3>
                    <p className="text-primary font-medium mb-2">{item.institution}</p>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="container">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">
              Guiding Principles
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4">
              Core <span className="text-gradient">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 text-center group animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
