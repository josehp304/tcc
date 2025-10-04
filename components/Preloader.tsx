"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface PreloaderProps {
  onLoadingComplete: () => void;
}

export default function Preloader({ onLoadingComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  
  const text = "THE CONTRARY CHAIR";
  const letters = text.split("");

  useEffect(() => {
    // Simulate loading progress
    const duration = 3000; // 3 seconds total
    const steps = 100;
    const stepDuration = duration / steps;

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 1;
      
      // Add some randomness to make it feel more natural
      const randomJump = Math.random() > 0.7 ? Math.floor(Math.random() * 3) : 0;
      currentProgress = Math.min(currentProgress + randomJump, 100);
      
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsComplete(true);
          setTimeout(onLoadingComplete, 800);
        }, 500);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  // Fun easing function variants for letters
  const letterVariants = {
    hidden: {
      y: 100,
      opacity: 0,
      rotateX: -90,
    },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        delay: 0.3 + i * 0.05,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const, // Custom cubic-bezier
      },
    }),
    exit: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.01, 0.05, 0.95] as const,
      },
    },
  };

  // Counter animation
  const counterVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  // Container exit animation
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, 0.05, 0.95] as const,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {!isComplete && (
        <motion.div
          key="preloader"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[9999] bg-[#1d1d1d] flex items-center justify-center overflow-hidden"
        >
          {/* Animated background gradient */}
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          />

          {/* Main Content */}
          <div className="relative z-10 text-center px-6">
            {/* Animated Letters */}
            <div className="flex items-center justify-center gap-1 mb-8 perspective-1000">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className={`inline-block text-white font-light ${
                    letter === " " ? "w-4" : ""
                  }`}
                  style={{
                    fontSize: "clamp(2rem, 5vw, 4rem)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-gray-400 text-sm tracking-[0.3em] font-light"
            >
              REDEFINING MODERN LIVING
            </motion.p>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="mt-12 mx-auto max-w-xs"
            >
              <div className="relative h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-white via-gray-300 to-white rounded-full"
                  style={{
                    width: `${progress}%`,
                    boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Loading Percentage - Bottom Right Corner */}
          <motion.div
            variants={counterVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-12 right-12 flex items-baseline gap-1"
          >
            <motion.span
              key={progress}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
              }}
              className="text-6xl font-light text-white tabular-nums"
            >
              {progress.toString().padStart(2, "0")}
            </motion.span>
            <span className="text-2xl font-light text-gray-500 mb-2">%</span>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute top-12 left-12"
          >
            <div className="flex flex-col gap-2">
              <motion.div
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-12 h-[1px] bg-white/30 origin-left"
              />
              <motion.div
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 2, delay: 0.3, repeat: Infinity, ease: "easeInOut" }}
                className="w-8 h-[1px] bg-white/30 origin-left"
              />
            </div>
          </motion.div>

          {/* Corner Accent - Top Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute top-12 right-12"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border border-white/10 rounded-full"
            />
          </motion.div>

          {/* Corner Accent - Bottom Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-12 left-12 text-white/30"
          >
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="0.5" />
            </motion.svg>
          </motion.div>

          {/* Grid Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
