import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Perfect for trying out AI photo generation",
    icon: Star,
    features: [
      "5 AI photos per month",
      "Basic style options",
      "Standard quality (1080p)",
      "Community support",
      "Watermark on images"
    ],
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
    popular: false
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "Ideal for creators and professionals",
    icon: Zap,
    features: [
      "500 AI photos per month",
      "All style options",
      "4K quality downloads",
      "Priority support",
      "No watermarks",
      "Commercial license",
      "Advanced editing tools"
    ],
    buttonText: "Start Pro Trial",
    buttonVariant: "hero" as const,
    popular: true
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description: "For teams and large-scale projects",
    icon: Crown,
    features: [
      "Unlimited AI photos",
      "Custom style training",
      "8K quality downloads",
      "24/7 premium support",
      "API access",
      "Team collaboration",
      "Custom branding",
      "Bulk generation tools"
    ],
    buttonText: "Contact Sales",
    buttonVariant: "gradient" as const,
    popular: false
  }
];

const PricingPlans = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Simple Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your creative needs. Upgrade or downgrade anytime.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div 
                key={index} 
                className={`relative bg-gradient-card p-8 rounded-xl shadow-md hover:shadow-colorful hover-lift border transition-smooth animate-slide-up ${
                  plan.popular 
                    ? 'border-primary scale-105 shadow-glow' 
                    : 'border-border/50'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-md">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-${plan.name === 'Pro' ? 'primary' : plan.name === 'Enterprise' ? 'accent' : 'secondary'} shadow-md mb-4`}>
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-success rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-success-foreground" />
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant={plan.buttonVariant} 
                  size="lg" 
                  className="w-full"
                >
                  {plan.buttonText}
                </Button>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12 text-muted-foreground">
          <p className="text-sm">All plans include 30-day money-back guarantee • No setup fees • Cancel anytime</p>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;