import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Filter, ArrowRight, Award, Star, Eye, ChevronUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800',
    description: 'A full-featured e-commerce platform with real-time inventory management.',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    highlight: true,
  },
  {
    title: 'Healthcare App',
    category: 'Mobile Development',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800',
    description: 'Mobile application for patient management and telemedicine services.',
    technologies: ['React Native', 'Firebase', 'WebRTC'],
    highlight: false,
  },
  {
    title: 'AI-Powered Analytics',
    category: 'Machine Learning',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800',
    description: 'Advanced analytics platform using machine learning algorithms.',
    technologies: ['Python', 'TensorFlow', 'AWS SageMaker'],
    highlight: true,
  },
  {
    title: 'Smart Home System',
    category: 'IoT',
    image: 'https://images.unsplash.com/photo-1558002038-bb4237b50b11?auto=format&fit=crop&w=800',
    description: 'IoT-based home automation system with voice control.',
    technologies: ['React', 'Node.js', 'MQTT', 'Raspberry Pi'],
    highlight: false,
  },
  {
    title: 'Financial Dashboard',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800',
    description: 'Real-time financial data visualization dashboard.',
    technologies: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
    highlight: false,
  },
  {
    title: 'Social Media App',
    category: 'Mobile Development',
    image:  'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800',
    description: 'Feature-rich social media platform with real-time messaging.',
    technologies: ['Flutter', 'Firebase', 'WebSocket'],
    highlight: true,
  },
];

const categories = ['All', 'Web Development', 'Mobile Development', 'Machine Learning', 'IoT'];

