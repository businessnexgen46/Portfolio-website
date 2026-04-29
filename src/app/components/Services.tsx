import { motion } from "motion/react";
import { Code, Zap, Globe, Rocket } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Code,
      title: "SaaS Website Development",
      description: "Custom SaaS platforms that handle subscriptions, user management, and recurring billing seamlessly.",
      outcomes: ["Automated revenue streams", "Scalable user management", "Secure payment processing"],
    },
    {
      icon: Globe,
      title: "Dynamic Websites",
      description: "Interactive websites with real-time updates, user accounts, and content management systems.",
      outcomes: ["Fresh content automatically", "User engagement tools", "Easy content updates"],
    },
    {
      icon: Zap,
      title: "Static Websites",
      description: "Lightning-fast, secure static sites perfect for portfolios, landing pages, and marketing sites.",
      outcomes: ["Blazing fast load times", "99.9% uptime guarantee", "Minimal maintenance costs"],
    },
    {
      icon: Rocket,
      title: "Landing Pages",
      description: "High-converting landing pages optimized for lead generation and sales conversions.",
      outcomes: ["Higher conversion rates", "Better lead quality", "Improved ROI on ads"],
    },
  ];

  return (
    <section 
      id="services" 
      className="py-32 bg-muted/20"
      style={{
        backgroundColor: '#f9fafb',
        color: '#000000'
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl mb-6">Services That Get You Clients</h2>
          <p className="text-lg text-muted-foreground">
            Specialized web development services focused on one thing: turning your website into a client acquisition machine.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="group bg-background border border-border rounded-2xl p-8 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />

              <div className="relative">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                <div className="space-y-2">
                  {service.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
