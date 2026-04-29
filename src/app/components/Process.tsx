import { motion } from "motion/react";
import { Search, Palette, Code2, Rocket } from "lucide-react";

export function Process() {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Discovery",
      description: "Deep dive into your business goals, target audience, and competitive landscape. We define success metrics and project scope.",
    },
    {
      icon: Palette,
      number: "02",
      title: "Design",
      description: "Create wireframes, mockups, and prototypes. Iterate based on your feedback until we nail the perfect design.",
    },
    {
      icon: Code2,
      number: "03",
      title: "Development",
      description: "Build your website with clean, modern code. Regular updates and previews keep you in the loop throughout.",
    },
    {
      icon: Rocket,
      number: "04",
      title: "Launch",
      description: "Thorough testing, optimization, and deployment. Post-launch support ensures everything runs smoothly.",
    },
  ];

  return (
    <section id="process" className="py-32 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl mb-6">My Process</h2>
          <p className="text-lg text-muted-foreground">
            A proven approach to delivering exceptional results, on time and within budget.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" style={{ top: '80px' }} />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative bg-background border-2 border-border rounded-2xl w-40 h-40 flex items-center justify-center mb-6 hover:border-[#4C1D95]/50 transition-colors"
                  >
                    <div className="absolute -top-4 -right-4 text-6xl opacity-10">
                      {step.number}
                    </div>
                    <step.icon className="text-[#4C1D95] relative z-10" size={48} />
                  </motion.div>

                  <h3 className="text-xl mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
