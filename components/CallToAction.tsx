import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="relative py-20 px-4 md:px-10 bg-background-light dark:bg-background-dark transition-colors">
      <div className="max-w-[1200px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Headline */}
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
              Let's Talk About Your Project
            </h2>
            <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark">
              Whether you're bidding a solar install, documenting storm damage, or tracking a build—I'm here to help. Most quotes back to you within 2 hours.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <motion.a
              href="mailto:desmond@metrodronesurvey.com?subject=Project%20Inquiry"
              className="w-full sm:w-auto px-8 py-3.5 bg-brand-teal-lighter text-white text-base font-bold rounded-full shadow-md hover:shadow-lg hover:bg-brand-teal-light active:bg-brand-teal transition-all text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Email Me
            </motion.a>

            <motion.a
              href="tel:+18167192540"
              className="flex items-center gap-2 text-brand-teal dark:text-brand-lime hover:text-brand-lime-dark dark:hover:text-brand-lime-bright font-semibold px-4 py-3 group transition-colors"
              whileHover={{ x: 5 }}
            >
              Call Me: (816) 719-2540
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
