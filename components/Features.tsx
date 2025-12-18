import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, FileCheck } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="w-7 h-7 text-primary-blue" />,
    bg: "bg-primary-blue/10",
    title: "Safety-First, Always",
    desc: "I never send you or your crew onto a dangerous roof. Every flight is FAA Part 107 certified with $2M liability coverage. You get complete aerial documentation while your team stays safely on the ground."
  },
  {
    icon: <FileCheck className="w-7 h-7 text-primary-green" />,
    bg: "bg-primary-green/10",
    title: "Documentation That Meets Their Standards",
    desc: "Insurance adjusters, solar financiers, municipal inspectors—they all have strict requirements. I know exactly what they're looking for: geotagged imagery, accurate measurements, detailed reports. You get documentation that passes on the first submission."
  },
  {
    icon: <Zap className="w-7 h-7 text-primary-yellow" />,
    bg: "bg-primary-yellow/10",
    title: "Fast Turnaround, Zero Delays",
    desc: "Contractor deadlines don't wait, and neither do I. Most projects are surveyed within 24 hours, with deliverables same-day or next morning. Need it for tomorrow's meeting? I've got you covered."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50 }
  }
};

const Features: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-20 px-4 md:px-10 bg-white dark:bg-background-dark transition-colors">
      <div className="max-w-[1200px] mx-auto text-center flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 items-center"
        >
          <h2 className="font-display tracking-tight text-3xl md:text-4xl font-bold leading-tight max-w-2xl text-text-primary-light dark:text-text-primary-dark">
            How I Can Help
          </h2>
          <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-2xl">
            I'm committed to removing risk and uncertainty from every project—so you can focus on what you do best.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((f, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.1)" }}
              className="flex flex-col gap-4 rounded-2xl border border-gray-100 dark:border-gray-800 bg-surface-light dark:bg-surface-dark p-8 text-left transition-all duration-300"
            >
              <div className={`flex items-center justify-center w-14 h-14 rounded-full ${f.bg} mb-2`}>
                {f.icon}
              </div>
              <h3 className="font-display text-xl font-medium text-text-primary-light dark:text-text-primary-dark">{f.title}</h3>
              <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;