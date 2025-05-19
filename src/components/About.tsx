import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border-2 border-neon-violet/20">
              <img 
                src="/projects/profile_pic/myself.jpg" 
                alt="Deepakshi Sharma" 
                className="w-full h-auto max-h-[500px] object-cover"
              />
            </div>
            
            <div className="absolute -bottom-4 -right-4 glass-card rounded-lg p-4 max-w-xs">
              <p className="text-sm font-medium italic">
                "I believe the best digital experiences come from a perfect blend of creativity, functionality, and attention to detail."
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
            <p className="text-muted-foreground mb-6">Full Stack Developer & Tech Mentor</p>
            
            <div className="space-y-4">
              <p>
                I'm a passionate Full Stack Developer with expertise in creating immersive digital experiences. My journey in tech began with a curiosity about how websites work, which quickly evolved into a deep passion for building applications that are both beautiful and functional.
              </p>
              
              <p>
                As a tech mentor at Kalvium, I've had the privilege of guiding over 50 students through their web development journeys, conducting 70+ sessions that blend theory with hands-on practice.
              </p>
              
              <p>
                My approach to development combines technical excellence with creative problem-solving. I believe in writing clean, maintainable code that delivers exceptional user experiences.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open source, or sharing my knowledge through mentoring and technical writing.
              </p>
            </div>
            
            <div className="mt-8 space-y-6">
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="outline" 
                  className="neon-border group"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button 
                  variant="ghost" 
                  className="group"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
