import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";


export function Portfolio() {
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set([0, 1, 2, 3])); // Start with all projects visible
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleProjects((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const projects = [
    {
      title: "Sri Homes Realty",
      category: "Real Estate Website",
      description: "Professional real estate platform featuring property listings, advanced search filters, and client management system. Integrated with modern UI/UX for optimal user experience.",
      image: "/images/Sri homes.png",
      results: "+250% client inquiries",
      liveUrl: "https://srihomerealthy.netlify.app",
    },
    {
      title: "TechFlow Solutions",
      category: "SaaS Platform",
      description: "Cloud-based project management dashboard with real-time collaboration features, analytics, and automated workflow management for modern teams.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWFzJTIwZGFzaGJvYXJkJTIwbW9ja3VwfGVufDF8fHx8MTc3NjU3NzQ1MHww&ixlib=rb-4.1.0&q=80&w=1080",
      results: "40% productivity boost",
      liveUrl: "https://techflow-solutions.com",
    },
    {
      title: "Event Craft",
      category: "Event Management Platform",
      description: "Modern online event management platform with seamless booking experience, inventory management, and integrated payment gateway for premium retail.",
      image: "/images/Event craft.png",
      results: "3x sales increase",
      liveUrl: "https://eventcraft-shine-chennai.lovable.app",
    },
    {
      title: "Fit Captures",
      category: "Landing Page",
      description: "High-converting gym fitness landing page with lead generation forms, client testimonials, and service showcase for maximum conversions.",
      image: "/images/fitcaptures.png",
      results: "60% lead generation",
      liveUrl: "https://fitcaptures.netlify.com",
    },
  ];

  return (
    <section 
      id="work" 
      className="py-32 bg-background"
      style={{
         backgroundColor: '#333333ff',
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
          <h2 className="text-4xl md:text-5xl mb-6">Featured Work</h2>
          <p className="text-lg text-muted-foreground">
            A selection of projects that showcase my expertise in building high-performing digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={visibleProjects.has(index) ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: visibleProjects.has(index) ? index * 0.1 : 0 }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl bg-card border-2 border-border hover:border-[#4C1D95] hover:shadow-2xl transition-all duration-500 block hover:bg-[#4C1D95]/5 min-h-[300px]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-900">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4C1D95]/90 via-[#4C1D95]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Always visible content */}
                       <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition duration-300">
                      <div className="text-white">
                    <div className="text-sm mb-1 text-white/90 font-medium">{project.category}</div>
                    <h3 className="text-xl mb-2 font-bold">{project.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xs px-2 py-1 bg-primary text-white rounded-full font-medium">
                        {project.results}
                      </span>
                      <ArrowUpRight className="text-white" size={20} />
                    </div>
                  </div>
                </div>

                {/* Hover overlay content */}
                <motion.div
                  className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                >
                  <div className="text-white">
                    <div className="text-sm mb-2 text-white/80">{project.category}</div>
                    <h3 className="text-2xl mb-2">{project.title}</h3>
                    <p className="text-sm text-white/80 mb-4">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm px-3 py-1 bg-white/90 text-primary backdrop-blur-sm rounded-full font-medium">
                        {project.results}
                      </span>
                      <ArrowUpRight className="text-white" size={24} />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}


