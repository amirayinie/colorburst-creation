import { Upload, Sparkles, Download } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload",
    description: "Upload your reference image or describe what you want to create",
    color: "purple"
  },
  {
    icon: Sparkles,
    title: "Generate",
    description: "Our AI processes your input and creates stunning variations",
    color: "pink"
  },
  {
    icon: Download,
    title: "Download",
    description: "Get your high-quality AI-generated photos instantly",
    color: "orange"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to transform your ideas into stunning AI-generated photos
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center group animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-xl bg-gradient-${step.color === 'purple' ? 'secondary' : step.color === 'pink' ? 'accent' : 'primary'} shadow-colorful group-hover:shadow-glow transition-smooth group-hover:scale-110 mb-6`}>
                  <Icon className="w-10 h-10 text-primary-foreground" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                
                {/* Step number */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                  {index + 1}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Connection lines for desktop */}
        <div className="hidden md:block relative max-w-4xl mx-auto">
          <div className="absolute top-10 left-1/6 right-1/6 h-0.5 bg-gradient-primary opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;