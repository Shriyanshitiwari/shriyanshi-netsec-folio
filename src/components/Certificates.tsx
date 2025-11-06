import { Award } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Cyber Security Fundamentals",
      issuer: "IBM",
      date: "Jul 2024",
    },
    {
      title: "Hack-IOT",
      issuer: "LPU",
      date: "Feb 2024",
    },
    {
      title: "Interfacing with Arduino",
      issuer: "COURSERA",
      date: "Oct 2023",
    },
    {
      title: "C and Python Language",
      issuer: "APTECH INSTITUTE",
      date: "Jun 2022",
    }
  ];

  return (
    <section id="certificates" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-12">
          <p className="text-primary text-sm font-medium">▸ Certifications</p>
          <h2 className="text-4xl font-bold">Professional Credentials</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, idx) => (
            <div 
              key={idx}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
                <p className="text-sm text-primary mb-1">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
