import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "I hired Desmond to survey the property for my wife and I. We needed accurate measurements for landscaping projects. The aerial imagery helped us visualize our plans perfectly.",
    author: "Matt Dreier, Homeowner"
  },
  {
    quote: "Desmond provided detailed imagery of roof and parapet damage that helped us assess structural issues before solar installation. Professional service and fast turnaround.",
    author: "Adam Houp, Shockwave Solar"
  },
  {
    quote: "We needed assistance with solar project documentation. Desmond delivered comprehensive aerial analysis that exceeded our expectations and kept our project on schedule.",
    author: "Charlotte Hoverder, SP Plating"
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
                  <Star key={idx} className="w-5 h-5 fill-warning text-warning" />
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