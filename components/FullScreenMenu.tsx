"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";

interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { name: "HOME", href: "/", number: "01" },
  { name: "ABOUT US", href: "/about", number: "02" },
  { name: "PROJECTS", href: "/projects", number: "03" },
  { name: "SERVICES", href: "#services", number: "04" },
  { name: "CONTACT", href: "#contact", number: "05" },
];

export default function FullScreenMenu({ isOpen, onClose }: FullScreenMenuProps) {
  // Menu container animation - slides down from top
  const menuVariants = {
    closed: {
      y: "-100%",
      transition: {
        duration: 0.9,
        ease: [0.6, 0.01, 0.05, 0.95] as const,
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  // Staggered menu items
  const containerVariants = {
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  // Individual menu item with text reveal
  const itemVariants = {
    closed: {
      y: 50,
      opacity: 0,
      rotateX: -90,
    },
    open: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  // Side content animations
  const sideContentVariants = {
    closed: { opacity: 0, x: -50 },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.6,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  // Contact info animations
  const contactVariants = {
    closed: { opacity: 0, y: 30 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.7 + i * 0.1,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/20 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Menu Container */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[101] bg-[#1d1d1d] text-white overflow-hidden"
          >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: "80px 80px",
                }}
              />
            </div>

            {/* Animated Gradient Orbs */}
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, -80, 0],
                y: [0, 100, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
            />

            <div className="relative h-full flex flex-col">
              {/* Header - Close Button */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex justify-between items-center px-12 py-8"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-2xl font-bold tracking-tight"
                >
                  TCC
                </motion.div>
                
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#1d1d1d] transition-colors duration-300"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </motion.div>

              {/* Main Content Area */}
              <div className="flex-1 flex items-center">
                <div className="w-full px-12 grid lg:grid-cols-[1fr,auto] gap-16 lg:gap-32 items-center">
                  {/* Left Side - Menu Items */}
                  <motion.nav
                    variants={containerVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="space-y-2 perspective-1000"
                  >
                    {menuItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        variants={itemVariants}
                        className="overflow-hidden"
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="group flex items-baseline gap-8 py-4 hover:pl-8 transition-all duration-500"
                        >
                          {/* Number */}
                          <span className="text-sm text-gray-500 font-light tabular-nums group-hover:text-white transition-colors duration-300">
                            {item.number}
                          </span>
                          
                          {/* Menu Text */}
                          <div className="relative overflow-hidden">
                            <motion.span
                              className="block text-5xl md:text-7xl font-light tracking-tight"
                              whileHover={{ x: 20 }}
                              transition={{ duration: 0.3 }}
                            >
                              {item.name}
                            </motion.span>
                            
                            {/* Underline effect */}
                            <motion.div
                              className="absolute bottom-2 left-0 h-[2px] bg-white origin-left"
                              initial={{ scaleX: 0 }}
                              whileHover={{ scaleX: 1 }}
                              transition={{ duration: 0.5 }}
                              style={{ width: "100%" }}
                            />
                          </div>

                          {/* Arrow */}
                          <motion.span
                            className="text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            initial={{ x: -20 }}
                            whileHover={{ x: 0 }}
                          >
                            →
                          </motion.span>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.nav>

                  {/* Right Side - Company Details */}
                  <motion.div
                    variants={sideContentVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="space-y-12 lg:border-l lg:border-white/10 lg:pl-16"
                  >
                    {/* Contact Information */}
                    <div className="space-y-6">
                      <motion.h3
                        variants={contactVariants}
                        custom={0}
                        className="text-sm font-medium text-gray-400 tracking-wider"
                      >
                        GET IN TOUCH
                      </motion.h3>
                      
                      <motion.div
                        variants={contactVariants}
                        custom={1}
                        className="flex items-start gap-4 group cursor-pointer"
                      >
                        <Mail className="w-5 h-5 mt-1 text-gray-400 group-hover:text-white transition-colors" />
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Email</p>
                          <p className="text-base group-hover:text-gray-300 transition-colors">
                            hello@thecontrarychair.com
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        variants={contactVariants}
                        custom={2}
                        className="flex items-start gap-4 group cursor-pointer"
                      >
                        <Phone className="w-5 h-5 mt-1 text-gray-400 group-hover:text-white transition-colors" />
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Phone</p>
                          <p className="text-base group-hover:text-gray-300 transition-colors">
                            +1 (555) 123-4567
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        variants={contactVariants}
                        custom={3}
                        className="flex items-start gap-4 group cursor-pointer"
                      >
                        <MapPin className="w-5 h-5 mt-1 text-gray-400 group-hover:text-white transition-colors" />
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Location</p>
                          <p className="text-base group-hover:text-gray-300 transition-colors">
                            123 Design Street<br />
                            Creative City, CC 12345
                          </p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Social Links */}
                    <motion.div
                      variants={contactVariants}
                      custom={4}
                      className="space-y-4"
                    >
                      <h3 className="text-sm font-medium text-gray-400 tracking-wider">
                        FOLLOW US
                      </h3>
                      <div className="flex gap-4">
                        {[
                          { icon: Instagram, label: "Instagram" },
                          { icon: Facebook, label: "Facebook" },
                          { icon: Linkedin, label: "LinkedIn" },
                        ].map((social, index) => (
                          <motion.a
                            key={social.label}
                            href="#"
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#1d1d1d] transition-all duration-300"
                            aria-label={social.label}
                          >
                            <social.icon className="w-5 h-5" />
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>

                    {/* Decorative Element */}
                    <motion.div
                      variants={contactVariants}
                      custom={5}
                      className="pt-8 space-y-2"
                    >
                      <motion.div
                        animate={{ scaleX: [0, 1, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="h-[1px] bg-white/20 origin-left"
                      />
                      <motion.div
                        animate={{ scaleX: [0, 1, 0] }}
                        transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                        className="h-[1px] bg-white/20 origin-left w-2/3"
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Footer - Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="px-12 py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
              >
                <p className="text-sm text-gray-500">
                  © 2024 The Contrary Chair. All rights reserved.
                </p>
                
                <div className="flex gap-8">
                  <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Corner Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute top-1/4 right-12 hidden xl:block"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="w-32 h-32 border border-white/5 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-32 h-32 border border-white/5 rounded-full"
                style={{ margin: "16px" }}
              />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
