import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Camera, Box, Sun, Zap } from 'lucide-react';

const heroImage = '/assets/optimized/Hero Drone Shot.webp';

const offers = [
  {
    icon: Camera,
    color: 'primary',
    title: 'Aerial Photography & Video',
    description: 'High-resolution interior and exterior shots showcasing every detail'
  },
  {
    icon: Box,
    color: 'primary',
    title: '3D Modeling & Mapping',
    description: 'Accurate dimensional data for planning and documentation'
  },
  {
    icon: Sun,
    color: 'warning',
    title: 'Solar Site Analysis',
    description: 'Comprehensive roof and parapet assessments for solar installations'
  },
  {
    icon: Zap,
    color: 'warning',
    title: 'Fast Turnaround',
    description: 'Same-day delivery available for urgent project needs'
  }
];

const Hero: React.FC = () => {
  const [currentOffer, setCurrentOffer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative pt-32 pb-16 px-4 md:px-10 overflow-hidden bg-background-light dark:bg-background-dark transition-colors">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Content */}
        <motion.div 
          className="flex flex-col gap-6 text-left z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight text-text-primary-light dark:text-text-primary-dark">
            Distinctive Aerial Imagery for Your Projects
          </h1>
          <p className="text-lg leading-relaxed text-text-secondary-light dark:text-text-secondary-dark max-w-xl">
            Licensed and insured drone photography for real estate, solar, construction, and beyond. Serving the Kansas City Metro with professional 4K aerial imagery, 3D modeling, and rapid turnaround for your project needs.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
            <motion.a
              href="mailto:desmond@metrodronesurvey.com?subject=Project%20Quote%20Request"
              className="w-full sm:w-auto px-8 py-3.5 bg-brand-teal text-white text-base font-bold rounded-full shadow-md hover:shadow-lg hover:bg-brand-teal-light transition-all text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request a Quote
            </motion.a>

            <motion.a
              href="tel:+18167192540"
              className="flex items-center gap-2 text-brand-teal dark:text-brand-lime font-semibold px-4 py-3 group hover:text-brand-lime transition-colors"
              whileHover={{ x: 5 }}
            >
              Call (816) 719-2540
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px] w-full"
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[2s] hover:scale-105"
            style={{ backgroundImage: `url("${heroImage}")` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
          
          {/* Floating Badge - Animated Carousel */}
          <div className="absolute bottom-6 left-6 right-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentOffer}
                className="p-4 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md rounded-xl flex items-center gap-4 shadow-lg border border-white/50 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className={`bg-${offers[currentOffer].color}/10 p-2 rounded-full flex-shrink-0`}>
                  {React.createElement(offers[currentOffer].icon, {
                    className: `w-8 h-8 text-${offers[currentOffer].color}`
                  })}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-text-primary-light dark:text-text-primary-dark text-base">
                    {offers[currentOffer].title}
                  </p>
                  <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                    {offers[currentOffer].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;