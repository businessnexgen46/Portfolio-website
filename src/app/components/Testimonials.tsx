import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Michael Rodriguez",
      role: "Founder, StartupHub",
      content: "Sabarish transformed our vision into reality. The website he built not only looks stunning but has increased our lead generation by 300%. His attention to detail and technical expertise are unmatched.",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "Marketing Director, GrowthCo",
      content: "Working with Sabarish was a game-changer. He delivered ahead of schedule and the results speak for themselves—our bounce rate dropped by 60% and conversions are through the roof.",
      rating: 5,
    },
    {
      name: "David Kim",
      role: "CEO, TechVentures",
      content: "Professional, responsive, and incredibly talented. Sabarish understood our needs perfectly and delivered a website that truly represents our brand. Highly recommended!",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl mb-6">Client Success Stories</h2>
          <p className="text-lg text-muted-foreground">
            Don't just take my word for it—hear from the clients I've helped grow their businesses.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-96 md:h-80">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: currentIndex === index ? 1 : 0,
                  x: currentIndex === index ? 0 : currentIndex > index ? -100 : 100,
                  scale: currentIndex === index ? 1 : 0.9,
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="bg-card border border-border rounded-2xl p-8 md:p-12 h-full flex flex-col justify-between">
                  <div>
                    <Quote className="text-primary/20 mb-6" size={48} />
                    <p className="text-lg md:text-xl mb-8">{testimonial.content}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="mb-1">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} className="fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index ? "bg-primary w-8" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
