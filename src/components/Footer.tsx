import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">Dr. Harshal Goel</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Dedicated to advancing digestive and hepatic health through 
              expert clinical care and patient-centered treatment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">About</a></li>
              <li><a href="#experience" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Experience</a></li>
              <li><a href="#expertise" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Expertise</a></li>
              <li><a href="#contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>MG Medical College & Hospital</li>
              <li>Jaipur, Rajasthan</li>
              <li>+91 98765 43210</li>
              <li>dr.harshalgoel@email.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} Dr. Harshal Mahesh Goel. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/60 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-destructive" /> for better healthcare
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
