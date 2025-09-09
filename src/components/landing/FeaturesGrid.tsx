import { Palette, Zap, Crown, Shield, Brush, Star } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Customizable Styles",
    description: "Choose from dozens of artistic styles and filters to match your vision",
    gradient: "purple"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Generate professional-quality photos in under 30 seconds",
    gradient: "pink"
  },
  {
    icon: Crown,
    title: "Premium Quality",
    description: "4K resolution output with exceptional detail and clarity",
    gradient: "orange"
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your images are secure and never shared without permission",
    gradient: "blue"
  },
  {
    icon: Brush,
    title: "Easy Editing",
    description: "Built-in editor to fine-tune your generated masterpieces",
    gradient: "green"
  },
  {
    icon: Star,
    title: "Unlimited Creativity",
    description: "No limits on imagination - create anything you can dream",
    gradient: "purple"
  }
];

const FeaturesGrid = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create stunning AI-generated photos with professional results
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="bg-gradient-card p-8 rounded-xl shadow-md hover:shadow-colorful hover-lift border border-border/50 group animate-slide-up" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-${feature.gradient === 'purple' ? 'secondary' : feature.gradient === 'pink' ? 'accent' : 'primary'} shadow-md group-hover:shadow-lg transition-smooth group-hover:scale-110 mb-6`}>
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;