import sample1 from "@/assets/sample-1.jpg";
import sample2 from "@/assets/sample-2.jpg";
import sample3 from "@/assets/sample-3.jpg";
import sample4 from "@/assets/sample-4.jpg";
import sample5 from "@/assets/sample-5.jpg";
import sample6 from "@/assets/sample-6.jpg";

const galleryImages = [
  { src: sample1, alt: "AI-generated fantasy landscape" },
  { src: sample2, alt: "Professional AI portrait" },
  { src: sample3, alt: "Futuristic cityscape" },
  { src: sample4, alt: "Artistic portrait with abstract background" },
  { src: sample5, alt: "Magical nature scene" },
  { src: sample6, alt: "Cosmic space scene" }
];

const Gallery = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            AI Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the incredible variety and quality of AI-generated photos created by our community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-colorful transition-smooth animate-slide-up hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-80 object-cover group-hover:scale-110 transition-smooth"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-80 transition-smooth flex items-center justify-center">
                <div className="text-center text-primary-foreground p-4">
                  <div className="text-sm font-medium opacity-90">AI Generated</div>
                  <div className="text-xs opacity-70 mt-1">{image.alt}</div>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-foreground">
                AI Art
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-muted-foreground text-sm">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span>New images generated every minute</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;