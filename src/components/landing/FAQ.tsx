import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does AI photo generation work?",
    answer: "Our AI uses advanced machine learning models trained on millions of images to understand visual patterns and styles. When you provide a prompt or upload an image, the AI analyzes it and generates new, unique photos based on your specifications while maintaining high quality and artistic coherence."
  },
  {
    question: "What image formats and resolutions are supported?",
    answer: "We support all major image formats including JPEG, PNG, and WebP. Our AI can generate images in various resolutions from 512x512 up to 4K (4096x4096) depending on your plan. Higher resolution outputs are available for Pro and Enterprise users."
  },
  {
    question: "Can I use the generated images for commercial purposes?",
    answer: "Yes! Pro and Enterprise plan users receive full commercial rights to all generated images. Free plan users can use images for personal projects, but commercial use requires upgrading to a paid plan. All generated images are unique and don't infringe on existing copyrights."
  },
  {
    question: "How long does it take to generate a photo?",
    answer: "Most images are generated within 15-30 seconds depending on complexity and current server load. Simple portraits typically take 10-15 seconds, while complex scenes with multiple elements may take up to 45 seconds. Pro users get priority processing for faster generation."
  },
  {
    question: "What styles and themes can I create?",
    answer: "Our AI supports a vast range of styles including photorealistic portraits, artistic illustrations, fantasy art, landscapes, abstract designs, vintage photography, modern digital art, and much more. You can also combine multiple styles or create custom variations."
  },
  {
    question: "Is my data and generated content private?",
    answer: "Absolutely. We take privacy seriously. Your uploaded images and generated content are encrypted and stored securely. We never share, sell, or use your content for training without explicit permission. You can delete your content anytime, and we offer enterprise-grade security for business users."
  },
  {
    question: "Can I edit or modify the generated images?",
    answer: "Yes! Our platform includes built-in editing tools for basic adjustments like brightness, contrast, and cropping. Pro users get access to advanced editing features, and you can always download your images to edit in external software like Photoshop or GIMP."
  },
  {
    question: "What if I'm not satisfied with the results?",
    answer: "We offer unlimited regenerations within your plan limits, so you can keep trying until you get the perfect result. We also provide detailed style guides and prompting tips to help you achieve better results. If you're still not satisfied, we offer a 30-day money-back guarantee."
  }
];

const FAQ = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our AI photo generation platform
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto animate-slide-up">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-card rounded-lg border border-border/50 px-6 shadow-sm hover:shadow-md transition-smooth"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-smooth py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary-dark transition-smooth hover:scale-105"
            >
              Contact Support
            </a>
            <a 
              href="#docs" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border hover:bg-muted transition-smooth hover:scale-105"
            >
              View Documentation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;