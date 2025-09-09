import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Digital Artist",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=150&h=150&fit=crop&crop=face",
    content: "This AI platform has revolutionized my creative process. The quality is incredible and the speed is unmatched!",
    rating: 5
  },
  {
    name: "Marcus Rivera",
    role: "Marketing Director",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "We've saved thousands on photography costs while getting better results. Our campaigns have never looked better.",
    rating: 5
  },
  {
    name: "Emily Watson",
    role: "Content Creator",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "The variety of styles available is amazing. I can create any aesthetic I want for my social media content.",
    rating: 5
  },
  {
    name: "David Kim",
    role: "Photographer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "As a professional photographer, I was skeptical at first. But this tool has become an essential part of my workflow.",
    rating: 5
  },
  {
    name: "Lisa Thompson",
    role: "Small Business Owner",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    content: "Perfect for creating product mockups and marketing materials. The ROI has been incredible for my business.",
    rating: 5
  },
  {
    name: "Alex Rodriguez",
    role: "Game Developer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    content: "Generating concept art and character designs has never been easier. This tool is a game-changer for indie developers.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            What Our Users Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied creators who have transformed their creative process
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gradient-card p-6 rounded-xl shadow-md hover:shadow-colorful hover-lift border border-border/50 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                ))}
              </div>
              
              {/* Content */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover shadow-md"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full border-2 border-card flex items-center justify-center">
                    <div className="w-2 h-2 bg-success-foreground rounded-full"></div>
                  </div>
                </div>
                
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-gradient-card rounded-full px-6 py-3 shadow-md">
            <Star className="w-5 h-5 fill-warning text-warning" />
            <span className="font-semibold text-foreground">4.9/5</span>
            <span className="text-muted-foreground">from 50,000+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;