import React from 'react';
import { motion } from 'framer-motion';

const realEstateImage = '/assets/optimized/Real Estate 3D.webp';
const servicesImage = '/assets/optimized/Services Header.webp';
const sportsImage = '/assets/optimized/Sports Aerial.webp';

const services = [
  {
    title: "Real Estate & Property",
    desc: "Showcase properties with stunning aerial photography and video. Perfect for listings, land surveys, and property documentation.",
    image: realEstateImage
  },
  {
    title: "Solar & Roofing Analysis",
    desc: "Detailed roof inspections, parapet damage assessments, and solar site analysis. Help your clients make informed decisions.",
    image: servicesImage
  },
  {
    title: "Sports & Custom Projects",
    desc: "Action-packed sports footage, artistic aerial concepts, and unique creative projects. We adapt to your vision.",
    image: sportsImage
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 px-4 md:px-10 bg-white dark:bg-background-dark transition-colors">
      <div className="max-w-[1200px] mx-auto">
        <motion.h2
          className="font-display text-text-primary-light dark:text-text-primary-dark text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What We Capture
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="group cursor-pointer flex flex-col gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className="overflow-hidden rounded-2xl aspect-[4/3] w-full relative shadow-sm hover:shadow-xl transition-all duration-300">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url("${service.image}")` }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="flex flex-col gap-2 px-1">
                <h3 className="font-display text-xl font-medium leading-normal text-text-primary-light dark:text-text-primary-dark group-hover:text-brand-teal transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;