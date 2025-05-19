
interface SkillCategory {
  name: string;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: ['React', 'Tailwind CSS', 'ShadCN', 'HTML/CSS', 'JavaScript', 'TypeScript']
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express', 'REST API']
  },
  {
    name: 'Database',
    skills: ['MongoDB', 'SQL', 'Mongoose', 'PostgreSQL']
  },
  {
    name: 'Tools',
    skills: ['Git', 'Postman', 'Vercel', 'Figma', 'Bruno', 'VS Code']
  },
  {
    name: 'Other',
    skills: ['Redux', 'Zustand', 'Framer Motion', 'JWT', 'OAuth']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-20">
      <div className="blob w-[200px] h-[200px] bottom-[20%] right-[-50px] animate-blob-rotate"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Skills</h2>
        <p className="text-muted-foreground mb-12 text-lg">Technologies I work with</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div 
              key={category.name}
              className="glass-card p-6 rounded-lg opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
            >
              <h3 className="text-xl font-bold mb-4 text-gradient">{category.name}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="badge-glow animate-pulse-glow"
                    style={{ 
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${3 + Math.random() * 2}s`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
