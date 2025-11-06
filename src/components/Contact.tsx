import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's work together on your next project
          </h2>
          <p className="text-muted-foreground text-lg">
            Collaboration is key! Let's join forces and combine our skills to tackle your next project with a powerful synergy that guarantees success.
          </p>
        </div>
        <div className="bg-card border border-border rounded-lg p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href="mailto:shreyanshitiwari128@gmail.com"
              className="flex items-center gap-4 p-4 bg-background rounded-lg hover:bg-primary/10 hover:border-primary/30 border border-border transition-all"
            >
              <Mail className="w-6 h-6 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">shreyanshitiwari128@gmail.com</p>
              </div>
            </a>
            <a 
              href="tel:+918837566173"
              className="flex items-center gap-4 p-4 bg-background rounded-lg hover:bg-primary/10 hover:border-primary/30 border border-border transition-all"
            >
              <Phone className="w-6 h-6 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">+91-8837566173</p>
              </div>
            </a>
          </div>
          <div className="flex justify-center gap-6 pt-4">
            <a 
              href="https://www.linkedin.com/in/shriyanshitiwari"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/30 rounded-lg hover:bg-primary/20 transition-all"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/shriyanshitiwari22"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/30 rounded-lg hover:bg-primary/20 transition-all"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
