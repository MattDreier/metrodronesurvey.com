import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Box, Sun, Zap, ShieldCheck } from 'lucide-react';

const heroImage = '/assets/optimized/new-hero.webp';

const offers = [
  {
    icon: Sun,
    color: 'warning',
    title: 'Solar Site Analysis',
    description: 'Roof condition reports, shading analysis, and accurate measurements delivered within 24 hours'
  },
  {
    icon: ShieldCheck,
    color: 'primary',
    title: 'Post-Storm Roof Documentation',
    description: 'Insurance-grade damage assessments without putting your crew at risk'
  },
  {
    icon: Box,
    color: 'primary',
    title: 'Construction Progress Monitoring',
    description: 'Weekly site documentation for client updates, billing disputes, and project archives'
  },
  {
    icon: Zap,
    color: 'warning',
    title: '$2M Liability Coverage Included',
    description: 'Every flight is backed by comprehensive insurance—protecting your business and your clients'
  }
];

const colorClasses = {
  primary: {
    bg: 'bg-primary-blue/10',
    icon: 'text-primary-blue'
  },
  warning: {
    bg: 'bg-primary-yellow/10',
    icon: 'text-primary-yellow'
  }
};

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
            Proceed with Confidence
          </h1>
          <p className="text-lg leading-relaxed text-text-secondary-light dark:text-text-secondary-dark max-w-xl">
            I believe you shouldn't have to choose between speed, accuracy, and safety. That's why I deliver insurance-grade aerial documentation in 24 hours—so you get everything you need, without putting anyone on a dangerous roof.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
            <motion.a
              href="mailto:desmond@metrodronesurvey.com?subject=Project%20Quote%20Request"
              className="w-full sm:w-auto px-8 py-3.5 bg-brand-teal-lighter text-white text-base font-bold rounded-full shadow-md hover:shadow-lg hover:bg-brand-teal-light active:bg-brand-teal transition-all text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Email Me
            </motion.a>

            <motion.a
              href="tel:+18167192540"
              className="flex items-center gap-2 text-brand-teal dark:text-brand-lime font-semibold px-4 py-3 group hover:text-brand-lime transition-colors"
              whileHover={{ x: 5 }}
            >
              Call Me: (816) 719-2540
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
                <div className={`${colorClasses[offers[currentOffer].color].bg} p-2 rounded-full flex-shrink-0`}>
                  {React.createElement(offers[currentOffer].icon, {
                    className: `w-8 h-8 ${colorClasses[offers[currentOffer].color].icon}`
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