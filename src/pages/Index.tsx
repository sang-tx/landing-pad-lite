import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="about">
        <CTA />
      </div>
    </div>
  );
};

export default Index;
