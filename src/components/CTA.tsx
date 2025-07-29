import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
          Ready to Get Started?
        </h2>
        <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
          Join thousands of satisfied users who have transformed their digital presence with our platform.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="outline" size="lg" className="min-w-[200px] bg-white text-primary hover:bg-white/90 border-white">
            Start Your Journey
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="ghost" size="lg" className="min-w-[200px] text-primary-foreground hover:bg-white/10">
            Contact Sales
          </Button>
        </div>
        
        <div className="mt-12 flex items-center justify-center space-x-8 text-primary-foreground/70">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-foreground">10k+</div>
            <div className="text-sm">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-foreground">99.9%</div>
            <div className="text-sm">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-foreground">24/7</div>
            <div className="text-sm">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;