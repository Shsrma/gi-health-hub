import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const qualifications = [
    "MBBS - King George's Medical University, Lucknow",
    "MD Medicine, DNB Medicine",
    "DM Gastroenterology (Fellow)",
  ];

  const highlights = [
    "Expert clinical care for digestive disorders",
    "Evidence-based advocacy and treatment",
    "Patient education and empowerment",
    "Digital platform for reliable medical knowledge",
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="animate-slide-in-left">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">
              About Dr. Goel
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Compassionate Care,{" "}
              <span className="text-gradient">Advanced Medicine</span>
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Dr. Harshal Mahesh Goel is a dedicated gastroenterologist committed to advancing 
              digestive and hepatic health through expert clinical care. With extensive training 
              from premier institutions including AIIMS New Delhi and KGMU Lucknow, he brings 
              a wealth of knowledge and experience to patient care.
            </p>

            <div className="space-y-4 mb-8">
              {qualifications.map((qual, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-4 bg-medical-blue-light rounded-xl"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{qual}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Mission */}
          <div className="animate-slide-in-right">
            <div className="bg-hero-gradient rounded-3xl p-8 md:p-10 text-primary-foreground">
              <h3 className="font-display text-2xl font-bold mb-6">
                Career Objective
              </h3>
              <p className="leading-relaxed opacity-95 mb-8">
                Passionate gastroenterologist dedicated to advancing digestive and hepatic 
                health through expert clinical care, patient education, and evidence-based 
                advocacy. Committed to using digital platforms to share reliable medical 
                knowledge, foster professional collaboration, and empower individuals to 
                make informed choices for their well-being.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 bg-white/10 rounded-xl p-4"
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
