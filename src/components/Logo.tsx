import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  isDarkMode: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDarkMode }) => {
  return (
    <motion.div 
      className="relative flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative">
        {/* Logo mark */}
        <div className={`h-7 w-7 md:h-8 md:w-8 rounded-lg bg-gradient-to-br ${
          isDarkMode 
            ? 'from-primary-500 to-primary-700' 
            : 'from-primary-400 to-primary-600'
        } flex items-center justify-center overflow-hidden`}>
          <div className="absolute w-6 h-6 md:w-7 md:h-7 rounded-md bg-gradient-to-tr from-primary-300 to-transparent opacity-50"></div>
          <span className="relative text-white font-bold text-sm md:text-base">TA</span>
        </div>
        
        {/* Decorative dot */}
        <motion.div 
          className={`absolute -top-1 -right-1 h-2 w-2 rounded-full ${
            isDarkMode ? 'bg-secondary-400' : 'bg-secondary-500'
          }`}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
      
      {/* Logo text */}
      <div className="ml-2 flex flex-col">
        <span className={`font-bold text-base md:text-lg leading-tight ${
          isDarkMode ? 'text-white' : 'text-light-900'
        }`}>
          Tech<span className={isDarkMode ? 'text-primary-400' : 'text-primary-600'}>Agency</span>
        </span>
        <span className={`text-[8px] md:text-[10px] uppercase tracking-wider ${
          isDarkMode ? 'text-gray-400' : 'text-light-500'
        }`}>
          Digital Solutions
        </span>
      </div>
    </motion.div>
  );
};

export default Logo; 