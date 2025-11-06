import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-primary text-lg font-medium">Hello, My Name Is</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              SHRIYANSHI TIWARI
            </h1>
            <p className="text-muted-foreground text-lg">
              An aspiring network engineer passionate about cybersecurity and building secure digital infrastructure.
            </p>
            <div className="flex gap-4 pt-4">
              <Button 
                variant="default" 
                size="lg"
                className="bg-primary hover:bg-primary/90 cyber-glow"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary/10"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-lg blur-3xl"></div>
            <div className="relative bg-primary/10 rounded-lg overflow-hidden border border-primary/30">
              <img 
                src={profileImg} 
                alt="Shriyanshi Tiwari" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
