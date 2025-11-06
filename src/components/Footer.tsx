import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            <span className="font-bold">Shriyanshi Tiwari</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 All rights reserved. Built with passion for cybersecurity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
