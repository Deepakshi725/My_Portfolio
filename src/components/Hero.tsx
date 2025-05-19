
import { useState, useEffect } from 'react';
import { ArrowRight, Calendar, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const techStack = [
    'JavaScript • React • Node.js',
    'MongoDB • Tailwind',
    'Express • Redux',
    'Framer Motion • GSAP',
    'Full Stack Developer'
  ];

  const handleDownloadResume = () => {
    // Direct download link for the Google Drive file
    window.open('https://drive.google.com/file/d/13H8uoMOjwL9oS1enL0IVu7L9RLEpTB__/view?usp=sharing', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background blobs */}
      <div className="blob w-[400px] h-[400px] top-[-100px] right-[-100px] animate-blob-rotate"></div>
      <div className="blob w-[350px] h-[350px] bottom-[-100px] left-[-100px] animate-blob-rotate animation-delay-2"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 
            className={`text-4xl md:text-6xl font-bold mb-6 transition-opacity duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Hi, I'm <span className="text-gradient">Deepakshi</span> —
            <br />
            <span className="block mt-2">
              A Full Stack Developer creating immersive digital experiences.
            </span>
          </h1>
          
          <div 
            className={`my-8 tech-carousel transition-opacity duration-1000 ${
              isVisible ? 'opacity-100 delay-300' : 'opacity-0'
            }`}
          >
            <div className="tech-carousel-items">
              {techStack.map((tech, index) => (
                <div key={index} className="text-xl font-medium text-muted-foreground">
                  {tech}
                </div>
              ))}
            </div>
          </div>

          <div 
            className={`flex flex-col sm:flex-row gap-4 mt-8 transition-opacity duration-1000 ${
              isVisible ? 'opacity-100 delay-500' : 'opacity-0'
            }`}
          >
            <Button 
              className="neon-glow bg-neon-violet hover:bg-neon-violet/80 group"
              onClick={handleDownloadResume}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            
            <Button 
              variant="outline" 
              className="neon-border group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Send Inquiry
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="ghost" 
              className="group"
              onClick={() => window.open('https://calendly.com/deepakshisharma', '_blank')}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Book a Call
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div 
            className={`mt-16 transition-opacity duration-1000 ${
              isVisible ? 'opacity-60 delay-700' : 'opacity-0'
            }`}
          >
            <p className="text-muted-foreground">Scroll down to see my work</p>
            <div className="mt-4 animate-bounce h-6 w-6 border-r-2 border-b-2 transform rotate-45 border-white/50 mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
