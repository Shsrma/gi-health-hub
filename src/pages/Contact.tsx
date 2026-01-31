import { MapPin, Phone, Mail, Clock, Instagram, Youtube, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Dept. of Gastroenterology", "MG Medical College & Hospital", "Jaipur, Rajasthan"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 80049 44424"],
      link: "tel:+918004944424",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["drharshalmaheshgoel@gmail.com"],
      link: "mailto:drharshalmaheshgoel@gmail.com",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 9:00 AM - 5:00 PM", "Sat: 9:00 AM - 1:00 PM"],
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@pet_ka_doctor",
      url: "https://www.instagram.com/pet_ka_doctor",
      color: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400",
    },
    {
      icon: Youtube,
      name: "YouTube",
      handle: "@pet_ka_doctor",
      url: "https://youtube.com/@pet_ka_doctor",
      color: "bg-red-600",
    },
    {
      icon: Facebook,
      name: "Facebook",
      handle: "Dr. Harshal Goel",
      url: "https://www.facebook.com/share/16sP6UDm8p/",
      color: "bg-blue-600",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm mb-6">
              Get In Touch
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact <span className="text-gradient">Dr. Goel</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Have questions or ready to schedule an appointment? 
              Reach out and take the first step towards better digestive health.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="container mb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow animate-fade-up text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                {info.details.map((detail, idx) => (
                  info.link && idx === 0 ? (
                    <a 
                      key={idx} 
                      href={info.link}
                      className="text-muted-foreground text-sm block hover:text-primary transition-colors"
                    >
                      {detail}
                    </a>
                  ) : (
                    <p key={idx} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  )
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Social Media */}
        <section className="container mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Connect on <span className="text-gradient">Social Media</span>
              </h2>
              <p className="text-muted-foreground mt-2">
                Follow for health tips, updates, and educational content
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 animate-fade-up group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 rounded-xl ${social.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <social.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{social.name}</h4>
                  <p className="text-muted-foreground text-sm">{social.handle}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container">
          <div className="bg-hero-gradient rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Book an Appointment?
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
              Take the first step towards better digestive health. Schedule a consultation today.
            </p>
            <Link to="/book-consultation">
              <Button 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-lg"
              >
                Book Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
