import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "We needed pre-installation documentation for a 200kW commercial solar array. Desmond delivered roof condition reports, shading analysis, and accurate measurements within 24 hours—exactly what our financing team required to move forward.",
    author: "Sarah Mitchell, Project Manager, SunPower KC"
  },
  {
    quote: "Metro Drone Survey's post-storm roof assessments saved us from sending crews onto damaged structures. The detailed parapet damage documentation held up with insurance adjusters and kept our projects on track.",
    author: "Adam Houp, Shockwave Solar"
  },
  {
    quote: "When solar financiers demand detailed site documentation, we call Desmond. His aerial analysis exceeded permit requirements and delivered faster than any other provider we've used. Reliable partner for time-sensitive projects.",
    author: "Charlotte Hoverder, Facilities Manager, SP Plating"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 px-4 md:px-10 bg-background-light dark:bg-background-dark transition-colors">
      <div className="max-w-[1200px] mx-auto bg-surface-light dark:bg-surface-dark rounded-3xl p-8 md:p-16">
        <motion.h2
          className="font-display text-3xl font-bold tracking-tight mb-12 text-center text-text-primary-light dark:text-text-primary-dark"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Client Testimonials
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="flex flex-col gap-4 p-8 rounded-2xl bg-white dark:bg-background-dark shadow-soft hover:shadow-hover transition-shadow duration-300 border border-transparent dark:border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-amber-500 text-amber-500 dark:fill-brand-lime-bright dark:text-brand-lime-bright" />
                ))}
              </div>
              <blockquote className="text-base font-normal leading-relaxed text-text-primary-light dark:text-text-primary-dark flex-grow">
                "{t.quote}"
              </blockquote>
              <cite className="not-italic text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark pt-2 block border-t border-gray-100 dark:border-gray-800 mt-2">
                - {t.author}
              </cite>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;