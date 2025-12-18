import React from 'react';
import { motion } from 'framer-motion';

const realEstateImage = '/assets/optimized/Real Estate 3D.webp';
const servicesImage = '/assets/optimized/Services Header.webp';
const solarImage = '/assets/optimized/solar-site-survey photo.webp';
const roofingImage = '/assets/optimized/roofing damage.webp';
const progressImage = '/assets/optimized/progress.webp';

const services = [
  {
    title: "Solar Site Surveys",
    desc: "Complete pre-installation documentation for solar projects: roof condition reports, shading analysis, accurate pitch and azimuth measurements, parapet inspections, and high-resolution aerial imagery.\n\nDelivered in 24 hours. Ready for financing applications, permit submissions, and client proposals. Everything solar financiers and municipal offices require—in one comprehensive package.",
    image: solarImage
  },
  {
    title: "Post-Storm Roof Assessments",
    desc: "Insurance-grade damage documentation without putting anyone at risk. I'll photograph the entire roof structure, document every compromised area, and provide detailed reports with geotagged imagery.\n\nPerfect for insurance claims, warranty documentation, and client updates. Adjusters get the detail they need, you get peace of mind, and your crew stays safe.",
    image: roofingImage
  },
  {
    title: "Construction Progress Tracking",
    desc: "Regular aerial documentation for residential and commercial builds. Weekly or monthly flyovers provide timestamped photos, progress comparisons, and comprehensive site overviews.\n\nKeep clients informed, coordinate subcontractors, track timelines, and document work for permits or insurance. One reliable source for everyone on the project.",
    image: progressImage
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
          What I Can Do for You
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
                <div className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-relaxed">
                  {service.desc.split('\n\n').map((paragraph, i) => (
                    <p key={i} className={i > 0 ? 'mt-3' : ''}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;