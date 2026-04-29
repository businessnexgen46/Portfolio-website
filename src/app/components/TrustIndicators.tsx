import { motion } from "motion/react";
import { Star } from "lucide-react";

export function TrustIndicators() {
  const logos = ["Vercel", "Stripe", "Linear", "Figma", "Notion"];

  return (
    <section className="py-20 border-y border-border bg-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mb-12"
        >
          Trusted by innovative companies worldwide
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center mb-16">
          {logos.map((logo, index) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-xl text-muted-foreground/50 hover:text-foreground transition-colors"
            >
              {logo}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-background border border-border rounded-2xl p-8"
        >
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="fill-[gold] text-gold" />
            ))}
          </div>
          <p className="text-lg mb-4">
            "Working with NEXGEN was transformative for our business. Our conversion rate tripled within the first month of launching the new site."
          </p>
          <div>
            <div className="text-sm">charan</div>
            <div className="text-sm text-muted-foreground">CEO fitcaptures</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
