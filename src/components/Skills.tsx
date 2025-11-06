import { Code2, Terminal, Database, Globe, Shield, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="w-8 h-8" />,
      skills: [
        { name: "C/C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Excel", logo: "https://img.icons8.com/color/48/microsoft-excel-2019--v1.png" },
      ]
    },
    {
      title: "Frameworks & Tools",
      icon: <Wrench className="w-8 h-8" />,
      skills: [
        { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      ]
    },
    {
      title: "Platforms",
      icon: <Terminal className="w-8 h-8" />,
      skills: [
        { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Canva", logo: "https://img.icons8.com/fluency/48/canva.png" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-12">
          <p className="text-primary text-sm font-medium">▸ My Skills</p>
          <h2 className="text-4xl font-bold">Technical Expertise</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-primary">{category.icon}</div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIdx) => (
                  <div 
                    key={skillIdx}
                    className="flex flex-col items-center gap-2 p-3 bg-background/50 rounded-lg hover:bg-background transition-colors"
                  >
                    <img 
                      src={skill.logo} 
                      alt={skill.name}
                      className="w-10 h-10 object-contain"
                    />
                    <span className="text-xs text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-card border border-border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {["Hardworking", "Team Player", "Multitasking", "Leadership", "Problem Solving"].map((skill, idx) => (
              <span 
                key={idx}
                className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-md text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
