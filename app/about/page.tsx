"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Users, Target, Award, Heart, Lightbulb, TrendingUp } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Team Members" },
    { number: "98%", label: "Client Satisfaction" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We pour our hearts into every project, creating spaces that truly resonate with our clients' desires.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly exploring new design trends and technologies to deliver cutting-edge solutions.",
    },
    {
      icon: Target,
      title: "Precision",
      description: "Meticulous attention to detail ensures every element is perfectly placed and executed.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe the best results come from working closely with our clients and partners.",
    },
  ];

  const team = [
    {
      name: "Sarah Anderson",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    },
    {
      name: "Michael Chen",
      role: "Lead Architect",
      image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=400&q=80",
    },
    {
      name: "Emma Williams",
      role: "Interior Designer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    },
    {
      name: "David Martinez",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
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
            <a href="/about" className="text-sm font-medium text-gray-600">
              ABOUT US
            </a>
            <a href="/projects" className="text-sm font-medium hover:text-gray-600 transition-colors">
              PROJECTS
            </a>
            <Button className="bg-[#1d1d1d] text-white hover:bg-[#2d2d2d] rounded-full px-6">
              CONTACT US
            </Button>
          </motion.div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm font-medium text-gray-500 mb-4"
          >
            ABOUT US
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-5xl md:text-7xl font-light mb-6 leading-tight"
          >
            Crafting Timeless<br />
            Living Experiences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We blend modern design with functional elegance to create spaces that inspire and endure.
          </motion.p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative h-[500px] rounded-3xl overflow-hidden mb-16"
        >
          <Image
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80"
            alt="Modern interior design"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center group"
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="mb-2"
              >
                <span className="text-5xl md:text-6xl font-light bg-gradient-to-r from-[#1d1d1d] to-gray-600 bg-clip-text text-transparent">
                  {stat.number}
                </span>
              </motion.div>
              <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-6 bg-[#1d1d1d] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-medium mb-4 text-gray-400">OUR STORY</h3>
              <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
                A Journey of Design Excellence
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Founded in 2009, The Contrary Chair has evolved from a small design studio into a leading 
                force in contemporary interior architecture. Our journey began with a simple belief: that 
                every space has the potential to become extraordinary.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                We work in the concept of basic style with trendy details that embody the idea of 
                functional urban chic. Our philosophy is simple – don't change the interior every 5 years, 
                replace only a few parts with current ones to keep it fresh and relevant.
              </p>
              <Button className="bg-white text-[#1d1d1d] hover:bg-gray-100 rounded-full px-8">
                View Our Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="relative h-[300px] rounded-2xl overflow-hidden group"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80"
                    alt="Design detail"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative h-[300px] rounded-2xl overflow-hidden mt-12 group"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&q=80"
                    alt="Interior space"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-sm font-medium mb-2 text-gray-500">OUR VALUES</h3>
            <h2 className="text-5xl font-light mb-4">What Drives Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our core values guide every decision and design choice we make, ensuring exceptional results for our clients.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-gray-50 p-8 rounded-2xl h-full hover:bg-[#1d1d1d] transition-all duration-500">
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6"
                  >
                    <value.icon className="h-12 w-12 text-[#1d1d1d] group-hover:text-white transition-colors duration-500" />
                  </motion.div>
                  <h3 className="text-xl font-medium mb-3 group-hover:text-white transition-colors duration-500">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-sm font-medium mb-2 text-gray-500">OUR TEAM</h3>
            <h2 className="text-5xl font-light mb-4">Meet The Visionaries</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Talented individuals with a shared passion for creating extraordinary spaces.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative h-[400px] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1d] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-sm font-medium mb-2 text-gray-500">RECOGNITION</h3>
            <h2 className="text-5xl font-light mb-4">Awards & Achievements</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                year: "2024",
                award: "Best Interior Design Studio",
                organization: "Design Excellence Awards",
              },
              {
                year: "2023",
                award: "Innovation in Residential Design",
                organization: "Architecture Digest",
              },
              {
                year: "2022",
                award: "Sustainable Design Leadership",
                organization: "Green Building Council",
              },
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 p-8 rounded-2xl text-center hover:bg-[#1d1d1d] hover:text-white transition-all duration-500 group"
              >
                <Award className="h-12 w-12 mx-auto mb-4 text-[#1d1d1d] group-hover:text-white transition-colors duration-500" />
                <div className="text-3xl font-light mb-2">{award.year}</div>
                <h3 className="text-xl font-medium mb-2">{award.award}</h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-300 transition-colors duration-500">
                  {award.organization}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 bg-[#1d1d1d] text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-sm font-medium mb-2 text-gray-400">HOW WE WORK</h3>
            <h2 className="text-5xl font-light mb-4">Our Design Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A methodical approach that ensures every project exceeds expectations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We begin by understanding your vision, lifestyle, and aesthetic preferences.",
              },
              {
                step: "02",
                title: "Design",
                description: "Our team creates detailed concepts and 3D visualizations for your approval.",
              },
              {
                step: "03",
                title: "Development",
                description: "We refine every detail, from materials to finishes, ensuring perfection.",
              },
              {
                step: "04",
                title: "Delivery",
                description: "Expert execution and installation bring your dream space to life.",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-6xl font-light mb-4 text-gray-800">{process.step}</div>
                <h3 className="text-2xl font-medium mb-3">{process.title}</h3>
                <p className="text-gray-400 leading-relaxed">{process.description}</p>
                {index < 3 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="hidden md:block absolute top-12 -right-4 w-8 h-[2px] bg-gray-800 origin-left"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
              Ready to Transform<br />Your Space?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Let's collaborate to bring your vision to life. Schedule a consultation with our team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#1d1d1d] text-white hover:bg-[#2d2d2d] rounded-full px-8 py-6 text-base">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-[#1d1d1d] text-[#1d1d1d] hover:bg-gray-50 rounded-full px-8 py-6 text-base"
              >
                View Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#1d1d1d] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
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
