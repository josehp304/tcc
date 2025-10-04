"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import HorizontalScroll from "@/components/section/horizontalScroll";
import Preloader from "@/components/Preloader";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Preloader */}
      <Preloader onLoadingComplete={handleLoadingComplete} />

      {/* Main Content */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-white"
          >
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold tracking-tight"
          >
            TCC
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center gap-8"
          >
            <a href="#home" className="text-sm font-medium hover:text-gray-600 transition-colors">
              HOME
            </a>
            <a href="/about" className="text-sm font-medium hover:text-gray-600 transition-colors">
              ABOUT US
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-gray-600 transition-colors">
              PROJECTS
            </a>
            <Button className="bg-[#1d1d1d] text-white hover:bg-[#2d2d2d] rounded-full px-6">
              CONTACT US
            </Button>
          </motion.div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl md:text-7xl font-light text-center mb-16 leading-tight"
        >
          Redefine Your Living With<br />Modern Elegance
        </motion.h1>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-1 row-span-2"
          >
            <div className="relative h-[400px] rounded-2xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
                alt="Modern orange interior"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="col-span-1"
          >
            <div className="relative h-[192px] rounded-2xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
                alt="Modern living room"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="col-span-1"
          >
            <div className="relative h-[192px] rounded-2xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Bedroom interior"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="col-span-1 row-span-2"
          >
            <div className="relative h-[400px] rounded-2xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80"
                alt="Minimalist interior"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="col-span-1"
          >
            <div className="relative h-[192px] rounded-2xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80"
                alt="Cozy bedroom"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="col-span-1 relative"
          >
            <div className="relative h-[192px] rounded-2xl overflow-hidden bg-[#1d1d1d] flex items-center justify-center group cursor-pointer hover:bg-[#2d2d2d] transition-colors">
              <span className="text-white text-sm font-medium">explore projects</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="col-span-1"
          >
            <div className="relative h-[192px] rounded-2xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80"
                alt="Modern kitchen"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="text-center text-xs text-gray-500 mb-4"
        >
          WE BUILD MODERN HOMES IN YOUR COMFORT ZONES<br />
          BY THE USE OF NATURAL LOOKING ITEMS
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="text-center"
        >
          <span className="text-6xl font-light">01</span>
          <p className="text-xs mt-2">This what we can do with<br />you and your goal</p>
        </motion.div>
      </section>
      <HorizontalScroll/>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-[#1d1d1d] text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-2xl overflow-hidden mb-12"
          >
            <Image
              src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=80"
              alt="Luxury interior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1d] via-transparent to-transparent" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-medium mb-4 text-gray-400">ABOUT US</h3>
              <h2 className="text-4xl font-light mb-6 leading-tight">
                We work in the concept of basic style + trendy details that embody the idea of functional urban chic.
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Do not change the interior every 5 years, replace only a few parts with current ones. We take pride in our team of designers, planners, and architects who bring any project to life, no matter how complex.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative h-[300px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80"
                  alt="Design process"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex gap-4">
                <Button className="flex-1 bg-white text-[#1d1d1d] hover:bg-gray-100 rounded-full">
                  READ MORE
                </Button>
                <Button variant="outline" className="flex-1 border-white text-white hover:bg-white hover:text-[#1d1d1d] rounded-full">
                  GET IN TOUCH
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-sm font-medium mb-2 text-gray-500">PROJECTS</h3>
            <h2 className="text-5xl font-light">Our Latest Work</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
              "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
              "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80",
              "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80",
              "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
              "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=800&q=80",
            ].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={src}
                  alt={`Project ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1d]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-xl font-medium mb-2">Modern Interior {i + 1}</h3>
                  <p className="text-sm text-gray-300">Residential Design</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <footer className="py-16 px-6 bg-[#1d1d1d] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-light mb-6">Let's Create<br />Something Amazing</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Transform your space into a masterpiece. Get in touch with us today and let's bring your vision to life.
              </p>
              <Button className="bg-white text-[#1d1d1d] hover:bg-gray-100 rounded-full px-8">
                Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 mt-1 text-gray-400" />
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-gray-400">hello@thecontrarychair.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 mt-1 text-gray-400" />
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 mt-1 text-gray-400" />
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-gray-400">123 Design Street, Creative City, CC 12345</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-2xl font-bold">TCC</div>
            <p className="text-sm text-gray-400">© 2024 The Contrary Chair. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Facebook</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}