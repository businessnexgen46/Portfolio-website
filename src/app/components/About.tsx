import { motion } from "motion/react";
import { Code2, Palette, Rocket, Target } from "lucide-react";

export function About() {
  const cards = [
    {
      icon: Code2,
      title: "Technical Expertise",
      description: "Full-stack development with React, Next.js, and modern web technologies. Clean, maintainable, and scalable code.",
    },
    {
      icon: Palette,
      title: "Design Excellence",
      description: "Beautiful, intuitive interfaces that users love. Every pixel crafted with attention to detail and purpose.",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focused on metrics that matter: conversions, engagement, and growth. Your success is my success.",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Quick turnaround without compromising quality. Your project launched on time, every time.",
    },
  ];

  return (
    <section id="about" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <h2 className="text-4xl md:text-5xl mb-6">
            Crafting digital experiences that convert visitors into customers
          </h2>
          <p className="text-lg text-muted-foreground">
            I'm a freelance web developer with a passion for building high-performance websites that drive real business results. With 5+ years of experience, I combine technical excellence with design thinking to create web experiences that don't just look good—they work hard for your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-card border border-border rounded-2xl p-8 hover:shadow-2xl hover:border-primary/20 transition-all duration-300"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <card.icon className="text-[#4C1D95]" size={28} />
              </div>
              <h3 className="text-xl mb-3">{card.title}</h3>
              <p className="text-muted-foreground">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
