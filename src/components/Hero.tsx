import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const handleClick = () => {
    window.alert('Get Started Today')
  }
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-accent/70" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-primary-foreground max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Build Amazing
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-primary-glow">
            Digital Experiences
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
          Transform your ideas into stunning, responsive web applications with cutting-edge technology and beautiful design.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="min-w-[200px]">
            Get Started Today
          </Button>
          <Button variant="outline" size="lg" className="min-w-[200px] border-white/30 text-white hover:bg-white/10">
            Learn More
          </Button>
        </div>
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary-glow/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-white/5 rounded-full blur-xl animate-pulse delay-500" />
    </div>
  );
};

export default Hero;
