import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Ananya Naik
              </h3>
              <p className="text-muted-foreground">
                Computer Science student passionate about creating innovative web solutions and exploring machine learning.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </a>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </nav>
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/NaikAnanya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ananya-naik-0934a82a7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:naikananya682004@gmail.com"
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border text-center">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              © {currentYear} Ananya Naik. Made with{" "}
              <Heart className="w-4 h-4 text-destructive fill-destructive" /> and passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
