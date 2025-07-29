import { Code, Zap, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Modern Development",
    description: "Built with cutting-edge technologies and best practices for optimal performance and maintainability."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed with instant loading times and smooth interactions across all devices."
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security measures and robust architecture ensure your data stays protected."
  },
  {
    icon: Users,
    title: "User-Focused",
    description: "Designed with user experience at the forefront, creating intuitive and delightful interactions."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the powerful features that make our platform the perfect choice for your next project.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="mb-4">
                <feature.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;