interface PortfolioProps {
  isDarkMode: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({ isDarkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const { scrollY } = useScroll();
  const location = useLocation();

  // Scroll to top when navigating to this page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Show scroll to top button when user scrolls down
  useEffect(() => {
    const unsubscribe = scrollY.onChange((value) => {
      setShowScrollTop(value > 300);
    });
    return () => unsubscribe();
  }, [scrollY]);

  // Handle scroll to top on button click
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Parallax effects for hero section
  const heroImageY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.6]);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    hidden: { y: 30, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    }
  };

  const heroTextAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const heroLineAnimation = {
    hidden: { width: 0 },
    visible: { 
      width: "100px",
      transition: {
        duration: 1.2,
        ease: "easeInOut"
      }
    }
  };

  const heroShapeAnimation = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16"
    >
      {/* Hero Section - Enhanced Light/Dark Theme */}
      <section ref={heroRef} className={`py-16 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b ${
        isDarkMode 
          ? 'from-dark-800 via-dark-900 to-dark-900' 
          : 'from-primary-50 via-white to-white'
      }`}>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0"></div>
        
        {/* Animated background elements with parallax */}
        <motion.div 
          variants={heroShapeAnimation}
          initial="hidden"
          animate={isHeroInView ? "visible" : "hidden"}
          style={{ y: heroImageY }}
          className={`absolute -top-40 -right-40 w-64 md:w-96 h-64 md:h-96 ${
            isDarkMode ? 'bg-primary-900/20' : 'bg-primary-100'
          } rounded-full opacity-40 blur-3xl`}
        />
        <motion.div 
          variants={heroShapeAnimation}
          initial="hidden"
          animate={isHeroInView ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
          style={{ y: heroImageY }}
          className={`absolute -bottom-40 -left-40 w-96 h-96 ${
            isDarkMode ? 'bg-secondary-900/20' : 'bg-secondary-100'
          } rounded-full opacity-40 blur-3xl`}
        />
        <motion.div 
          variants={heroShapeAnimation}
          initial="hidden"
          animate={isHeroInView ? "visible" : "hidden"}
          transition={{ delay: 0.4 }}
          style={{ y: heroImageY }}
          className={`absolute top-1/4 left-1/4 w-32 h-32 ${
            isDarkMode ? 'bg-primary-800/20' : 'bg-primary-200'
          } rounded-full opacity-20 blur-2xl animate-pulse-slow`}
        />
        <motion.div 
          variants={heroShapeAnimation}
          initial="hidden"
          animate={isHeroInView ? "visible" : "hidden"}
          transition={{ delay: 0.6 }}
          style={{ y: heroImageY }}
          className={`absolute bottom-1/3 right-1/4 w-24 h-24 ${
            isDarkMode ? 'bg-secondary-800/20' : 'bg-secondary-200'
          } rounded-full opacity-20 blur-2xl animate-pulse-slow`}
        />
        
        <motion.div 
          style={{ opacity: heroOpacity }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <motion.div
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            className="text-center"
          >
            <motion.div 
              variants={heroLineAnimation}
              className="h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-6 md:mb-8"
            ></motion.div>
            
            <motion.h1 
              variants={heroTextAnimation}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 gradient-text"
            >
              Our Portfolio
            </motion.h1>
            
            <motion.p
              variants={heroTextAnimation}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
            >
              Explore our latest projects and see how we've helped businesses achieve their digital goals.
            </motion.p>
            
            <motion.div
              variants={heroTextAnimation}
              transition={{ delay: 0.4 }}
              className="flex justify-center space-x-4"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 30px -10px rgba(37, 99, 235, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary flex items-center gap-2"
                >
                  Start Your Project
                  <ArrowRight className="h-4 w-4 ml-1" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Enhanced scrolling indicator with mouse wheel animation */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <div className="scroll-indicator">
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                opacity: [0.2, 1, 0.2]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5, 
                ease: "easeInOut" 
              }}
              className="w-2 h-4 bg-primary-500 rounded-full mx-auto"
            />
          </div>
        </motion.div>
      </section>

      {/* Filter Section - Enhanced */}
      <section className="py-8 md:py-12 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center mb-4 md:mb-6"
          >
            <Filter className="h-4 w-4 md:h-5 md:w-5 text-primary-600 mr-2" />
            <h2 className="text-xl md:text-2xl font-semibold gradient-text">Browse Our Work</h2>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 md:gap-4 mt-4 md:mt-6"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                variants={fadeInUp}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-lg border-2 border-primary-200'
                    : `${isDarkMode ? 'bg-dark-700 text-light-300' : 'bg-light-100 text-light-700'} hover:bg-light-200 border-2 border-transparent`
                }`}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 5px 15px -5px rgba(0, 0, 0, 0.1)",
                  y: -2 
                }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid - Enhanced Light/Dark Theme */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    damping: 15
                  }}
                  className="group relative overflow-hidden rounded-xl shadow-soft border border-light-200 hover:shadow-xl hover:border-primary-200 transition-all duration-500"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Enhanced overlay gradient with animation */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`absolute inset-0 bg-gradient-to-t ${
                        isDarkMode 
                          ? 'from-dark-900/90 via-dark-800/40 to-transparent' 
                          : 'from-light-900/80 via-light-800/40 to-transparent'
                      }`}
                    ></motion.div>
                    
                    {/* Enhanced featured badge with animation */}
                    {project.highlight && (
                      <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                        className="absolute top-2 md:top-3 left-2 md:left-3 bg-primary-600 text-white px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs font-semibold shadow-lg flex items-center gap-1"
                      >
                        <Star className="h-3 w-3" /> Featured
                      </motion.div>
                    )}
                    
                    {/* Enhanced view details button with animation */}
                    <motion.div 
                      className="absolute bottom-3 md:bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ y: 20 }}
                      animate={hoveredIndex === index ? { y: 0 } : { y: 20 }}
                      transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                    >
                      <Link to="/contact">
                        <motion.button
                          whileHover={{ 
                            scale: 1.05, 
                            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                            y: -2
                          }}
                          whileTap={{ scale: 0.95 }}
                          className={`${
                            isDarkMode 
                              ? 'bg-dark-800/95 text-white border-dark-700' 
                              : 'bg-white/95 text-primary-600 border-primary-100'
                          } backdrop-blur-sm px-3 md:px-5 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium shadow-lg flex items-center gap-1 md:gap-2 border`}
                        >
                          <Eye className="h-3 w-3 md:h-4 md:w-4" /> View Details
                        </motion.button>
                      </Link>
                    </motion.div>
                  </div>
                  
                  {/* Project info with enhanced animations */}
                  <div className="p-4 md:p-6 relative">
                    <div className={`absolute -inset-[100px] ${
                      isDarkMode 
                        ? 'bg-primary-900/10' 
                        : 'bg-primary-50/50'
                    } rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out -z-10`}></div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
                      className="text-xs md:text-sm text-primary-600 font-medium mb-1 md:mb-2"
                    >
                      {project.category}
                    </motion.div>
                    
                    <motion.h3 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.05, duration: 0.5 }}
                      className={`text-base md:text-xl font-semibold mb-1 md:mb-2 flex items-center gap-2 group-hover:text-primary-600 transition-colors duration-300`}
                    >
                      {project.title}
                      <ExternalLink className="h-3 w-3 md:h-4 md:w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.h3>
                    
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.05, duration: 0.5 }}
                      className="text-sm md:text-base mb-3 md:mb-4 line-clamp-2 md:line-clamp-none"
                    >
                      {project.description}
                    </motion.p>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.05, duration: 0.5 }}
                      className="flex flex-wrap gap-1 md:gap-2"
                    >
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 + index * 0.05 + techIndex * 0.1, duration: 0.3 }}
                          className={`px-2 md:px-3 py-0.5 md:py-1 text-[10px] md:text-xs rounded-full group-hover:bg-primary-200 transition-colors duration-300 ${
                            isDarkMode 
                              ? 'bg-dark-700 text-primary-400' 
                              : 'bg-primary-100 text-primary-700'
                          }`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12 md:py-20"
            >
              <p className="text-lg md:text-xl">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section - Enhanced Light/Dark Theme */}
      <section className={`py-16 md:py-24 relative overflow-hidden ${
        isDarkMode ? 'bg-dark-800' : 'bg-light-50'
      }`}>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent"></div>
        <div className={`absolute inset-0 bg-gradient-radial ${
          isDarkMode ? 'from-primary-900/10 to-transparent' : 'from-primary-100 to-transparent'
        } opacity-40`}></div>
        
        {/* Decorative elements */}
        <div className={`absolute top-1/4 right-1/3 w-48 md:w-64 h-48 md:h-64 ${
          isDarkMode ? 'bg-primary-800/10' : 'bg-primary-200'
        } rounded-full opacity-20 blur-2xl animate-pulse-slow`}></div>
        <div className={`absolute bottom-1/3 left-1/4 w-32 md:w-48 h-32 md:h-48 ${
          isDarkMode ? 'bg-secondary-800/10' : 'bg-secondary-200'
        } rounded-full opacity-20 blur-2xl animate-pulse-slow`}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-16 text-center gradient-text"
          >
            Our Track Record
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { value: '250+', label: 'Projects Completed', icon: Award },
              { value: '100+', label: 'Happy Clients', icon: Star },
              { value: '15+', label: 'Years Experience', icon: Award },
              { value: '25+', label: 'Industry Awards', icon: Award },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="card text-center group hover:shadow-xl hover:scale-105 transition-all duration-500 border border-primary-100 relative overflow-hidden p-3 md:p-6"
              >
                <div className={`absolute -inset-[100px] ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-primary-900/10 to-secondary-900/10' 
                    : 'bg-gradient-to-r from-primary-50 to-secondary-50'
                } rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 ease-in-out -z-10`}></div>
                
                <div className={`p-2 md:p-4 ${
                  isDarkMode 
                    ? 'bg-primary-800/30 group-hover:bg-primary-800/40' 
                    : 'bg-primary-100 group-hover:bg-primary-200'
                } rounded-full w-10 h-10 md:w-16 md:h-16 mx-auto mb-2 md:mb-4 transition-colors flex items-center justify-center`}>
                  <stat.icon className={`w-5 h-5 md:w-8 md:h-8 ${
                    isDarkMode ? 'text-primary-400' : 'text-primary-600'
                  }`} />
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.3 + index * 0.1,
                    type: "spring",
                    stiffness: 80
                  }}
                  className={`text-2xl md:text-4xl font-bold ${
                    isDarkMode ? 'text-primary-400' : 'text-primary-600'
                  } mb-1 md:mb-2`}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm md:text-base font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced Light/Dark Theme */}
      <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent"></div>
        
        {/* Enhanced background elements */}
        <div className={`absolute -top-40 -right-40 w-64 md:w-96 h-64 md:h-96 ${
          isDarkMode ? 'bg-primary-900/10' : 'bg-primary-100'
        } rounded-full opacity-30 blur-3xl`}></div>
        <div className={`absolute -bottom-40 -left-40 w-64 md:w-96 h-64 md:h-96 ${
          isDarkMode ? 'bg-secondary-900/10' : 'bg-secondary-100'
        } rounded-full opacity-30 blur-3xl`}></div>
        
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <motion.div 
            whileHover={{ boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.15)", translateY: -5 }}
            transition={{ duration: 0.5 }}
            className={`card max-w-4xl mx-auto py-8 md:py-16 px-4 md:px-6 lg:px-16 overflow-hidden relative ${
              isDarkMode 
                ? 'bg-gradient-to-r from-dark-800 via-dark-900 to-dark-800 border-2 border-dark-700' 
                : 'bg-gradient-to-r from-primary-50 via-white to-secondary-50 border-2 border-primary-100'
            } rounded-2xl shadow-xl`}
          >
            <div className={`absolute -top-24 -right-24 w-64 h-64 ${
              isDarkMode ? 'bg-primary-900/20' : 'bg-primary-100'
            } rounded-full filter blur-3xl`}></div>
            <div className={`absolute -bottom-24 -left-24 w-64 h-64 ${
              isDarkMode ? 'bg-secondary-900/20' : 'bg-secondary-100'
            } rounded-full filter blur-3xl`}></div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 gradient-text">Ready to Transform Your Ideas?</h2>
              <p className="text-base md:text-xl mb-6 md:mb-10 max-w-2xl mx-auto">
                Let's collaborate to create something extraordinary. Our team is ready to bring your vision to life.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 20px 40px -12px rgba(37, 99, 235, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-medium"
                >
                  Start a Project
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className={`fixed right-4 md:right-6 bottom-4 md:bottom-6 ${
              isDarkMode 
                ? 'bg-primary-500 hover:bg-primary-600' 
                : 'bg-primary-600 hover:bg-primary-700'
            } text-white p-2 md:p-3 rounded-full shadow-lg z-50 transition-colors`}
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-5 w-5 md:h-6 md:w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Portfolio;