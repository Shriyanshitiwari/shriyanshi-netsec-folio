const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-12">
          <p className="text-primary text-sm font-medium">▸ About me</p>
          <h2 className="text-4xl font-bold">Who Am I</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              My name is Shriyanshi Tiwari, and I'm an aspiring network engineer with a strong passion for cybersecurity. 
              Currently pursuing my Bachelor's in Computer Application at Lovely Professional University with a CGPA of 7.81.
            </p>
            <p>
              My primary focus is on network security and secure system development. I specialize in building secure applications 
              and implementing cybersecurity best practices. My technical skills include proficiency in C, C++, JavaScript, and 
              Python, along with frameworks like Node.js for backend development.
            </p>
            <p>
              I've completed multiple certifications including Cyber Security Fundamentals from IBM and have hands-on experience 
              with projects involving secure file sharing systems, hash-based security implementations, and web development. 
              I'm constantly learning and staying up-to-date with the latest security technologies to enhance my skills and 
              deliver cutting-edge solutions.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary">Bachelor's in Computer Application</h4>
                  <p className="text-sm text-muted-foreground">Lovely Professional University | 2022 - Present</p>
                  <p className="text-sm">CGPA: 7.81</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Higher Secondary School</h4>
                  <p className="text-sm text-muted-foreground">TATA DAV School | 2019-20</p>
                  <p className="text-sm">Percentage: 86%</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/shriyanshitiwari" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-muted-foreground">|</span>
              <a 
                href="https://github.com/shriyanshitiwari22" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
