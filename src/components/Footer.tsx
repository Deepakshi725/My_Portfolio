
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-xl font-bold text-gradient">
              Deepakshi.dev
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Full Stack Developer creating immersive digital experiences
            </p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="https://www.linkedin.com/in/deepakshi-s-609b1b250/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-neon-violet transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            
            <a 
              href="https://github.com/Deepakshi725" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-neon-violet transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            
            <a 
              href="https://leetcode.com/u/Deepakshi99/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-neon-violet transition-colors"
            >
              <span className="font-bold">LC</span>
              <span className="sr-only">LeetCode</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {currentYear} Deepakshi Sharma. All rights reserved.
          </p>
          
          <p className="text-sm text-muted-foreground">
            Built with ❤️ using React, Framer Motion, Tailwind & Vite.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
