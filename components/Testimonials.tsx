import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "I brought Desmond in to do a drone survey of my property and honestly, it was super helpful. The aerial photos and video showed me things I just couldn't see from ground level. Plus, the top down shots gave us measurements for a landscaping project. Desmond was easy to work with, and turned it around quick. Definitely recommend him if you need a site survey in the KC area.",
    author: "Matt Dreier, Homeowner"
  },
  {
    quote: "Desmond was asked to do a drone survey of a roof top and parapet damage on an older building in Kansas City, Missouri. He was super helpful and provided camera pictures, drone pictures, a usb thumb drive and a link to a drop box with downloadable images. Desmond is great to work with and we will use his services in the future. We definitely recommend him if you need any type of drone imaging service.",
    author: "Adam Houp, Shockwave Solar"
  },
  {
    quote: "I had hired Metro Drone Survey to assist on a solar project. Desmond was highly knowledgeable about the system we were looking to install, and knew exactly what pictures and measurements we were needing to get our permits. Metro Drone is the way to go if you have a project that needs an analysis. I will recommend them to anyone and will continue to use there services in the future.",
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