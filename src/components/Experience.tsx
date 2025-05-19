
import { CheckCircle } from 'lucide-react';

interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  details: string[];
}

const timelineData: TimelineItem[] = [
  {
    title: 'Tech Mentor',
    organization: 'Kalvium',
    period: 'May 2024 - Present',
    details: [
      'Conducted 70+ sessions on web development',
      'Mentored 50+ students',
      'Developed curriculum for React and Node.js',
      'Created project-based learning materials'
    ]
  },
  {
    title: 'M.Tech',
    organization: 'VIT Vellore',
    period: '2022 - 2024',
    details: [
      'CGPA: 8.76',
      'Specialization in Computer Science',
      'Research focus on web technologies',
      'Projects on AI and web development'
    ]
  },
  {
    title: 'B.Tech',
    organization: 'DAV University',
    period: '2018 - 2021',
    details: [
      'CGPA: 8.0',
      'Computer Science and Engineering',
      'Academic excellence award',
      'Active member of coding club'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Experience & Education</h2>
        <p className="text-muted-foreground mb-12 text-lg">My professional journey</p>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-neon-violet via-neon-blue to-neon-cyan"></div>
          
          {timelineData.map((item, index) => (
            <div 
              key={index}
              className={`relative mb-20 opacity-0 animate-slide-up`}
              style={{ animationDelay: `${index * 0.3}s`, animationFillMode: 'forwards' }}
            >
              <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <div className="md:mx-8">
                    <div className={`glass-card rounded-lg p-6 shadow-lg z-10 
                      ${index % 2 === 0 ? 'md:ml-4' : 'md:mr-4'}`}
                    >
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-neon-violet mb-2">{item.organization}</p>
                      <p className="text-sm text-muted-foreground mb-4">{item.period}</p>
                      
                      <ul className="space-y-2">
                        {item.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 mt-0.5 text-neon-violet" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full bg-neon-violet shadow-lg shadow-neon-violet/50 z-10"></div>
                
                {/* Empty space for the other side */}
                <div className="md:w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
