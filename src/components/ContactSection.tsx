import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Dept. of Gastroenterology", "MG Medical College & Hospital", "Jaipur, Rajasthan"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 12345 67890"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["dr.harshalgoel@email.com", "appointments@drgoel.in"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 9:00 AM - 5:00 PM", "Sat: 9:00 AM - 1:00 PM"],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Book Your <span className="text-gradient">Consultation</span>
          </h2>
          <p className="text-muted-foreground">
            Have questions or ready to schedule an appointment? 
            Reach out and take the first step towards better digestive health.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex gap-5 p-6 bg-background rounded-2xl shadow-card hover:shadow-card-hover transition-shadow animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-background rounded-2xl p-8 shadow-card animate-fade-up" style={{ animationDelay: "200ms" }}>
            <h3 className="font-display text-xl font-bold text-foreground mb-6">
              Send a Message
            </h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input 
                    placeholder="Your name" 
                    className="bg-card border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input 
                    placeholder="+91 XXXXX XXXXX" 
                    className="bg-card border-border focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input 
                  type="email"
                  placeholder="your@email.com" 
                  className="bg-card border-border focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input 
                  placeholder="How can we help you?" 
                  className="bg-card border-border focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Describe your symptoms or reason for consultation..." 
                  rows={4}
                  className="bg-card border-border focus:border-primary resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-medical-blue-dark text-primary-foreground py-6"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
