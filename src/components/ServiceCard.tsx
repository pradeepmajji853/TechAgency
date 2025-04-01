import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, Icon }) => {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
      className="card group h-full flex flex-col relative overflow-hidden shine hover-3d"
    >
      {/* Animated background gradient */}
      <div className="absolute -inset-[100px] bg-primary-100/50 rounded-full blur-3xl group-hover:bg-primary-200/70 transition-all duration-700 ease-in-out z-0"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="bg-primary-100 p-4 rounded-xl w-fit mb-5 group-hover:bg-primary-200 transition-colors duration-300 shadow-soft">
          <Icon className="h-7 w-7 text-primary-600 group-hover:text-primary-700 transition-colors duration-300" />
        </div>
        
        <h3 className="text-xl font-semibold mb-3 text-light-900 group-hover:text-primary-700 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-light-600 mb-5 flex-grow group-hover:text-light-700 transition-colors duration-300">
          {description}
        </p>
        
        <Link to="/services" className="mt-auto">
          <motion.div
            className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 mt-2 relative"
            whileHover={{ x: 5 }}
          >
            <span>Learn more</span>
            <motion.div
              className="ml-2 flex items-center"
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.div>
            
            {/* Animated underline */}
            <motion.div 
              className="absolute -bottom-1 left-0 h-0.5 bg-primary-500/80 w-0"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;