"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, ExternalLink, Calendar, MapPin, Tag } from "lucide-react";
import { useRef, useState } from "react";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const categories = ["All", "Residential", "Commercial", "Luxury", "Sustainable"];

  const projects = [
    {
      id: 1,
      title: "Modern Minimalist Villa",
      category: "Residential",
      location: "Los Angeles, CA",
      year: "2024",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      description: "A stunning 5000 sq ft villa featuring clean lines and natural materials.",
      tags: ["Modern", "Minimalist", "Sustainable"],
    },
    {
      id: 2,
      title: "Urban Loft Transformation",
      category: "Residential",
      location: "New York, NY",
      year: "2024",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
      description: "Industrial space converted into a warm, inviting modern home.",
      tags: ["Industrial", "Contemporary", "Urban"],
    },
    {
      id: 3,
      title: "Luxury Penthouse Suite",
      category: "Luxury",
      location: "Miami, FL",
      year: "2023",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
      description: "Elegant penthouse with panoramic ocean views and bespoke furnishings.",
      tags: ["Luxury", "Contemporary", "Coastal"],
    },
    {
      id: 4,
      title: "Eco-Friendly Family Home",
      category: "Sustainable",
      location: "Portland, OR",
      year: "2024",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      description: "Net-zero energy home designed with sustainable materials throughout.",
      tags: ["Sustainable", "Modern", "Eco-Friendly"],
    },
    {
      id: 5,
      title: "Contemporary Office Space",
      category: "Commercial",
      location: "San Francisco, CA",
      year: "2023",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      description: "Innovative workspace fostering creativity and collaboration.",
      tags: ["Commercial", "Modern", "Flexible"],
    },
    {
      id: 6,
      title: "Coastal Retreat",
      category: "Luxury",
      location: "Malibu, CA",
      year: "2023",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80",
      description: "Serene beachfront property blending indoor and outdoor living.",
      tags: ["Luxury", "Coastal", "Tranquil"],
    },
    {
      id: 7,
      title: "Downtown Restaurant",
      category: "Commercial",
      location: "Chicago, IL",
      year: "2024",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
      description: "Sophisticated dining space with intimate ambiance.",
      tags: ["Commercial", "Hospitality", "Elegant"],
    },
    {
      id: 8,
      title: "Mountain Cabin Renovation",
      category: "Residential",
      location: "Aspen, CO",
      year: "2023",
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
      description: "Rustic charm meets modern comfort in this alpine retreat.",
      tags: ["Rustic", "Modern", "Cozy"],
    },
    {
      id: 9,
      title: "Boutique Hotel Lobby",
      category: "Commercial",
      location: "Austin, TX",
      year: "2024",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
      description: "Striking entrance space that sets the tone for luxury hospitality.",
      tags: ["Commercial", "Hospitality", "Luxury"],
    },
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const scaleProgress = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div className="min-h-screen bg-white" ref={containerRef}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold tracking-tight"
          >
            <a href="/">TCC</a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center gap-8"
          >
            <a href="/" className="text-sm font-medium hover:text-gray-600 transition-colors">
              HOME
            </a>
            <a href="/about" className="text-sm font-medium hover:text-gray-600 transition-colors">
              ABOUT US
            </a>
            <a href="/projects" className="text-sm font-medium text-gray-600">
              PROJECTS
            </a>
            <Button className="bg-[#1d1d1d] text-white hover:bg-[#2d2d2d] rounded-full px-6">
              CONTACT US
            </Button>
          </motion.div>
        </nav>
      </header>

      {/* Hero Section with Parallax */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <motion.div
          style={{ scale: scaleProgress, opacity: opacityProgress }}
          className="max-w-7xl mx-auto text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm font-medium text-gray-500 mb-4"
          >
            OUR PORTFOLIO
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl font-light mb-6 leading-tight"
          >
            Transformative<br />Designs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Explore our collection of award-winning projects that redefine modern living.
          </motion.p>
        </motion.div>

        {/* Floating Elements Background */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-40 left-10 w-32 h-32 bg-gray-100 rounded-full blur-3xl opacity-50"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-60 right-20 w-40 h-40 bg-gray-100 rounded-full blur-3xl opacity-50"
        />
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6 sticky top-20 z-40 bg-white/95 backdrop-blur-md border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#1d1d1d] text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Project - Large Showcase */}
      <section className="py-20 px-6 bg-[#1d1d1d] text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-sm font-medium mb-2 text-gray-400">FEATURED PROJECT</h3>
            <h2 className="text-5xl font-light">Award-Winning Excellence</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative h-[600px] rounded-3xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80"
                  alt="Featured project"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-[#1d1d1d] via-transparent to-transparent"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm">
                🏆 2024 Design Award Winner
              </div>
              <h3 className="text-4xl font-light leading-tight">
                Skyline Penthouse
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                A masterpiece of modern luxury living, this 8,000 sq ft penthouse showcases 
                our commitment to exceptional design. Floor-to-ceiling windows frame breathtaking 
                city views, while custom furnishings and cutting-edge technology create an 
                unparalleled living experience.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <span className="text-sm">Manhattan, NY</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <span className="text-sm">Completed 2024</span>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <Button className="bg-white text-[#1d1d1d] hover:bg-gray-100 rounded-full px-8">
                  View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section with Animated Counters */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-light mb-4">Projects by Numbers</h2>
            <p className="text-gray-600">Our impact in creating exceptional spaces</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Delivered", suffix: "" },
              { number: "50M+", label: "Sq Ft Designed", suffix: "" },
              { number: "98%", label: "Client Satisfaction", suffix: "" },
              { number: "45", label: "Awards Won", suffix: "+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                  className="mb-3"
                >
                  <span className="text-5xl md:text-6xl font-light bg-gradient-to-r from-[#1d1d1d] via-gray-700 to-[#1d1d1d] bg-clip-text text-transparent">
                    {stat.number}
                  </span>
                </motion.div>
                <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-sm font-medium mb-2 text-gray-500">TESTIMONIALS</h3>
            <h2 className="text-5xl font-light">What Clients Say</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-3xl shadow-sm"
          >
            <p className="text-2xl font-light leading-relaxed mb-8 text-gray-700">
              "Working with TCC was an absolute pleasure. They transformed our vision into reality, 
              exceeding every expectation. The attention to detail and commitment to excellence is unmatched."
            </p>
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80"
                  alt="Client"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium">James Wilson</h4>
                <p className="text-sm text-gray-600">CEO, Tech Innovations</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#1d1d1d] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
              Start Your Project<br />Journey Today
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Let's create something extraordinary together. Our team is ready to bring your vision to life.
            </p>
            <Button className="bg-white text-[#1d1d1d] hover:bg-gray-100 rounded-full px-8 py-6 text-base">
              Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#1d1d1d] text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-2xl font-bold">TCC</div>
            <p className="text-sm text-gray-400">© 2024 The Contrary Chair. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Project Card Component with Advanced Animations
function ProjectCard({ project, index }: { project: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group cursor-pointer"
    >
      <div className="relative h-[400px] rounded-2xl overflow-hidden mb-4 bg-gray-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110"
        />
        
        {/* Overlay with gradient */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-gradient-to-t from-[#1d1d1d] via-[#1d1d1d]/60 to-transparent"
        />

        {/* Animated Corner Accent */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{
            scale: isHovered ? 1 : 0,
            rotate: isHovered ? 45 : 0,
          }}
          transition={{ duration: 0.4, type: "spring" }}
          className="absolute top-6 right-6 w-16 h-16 bg-white/20 backdrop-blur-sm"
        />

        {/* Hover Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20,
          }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="absolute bottom-6 left-6 right-6 text-white"
        >
          <div className="flex items-center gap-3 mb-3">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{project.location}</span>
            <span className="text-sm text-gray-300">•</span>
            <Calendar className="h-4 w-4" />
            <span className="text-sm">{project.year}</span>
          </div>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-[#1d1d1d] rounded-full text-sm"
          >
            View Project <ExternalLink className="ml-2 h-3 w-3" />
          </Button>
        </motion.div>

        {/* Category Badge */}
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="absolute top-6 left-6"
        >
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-[#1d1d1d]">
            {project.category}
          </span>
        </motion.div>
      </div>

      {/* Project Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <h3 className="text-xl font-medium mb-2 group-hover:text-gray-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string, i: number) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
              className="px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-600"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
