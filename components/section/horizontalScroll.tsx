"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import Image from "next/image";

interface ScrollSection {
  id: number;
  title: string;
  description: string;
  image: string;
  year: string;
  category: string;
}

const sections: ScrollSection[] = [
  {
    id: 1,
    title: "Minimalist Sanctuary",
    description: "Where simplicity meets sophistication in perfect harmony",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80",
    year: "2024",
    category: "Residential",
  },
  {
    id: 2,
    title: "Urban Elegance",
    description: "Contemporary design that breathes life into city living",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80",
    year: "2024",
    category: "Luxury",
  },
  {
    id: 3,
    title: "Coastal Dreams",
    description: "Seamless indoor-outdoor living with ocean views",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80",
    year: "2023",
    category: "Residential",
  },
  {
    id: 4,
    title: "Modern Heritage",
    description: "Blending timeless architecture with contemporary comfort",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
    year: "2023",
    category: "Renovation",
  },
  {
    id: 5,
    title: "Artistic Living",
    description: "Where every corner tells a story of design excellence",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1600&q=80",
    year: "2024",
    category: "Luxury",
  },
];

export default function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring animation for all transforms
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Hero image scale and position - grows from 60vh to 100vh
  const heroScale = useTransform(smoothProgress, [0, 0.15], [0.7, 1]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.1, 0.15, 0.2], [0, 1, 1, 0]);
  const heroY = useTransform(smoothProgress, [0, 0.15], ["20%", "0%"]);
  
  // Text animations for hero
  const heroTextY = useTransform(smoothProgress, [0, 0.15], [100, 0]);
  const heroTextOpacity = useTransform(smoothProgress, [0, 0.08, 0.15, 0.18], [0, 1, 1, 0]);

  // Horizontal scroll - starts after hero animation
  const horizontalScroll = useTransform(
    smoothProgress,
    [0.2, 1],
    ["0%", "-80%"]
  );

  // Section fade in
  const sectionOpacity = useTransform(
    smoothProgress,
    [0.15, 0.2, 0.95, 1],
    [0, 1, 1, 0]
  );

  return (
    <div
      ref={containerRef}
      className="relative bg-[#1d1d1d]"
      style={{ height: "500vh" }}
    >
      {/* Sticky container that holds everything */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Hero Image Section - Scales up to fill screen */}
        <motion.div
          ref={heroImageRef}
          style={{
            scale: heroScale,
            opacity: heroOpacity,
            y: heroY,
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative w-[85vw] h-[60vh] rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=2000&q=80"
              alt="Featured interior"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1d]/80 via-transparent to-transparent" />
            
            {/* Hero Text */}
            <motion.div
              style={{
                y: heroTextY,
                opacity: heroTextOpacity,
              }}
              className="absolute bottom-16 left-16 text-white z-10"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-sm font-medium mb-4 tracking-wider"
              >
                FEATURED COLLECTION
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-6xl md:text-7xl font-light leading-tight mb-4"
              >
                Timeless<br />Interiors
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-lg text-gray-300 max-w-md"
              >
                Explore our curated selection of award-winning projects
              </motion.p>
            </motion.div>
          </div>
        </motion.div>

        {/* Horizontal Scrolling Section */}
        <motion.div
          style={{
            x: horizontalScroll,
            opacity: sectionOpacity,
          }}
          className="absolute inset-0 flex items-center"
        >
          <div className="flex gap-12 px-[10vw]">
            {sections.map((section, index) => (
              <HorizontalCard
                key={section.id}
                section={section}
                index={index}
                progress={smoothProgress}
              />
            ))}
            
            {/* Final CTA Card */}
            <motion.div
              className="flex-shrink-0 w-[70vw] md:w-[50vw] h-[70vh] rounded-3xl bg-white flex flex-col items-center justify-center p-12 text-center"
            >
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-light mb-6 text-[#1d1d1d]"
              >
                Let's Create<br />Together
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-gray-600 mb-8 text-lg max-w-md"
              >
                Ready to transform your space? Start your journey with us today.
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#1d1d1d] text-white rounded-full font-medium hover:bg-[#2d2d2d] transition-colors"
                style={{
                  transition: "1100ms linear(0, 0.4519, 1.2082, 1.5266, 1.2911, 0.8924, 0.7227, 0.8454, 1.0556, 1.146, 1.0821, 0.9713, 0.9231, 0.9564, 1.0148, 1.0405, 1.0231, 0.9923, 0.9787, 0.9877, 1.0039, 1.0112, 1.0065, 0.998, 0.9941, 0.9965, 1.001, 1.0031, 1.0018, 0.9995, 1, 0.999, 1.0003, 1, 1.0005, 0.9999, 1)",
                }}
              >
                Get Started
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity: heroTextOpacity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white"
        >
          <span className="text-xs tracking-wider">SCROLL</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[2px] h-12 bg-white/50"
          />
        </motion.div>
      </div>
    </div>
  );
}

// Individual Card Component with Parallax Effects
function HorizontalCard({
  section,
  index,
  progress,
}: {
  section: ScrollSection;
  index: number;
  progress: MotionValue<number>;
}) {
  // Calculate unique progress ranges for each card
  const startProgress = 0.2 + (index * 0.1);
  const endProgress = startProgress + 0.15;

  // Parallax effect - each card moves at different speed
  const cardY = useTransform(
    progress,
    [startProgress, endProgress],
    [100, -100]
  );

  // Image parallax - moves slower than card
  const imageY = useTransform(
    progress,
    [startProgress, endProgress],
    [50, -50]
  );

  // Text parallax - moves faster than card
  const textY = useTransform(
    progress,
    [startProgress, endProgress],
    [150, -150]
  );

  // Scale effect on approach
  const cardScale = useTransform(
    progress,
    [startProgress - 0.05, startProgress, endProgress, endProgress + 0.05],
    [0.85, 1, 1, 0.85]
  );

  // Smooth spring for scale
  const smoothScale = useSpring(cardScale, {
    stiffness: 100,
    damping: 30,
  });

  // Rotation effect
  const cardRotate = useTransform(
    progress,
    [startProgress, endProgress],
    [5, -5]
  );

  return (
    <motion.div
      style={{
        y: cardY,
        scale: smoothScale,
        rotateY: cardRotate,
      }}
      className="flex-shrink-0 w-[70vw] md:w-[50vw] h-[70vh] perspective-1000"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative w-full h-full rounded-3xl overflow-hidden group cursor-pointer"
      >
        {/* Image with parallax */}
        <motion.div
          style={{ y: imageY }}
          className="absolute inset-0 w-full h-[110%] -top-[5%]"
        >
          <Image
            src={section.image}
            alt={section.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1d] via-[#1d1d1d]/40 to-transparent" />

        {/* Category Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute top-8 left-8"
        >
          <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-[#1d1d1d]">
            {section.category} • {section.year}
          </span>
        </motion.div>

        {/* Text Content with parallax */}
        <motion.div
          style={{ y: textY }}
          className="absolute bottom-12 left-12 right-12 text-white"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, margin: "-100px" }}
          >
            <h3 className="text-4xl md:text-5xl font-light mb-4 leading-tight">
              {section.title}
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-md">
              {section.description}
            </p>
            
            {/* View Project Button */}
            <motion.button
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              className="group/btn flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white hover:text-[#1d1d1d] transition-all duration-500"
              style={{
                transition: "background-color 1100ms linear(0, 0.4519, 1.2082, 1.5266, 1.2911, 0.8924, 0.7227, 0.8454, 1.0556, 1.146, 1.0821, 0.9713, 0.9231, 0.9564, 1.0148, 1.0405, 1.0231, 0.9923, 0.9787, 0.9877, 1.0039, 1.0112, 1.0065, 0.998, 0.9941, 0.9965, 1.001, 1.0031, 1.0018, 0.9995, 1, 0.999, 1.0003, 1, 1.0005, 0.9999, 1), color 1100ms linear(0, 0.4519, 1.2082, 1.5266, 1.2911, 0.8924, 0.7227, 0.8454, 1.0556, 1.146, 1.0821, 0.9713, 0.9231, 0.9564, 1.0148, 1.0405, 1.0231, 0.9923, 0.9787, 0.9877, 1.0039, 1.0112, 1.0065, 0.998, 0.9941, 0.9965, 1.001, 1.0031, 1.0018, 0.9995, 1, 0.999, 1.0003, 1, 1.0005, 0.9999, 1)",
              }}
            >
              <span>View Project</span>
              <motion.svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="group-hover/btn:translate-x-1 transition-transform"
              >
                <path
                  d="M1 8H15M15 8L8 1M15 8L8 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Hover Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute bottom-0 left-0 right-0 h-1 bg-white origin-left"
        />
      </motion.div>
    </motion.div>
  );
}
