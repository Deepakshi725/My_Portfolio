
import { useState } from 'react';
import { Calendar, Download, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent("Inquiry on Portfolio website");
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:sharmapanchi99@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show toast and reset form after a short delay
    setTimeout(() => {
      toast({
        title: "Email client opened!",
        description: "Your message is ready to send through your email client.",
      });
      
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  const handleWhatsAppClick = () => {
    // Use the correct WhatsApp URL format with international format
    window.open(`https://wa.me/917018536983`, '_blank');
  };

  const handleDownloadResume = () => {
    // Open Google Drive resume link in a new tab and download it
    const resumeUrl = 'https://drive.google.com/uc?export=download&id=13H8uoMOjwL9oS1enL0IVu7L9RLEpTB__';
    window.open(resumeUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Get in Touch</h2>
            <p className="text-muted-foreground mb-6 text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-secondary/50 border-secondary"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-secondary/50 border-secondary"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="I'd like to discuss..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-secondary/50 border-secondary h-32"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-neon-violet hover:bg-neon-violet/80 neon-glow"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Opening Email...' : 'Send Message'}
              </Button>
            </form>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/deepakshi-s-609b1b250/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 rounded-full bg-secondary/50 hover:bg-neon-violet/20 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/Deepakshi725" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 rounded-full bg-secondary/50 hover:bg-neon-violet/20 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a 
                  href="https://leetcode.com/u/Deepakshi99/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 rounded-full bg-secondary/50 hover:bg-neon-violet/20 transition-colors flex items-center justify-center"
                >
                  <span className="font-bold text-sm">LC</span>
                  <span className="sr-only">LeetCode</span>
                </a>
              </div>
            </div>
            
            {/* GitHub contribution chart */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">GitHub Contributions</h3>
              <div className="bg-secondary/30 p-4 rounded-lg overflow-hidden">
                <img 
                  src={`https://ghchart.rshah.org/Deepakshi725`} 
                  alt="Deepakshi's GitHub Contribution Chart"
                  className="w-full h-auto"
                />
                <p className="text-xs text-center mt-2 text-muted-foreground">
                  <a 
                    href="https://github.com/Deepakshi725" 
                    target="_blank" 
                    rel="noreferrer"
                    className="hover:text-neon-violet transition-colors"
                  >
                    @Deepakshi725
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="glass-card p-8 rounded-lg space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <p className="text-muted-foreground mb-2">
                  Feel free to reach out through any of these channels:
                </p>
              </div>
              
              <div>
                <p className="font-medium mb-1">Email</p>
                <a 
                  href="mailto:sharmapanchi99@gmail.com" 
                  className="text-neon-blue hover:text-neon-violet transition-colors"
                >
                  sharmapanchi99@gmail.com
                </a>
              </div>
              
              <div>
                <p className="font-medium mb-1">WhatsApp</p>
                <button 
                  onClick={handleWhatsAppClick}
                  className="text-neon-blue hover:text-neon-violet transition-colors"
                >
                  +91 70185 36983
                </button>
              </div>
              
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4">Schedule a Call</h3>
                <p className="text-muted-foreground mb-4">
                  Want to discuss something in detail? Book a call with me.
                </p>
                
                <div className="space-y-4">
                  <Button 
                    variant="outline" 
                    className="w-full neon-border"
                    onClick={() => window.open('https://calendly.com/deepakshisharma/30min', '_blank')}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Book a Call
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full neon-border"
                    onClick={handleDownloadResume}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
