import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { Sparkles, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPHN0cm9rZSBkYXNoYXJyYXk9IjEiIHN0cm9rZT0iIzQ3NDdhNzIwIiBzdHJva2Utd2lkdGg9IjEiPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyMCIvPgo8L3N0cm9rZT4KPC9nPgo8L3N2Zz4=')] opacity-10"></div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-sm rounded-full px-4 py-2 text-primary-foreground">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">AI-Powered Photo Generation</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-primary-foreground">
                Create Stunning
                <span className="block bg-gradient-accent bg-clip-text text-transparent">
                  AI Photos
                </span>
                in Seconds
              </h1>
              
              <p className="text-xl lg:text-2xl text-primary-foreground/90 font-light leading-relaxed max-w-lg">
                Transform your ideas into breathtaking visuals with our cutting-edge AI technology. 
                Professional-quality results, lightning-fast generation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Try Free Now
              </Button>
              <Button variant="outline" size="xl" className="bg-card/10 backdrop-blur-sm border-primary-foreground/20">
                <Play className="w-5 h-5" />
                See Examples
              </Button>
            </div>
            
            <div className="flex items-center gap-8 text-primary-foreground/80">
              <div className="text-center">
                <div className="text-2xl font-bold">10M+</div>
                <div className="text-sm">Photos Created</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">4.9★</div>
                <div className="text-sm">User Rating</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Hero Image */}
          <div className="relative animate-zoom-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-accent rounded-xl blur-lg opacity-50 animate-pulse"></div>
              <img 
                src={heroImage} 
                alt="AI Generated Portrait Example" 
                className="relative rounded-xl shadow-colorful hover-lift w-full h-auto max-w-lg mx-auto"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-card rounded-lg p-3 shadow-lg animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">AI Processing</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-card rounded-lg p-3 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-sm font-medium text-success">Generated in 2.3s</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;