import { Instagram, Youtube, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/pet_ka_doctor", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/@pet_ka_doctor", label: "YouTube" },
    { icon: Facebook, href: "https://www.facebook.com/share/16sP6UDm8p/", label: "Facebook" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl font-bold mb-4">Dr. Harshal Goel</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Dedicated to advancing digestive and hepatic health through 
              expert clinical care and patient-centered treatment.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">About</Link></li>
              <li><Link to="/experience" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Experience</Link></li>
              <li><Link to="/expertise" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Expertise</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>GI Endoscopy</li>
              <li>Colonoscopy</li>
              <li>Liver Disease Management</li>
              <li>Preventive Screening</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>MG Medical College & Hospital</li>
              <li>Jaipur, Rajasthan</li>
              <li>
                <a href="tel:+918004944424" className="hover:text-primary-foreground transition-colors">
                  +91 80049 44424
                </a>
              </li>
              <li>
                <a href="mailto:drharshalmaheshgoel@gmail.com" className="hover:text-primary-foreground transition-colors">
                  drharshalmaheshgoel@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} Ankur Sharma. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
            <Link to="/book-consultation" className="hover:text-primary-foreground transition-colors">
              Book Appointment
            </Link>
            <Link to="/contact" className="hover:text-primary-foreground transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
