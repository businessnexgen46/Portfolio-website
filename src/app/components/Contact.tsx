import { motion } from "motion/react";
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  Linkedin, 
  Github, 
  Instagram, 
  Facebook, 
  Twitter,
  ArrowRight
} from "lucide-react";
import { ContactForm } from "../../components/ui/Form";

export function Contact() {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/9940037968",
      color: "hover:bg-gradient-to-br hover:from-[#25D366] hover:via-[#25D366] hover:to-[#25D366] hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/nex-gen-services-19a629400/",
      color: "hover:bg-gradient-to-br hover:from-[#0A66C2] hover:via-[#0A66C2] hover:to-[#0A66C2] hover:text-white",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/businessnexgen46",
      color: "hover:bg-gradient-to-br hover:from-[#181717] hover:via-[#181717] hover:to-[#181717] hover:text-white",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/nexgen_06/",
      color: "hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCB045] hover:text-white",
    },
    {
      name: "Threads",
      icon: MessageCircle,
      url: "https://www.threads.com/@nexgen_06",
      color: "hover:bg-gradient-to-br hover:from-[  #000000] hover:via-[#000000] hover:to-[#000000] hover:text-white",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/profile.php?id=61574358656270",
      color: "hover:bg-gradient-to-br hover:from-[#1877F2] hover:via-[#1877F2] hover:to-[#1877F2] hover:text-white",
    },
    {
      name: "X (Twitter)",
      icon: Twitter,
      url: "https://x.com/nex_gen06",
      color: "hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCB045] hover:text-white",
    },
  ];

  return (
    <section 
      id="contact" 
      className="py-32 bg-gradient-to-br from-primary/5 via-transparent to-accent/10"
      style={{
        background: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), transparent, rgba(243, 244, 246, 0.1))',
        color: '#000000'
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-6xl mb-6 font-bold">
            Let's build a website that actually brings you clients.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Ready to transform your online presence into a client-generating machine? 
            Get in touch and let's create something remarkable together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.a
              href="tel:+1234567890"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#4C1D95] text-white rounded-lg flex items-center justify-center gap-2 hover:shadow-xl transition-shadow"
            >
              <Phone size={20} />
              +91 99400 37968
            </motion.a>
            <motion.a
              href="mailto:business.nexgen@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent text-accent-foreground rounded-lg flex items-center justify-center gap-2 hover:shadow-xl transition-shadow"
            >
              <Mail size={20} />
              business.nexgen@gmail.com
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-20"
        >
          <ContactForm />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-12">Connect With Me</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className={`bg-background border border-border rounded-xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 ${social.color}`}
              >
                <social.icon size={24} />
                <span className="text-sm font-medium">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-muted-foreground">
            I typically respond within 24 hours. Let's discuss how I can help grow your business.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
