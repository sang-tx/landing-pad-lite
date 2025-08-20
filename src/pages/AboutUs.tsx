import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Navigation from "@/components/Navigation";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="about">
        <CTA />
      </div>
    </div>
  );
};

export default AboutUs;
