import { useState } from 'react';
import { Github, ExternalLink, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Project {
  id: number;
  title: string;
  description: string;
  features: string[];
  image: string;
  screenshots: string[];
  techStack: string[];
  github: string;
  live: string | null;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'TrailCV.AI',
    description: 'A smart resume analyzer that matches your CV against job descriptions and provides skill suggestions.',
    features: [
      'Resume vs JD matching algorithm',
      'Skill gap analysis',
      'Personalized suggestions',
      'Modern UI with dark mode'
    ],
    image: 'https://placehold.co/600x400/1f1f23/ffffff?text=TrailCV.AI',
    screenshots: [
      '/projects/trailcv/screenshot1.png',
      '/projects/trailcv/screenshot2.png',
      '/projects/trailcv/screenshot3.png',
    ],
    techStack: ['React.js', 'Node.js', 'MongoDB', 'Express', 'TailwindCSS'],
    github: 'https://github.com/Deepakshi725/TrailCV.AI',
    live: null
  },
  {
    id: 2,
    title: 'Recipe Realm',
    description: 'A beautiful recipe discovery app with smart filtering and dark mode.',
    features: [
      'Smart recipe filters',
      'Dark/light theme toggle',
      'Modal recipe previews',
      'Responsive design'
    ],
    image: 'https://placehold.co/600x400/1f1f23/ffffff?text=Recipe+Realm',
    screenshots: [
      '/projects/recipe-realm/Screenshot1.png',
      '/projects/recipe-realm/Screenshot2.png',
      '/projects/recipe-realm/Screenshot3.png',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'Spoonacular API'],
    github: 'https://github.com/Deepakshi725/recepie_realm',
    live: 'https://recipe-realm.example.com'
  },
  {
    id: 3,
    title: 'Shopsi',
    description: 'Full stack e-commerce platform with PayPal integration.',
    features: [
      'User authentication',
      'Product search and filtering',
      'Shopping cart functionality',
      'PayPal payment integration',
      'Order tracking'
    ],
    image: 'https://placehold.co/600x400/1f1f23/ffffff?text=Shopsi',
    screenshots: [
      '/projects/shopsi/one.png',
      '/projects/shopsi/two.png',
      '/projects/shopsi/three.png',
      '/projects/shopsi/four.png',
      '/projects/shopsi/five.png',
      '/projects/shopsi/six.png',
      '/projects/shopsi/seven.png',
      '/projects/shopsi/eight.png',
      '/projects/shopsi/nine.png',
      '/projects/shopsi/ten.png',
      '/projects/shopsi/eleven.png',
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'Zustand', 'TailwindCSS'],
    github: 'https://github.com/Deepakshi725/Shopsi-ecom-platform',
    live: 'https://shopsi.example.com'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-20">
      <div className="blob w-[300px] h-[300px] top-[20%] left-[-100px] animate-blob-rotate"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Projects</h2>
        <p className="text-muted-foreground mb-12 text-lg">Some of my recent work</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
            >
              <Card 
                className="h-full overflow-hidden glass-card hover:shadow-lg hover:shadow-neon-violet/20 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="badge-glow">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="badge-glow">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-sm"
                    >
                      View Details
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal with blur effect and carousel */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="sm:max-w-3xl glass-card backdrop-blur-lg border border-white/10 shadow-xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {selectedProject?.title}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {selectedProject?.description}
            </DialogDescription>
          </DialogHeader>
          <DialogClose className="absolute right-4 top-4">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>

          <div className="mt-4">
            {/* Project Screenshots Carousel */}
            <div className="mb-6">
              {selectedProject && (
                <Carousel className="w-full">
                  <CarouselContent>
                    {selectedProject.screenshots.map((screenshot, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <div className="overflow-hidden rounded-lg">
                            <img 
                              src={screenshot} 
                              alt={`${selectedProject.title} screenshot ${index + 1}`} 
                              className="w-full h-auto object-cover aspect-video max-w-full max-h-[400px]"
                            />
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              )}
            </div>

            <h4 className="text-lg font-semibold mb-2">Features:</h4>
            <ul className="space-y-1 mb-6">
              {selectedProject?.features.map((feature, i) => (
                <li key={i} className="flex items-baseline gap-2">
                  <span className="inline-block w-1 h-1 bg-neon-violet rounded-full"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold mb-2">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject?.techStack.map((tech) => (
                <span key={tech} className="badge-glow">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              <Button 
                variant="default"
                className="bg-neon-violet hover:bg-neon-violet/80"
                onClick={() => selectedProject?.github && window.open(selectedProject.github, '_blank')}
              >
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </Button>
              
              {selectedProject?.live && (
                <Button 
                  variant="outline"
                  className="neon-border"
                  onClick={() => selectedProject.live && window.open(selectedProject.live, '_blank')}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Preview
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
