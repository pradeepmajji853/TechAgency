import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Code2, Globe, Shield, Brain, Video, Rocket, ChevronDown, CheckCircle, Users, Trophy, Zap, ArrowRight, Star, Sparkles, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    title: 'Web Development',
    description: 'Creating responsive and dynamic web applications using cutting-edge technologies.',
    Icon: Globe
  },
  {
    title: 'App Development',
    description: 'Building native and cross-platform mobile applications for iOS and Android.',
    Icon: Code2
  },
  {
    title: 'Cybersecurity',
    description: 'Protecting your digital assets with advanced security solutions and best practices.',
    Icon: Shield
  },
  {
    title: 'Machine Learning',
    description: 'Implementing AI solutions to automate and optimize your business processes.',
    Icon: Brain
  },
  {
    title: 'Video Editing',
    description: 'Professional video editing and post-production services for all your needs.',
    Icon: Video
  }
];

const features = [
  {
    title: 'Expert Team',
    description: 'Our professionals have years of industry experience.',
    Icon: Users,
    delay: 0.1
  },
  {
    title: 'Award Winning',
    description: 'Recognized for excellence in digital solutions.',
    Icon: Trophy,
    delay: 0.2
  },
  {
    title: 'Fast Delivery',
    description: 'We pride ourselves on timely project completion.',
    Icon: Zap,
    delay: 0.3
  },
  {
    title: 'Quality Assurance',
    description: 'Rigorous testing ensures flawless products.',
    Icon: CheckCircle,
    delay: 0.4
  }
];

// Animated typing effect text phrases
const phrases = [
  "Innovative Solutions", 
  "Creative Designs", 
  "Custom Development",
  "Business Growth"
];

const TypingAnimation = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100);

  useEffect(() => {
    const ticker = setInterval(() => {
      const i = currentPhrase % phrases.length;
      const fullText = phrases[i];
      
      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
      } else {
        setText(fullText.substring(0, text.length + 1));
      }
      
      if (!isDeleting && text === fullText) {
        setIsDeleting(true);
        setDelta(150);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setCurrentPhrase(currentPhrase + 1);
        setDelta(100);
      }
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta, isDeleting, currentPhrase]);

  return (
    <motion.span className="text-primary-600 font-semibold relative">
      {text}<span className="absolute right-[-4px] top-0 animate-pulse">|</span>
    </motion.span>
  );
};

const Home = () => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroY = useTransform(scrollY, [0, 400], [0, 150]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  // Animation states for sequential entry
  const [showMainContent, setShowMainContent] = useState(false);
  const [showSecondaryContent, setShowSecondaryContent] = useState(false);

  useEffect(() => {
    // Ensure video plays after component mounts
    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', () => {
        setVideoLoaded(true);
      });
      
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
    
    // Trigger sequential animations
    const mainTimer = setTimeout(() => setShowMainContent(true), 300);
    const secondaryTimer = setTimeout(() => setShowSecondaryContent(true), 800);
    
    return () => {
      clearTimeout(mainTimer);
      clearTimeout(secondaryTimer);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section - Enhanced for Mobile */}
      <section className="min-h-[100svh] relative overflow-hidden flex items-center bg-gradient-to-b from-primary-50 to-white">
        {/* Abstract Shapes - Optimized for Mobile */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-0 right-0 w-[80vw] md:w-[800px] h-[80vw] md:h-[800px] bg-primary-50 rounded-full translate-x-1/3 -translate-y-1/3 opacity-80"></div>
          <div className="absolute bottom-0 left-0 w-[60vw] md:w-[600px] h-[60vw] md:h-[600px] bg-secondary-50 rounded-full -translate-x-1/3 translate-y-1/3 opacity-70"></div>
          
          <div className="absolute top-[5%] left-[10%] w-12 md:w-20 h-12 md:h-20 bg-primary-100 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-[15%] right-[5%] w-8 md:w-12 h-8 md:h-12 bg-secondary-100 rounded-full animate-pulse-slow" style={{ animationDelay: "1.5s" }}></div>
          <div className="absolute bottom-[15%] left-[20%] w-10 md:w-16 h-10 md:h-16 bg-primary-100 rounded-full animate-pulse-slow" style={{ animationDelay: "0.7s" }}></div>
          
          <div className="absolute top-[30%] right-[15%] w-20 md:w-32 h-20 md:h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl rotate-12 opacity-60 hidden sm:block"></div>
          <div className="absolute bottom-[25%] left-[20%] w-24 md:w-40 h-24 md:h-40 bg-gradient-to-tr from-secondary-100 to-secondary-200 rounded-xl -rotate-12 opacity-60 hidden sm:block"></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0"></div>
        
        {/* Hero Content */}
        <motion.div 
          className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 md:py-12 lg:py-20"
          style={{ opacity: heroOpacity, y: heroY }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center">
            {/* Left Content Column - Mobile Optimized */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showMainContent ? 1 : 0, y: showMainContent ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 relative order-2 lg:order-1 text-center lg:text-left"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: showMainContent ? "100px" : 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-4 md:mb-6 lg:mb-8 mx-auto lg:mx-0"
              ></motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: showMainContent ? 1 : 0, y: showMainContent ? 0 : -20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="inline-flex items-center gap-2 bg-light-100 text-primary-600 px-3 py-1 md:px-4 md:py-1 rounded-full mb-4 md:mb-6 border border-primary-100 shadow-sm"
              >
                <Sparkles className="h-3 w-3 md:h-4 md:w-4" />
                <span className="text-xs md:text-sm font-medium">Award-Winning Digital Agency</span>
              </motion.div>
              
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 text-light-900 leading-tight"
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: showMainContent ? 1 : 0, y: showMainContent ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="block"
                >
                  Transform Your 
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: showMainContent ? 1 : 0, y: showMainContent ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="gradient-text block"
                >
                  Digital Presence
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: showMainContent ? 1 : 0, y: showMainContent ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-light-800 block mt-3 md:mt-4"
                >
                  With <TypingAnimation />
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: showMainContent ? 1 : 0, y: showMainContent ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="text-base md:text-lg lg:text-xl text-light-700 mb-6 md:mb-8 lg:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                We're a full-service technology agency that partners with ambitious 
                businesses to create exceptional digital experiences that drive growth and deliver results.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: showMainContent ? 1 : 0, y: showMainContent ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="flex flex-wrap gap-4 md:gap-6 justify-center lg:justify-start"
              >
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(37, 99, 235, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-primary flex items-center gap-2"
                  >
                    Start Your Project <ArrowRight className="h-3 w-3 md:h-4 md:w-4 ml-1" />
                  </motion.button>
                </Link>
                <Link to="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-secondary"
                  >
                    Explore Services
                  </motion.button>
                </Link>
              </motion.div>
              
              {/* Companies Section - Mobile Optimized */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showSecondaryContent ? 1 : 0 }}
                transition={{ duration: 1, delay: 2.1 }}
                className="mt-8 md:mt-12 lg:mt-16 hidden sm:block"
              >
                <p className="text-xs md:text-sm uppercase tracking-wider text-light-500 mb-3 md:mb-4">Trusted by Industry Leaders</p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 lg:gap-8">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0.4 }}
                      whileHover={{ opacity: 1, scale: 1.05 }}
                      className="grayscale hover:grayscale-0 transition-all duration-300"
                    >
                      <img 
                        src={`/logos/company-${i}.svg`} 
                        alt={`Partner company ${i}`} 
                        className="h-6 md:h-8 w-auto"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right Content - Image Column - Mobile Optimized */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: showMainContent ? 1 : 0, scale: showMainContent ? 1 : 0.9 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="lg:col-span-5 order-1 lg:order-2 relative"
            >
              <div className="relative max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:max-w-none px-4 sm:px-0">
                {/* Main Image with shadow and border */}
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.1)" }}
                  className="relative z-10 bg-white rounded-xl md:rounded-2xl overflow-hidden border border-light-200 shadow-xl md:shadow-2xl"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80" 
                    alt="Digital Transformation" 
                    className="w-full h-auto"
                    style={{ aspectRatio: "4/5", objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent"></div>
                </motion.div>
                
                {/* Decorative elements - Sized for mobile */}
                <div className="absolute -top-3 md:-top-4 -left-3 md:-left-4 w-16 md:w-24 h-16 md:h-24 bg-primary-100 rounded-lg md:rounded-xl -z-10"></div>
                <div className="absolute -bottom-3 md:-bottom-4 -right-3 md:-right-4 w-20 md:w-32 h-20 md:h-32 bg-secondary-100 rounded-lg md:rounded-xl -z-10"></div>
                
                {/* Stats cards - Mobile optimized */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: showSecondaryContent ? 1 : 0, x: showSecondaryContent ? 0 : -20 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="absolute -left-4 md:-left-10 top-1/4 glass-effect p-2 md:p-4 rounded-lg md:rounded-xl shadow-lg md:shadow-xl z-20"
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="p-1 md:p-2 bg-primary-100 rounded-md md:rounded-lg">
                      <Trophy className="h-3 w-3 md:h-5 md:w-5 text-primary-600" />
                    </div>
                    <div>
                      <div className="text-sm md:text-xl font-bold text-light-900">250+</div>
                      <div className="text-[10px] md:text-sm text-light-600">Projects Completed</div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: showSecondaryContent ? 1 : 0, x: showSecondaryContent ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                  className="absolute -right-4 md:-right-10 bottom-1/4 glass-effect p-2 md:p-4 rounded-lg md:rounded-xl shadow-lg md:shadow-xl z-20"
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="p-1 md:p-2 bg-secondary-100 rounded-md md:rounded-lg">
                      <Users className="h-3 w-3 md:h-5 md:w-5 text-secondary-600" />
                    </div>
                    <div>
                      <div className="text-sm md:text-xl font-bold text-light-900">99%</div>
                      <div className="text-[10px] md:text-sm text-light-600">Client Satisfaction</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced scroll down indicator - Mobile Optimized */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: showSecondaryContent ? 1 : 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-4 md:bottom-8 lg:bottom-10 left-0 right-0 flex justify-center z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer flex flex-col items-center glass-effect px-3 py-1 md:px-4 md:py-2 rounded-full"
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
              });
            }}
          >
            <span className="text-xs md:text-sm text-primary-600 font-medium">Explore Our Services</span>
            <ChevronDown className="h-4 w-4 md:h-5 md:w-5 text-primary-600" />
          </motion.div>
        </motion.div>
      </section>

      {/* Key Features Section - Enhanced with more modern styling */}
      <section className="py-24 bg-light-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary-100 to-transparent opacity-70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-description">
              TechAgency combines technical expertise with creative innovation to deliver exceptional results.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: feature.delay }}
                className="card group h-full transform transition-transform hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-primary-100 p-3 rounded-xl group-hover:bg-primary-200 transition-colors">
                    <feature.Icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-light-900">{feature.title}</h3>
                </div>
                <p className="text-light-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced with better card animations */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Services</h2>
            <p className="section-description">
              We offer a comprehensive suite of digital services to help your business succeed in the digital age.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced with more attractive counters */}
      <section className="py-24 bg-light-100 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Impact</h2>
            <p className="section-description">
              Numbers speak louder than words. Here's what we've accomplished so far.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '250+', label: 'Projects Completed' },
              { value: '40+', label: 'Team Members' },
              { value: '15+', label: 'Years Experience' },
              { value: '99%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 20, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card hover:shadow-xl hover:border-primary-200 transition-all duration-300"
              >
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold text-primary-600 mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1.5, 
                    delay: 0.3 + index * 0.1,
                  }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-light-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced with more professional design */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-radial from-primary-50 to-transparent opacity-70 z-0" />
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <div className="card max-w-4xl mx-auto py-12 px-6 md:px-12 overflow-hidden relative animate-gradient-x bg-gradient-to-r from-primary-50 via-white to-secondary-50 border-2 border-primary-100">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-100 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary-100 rounded-full filter blur-3xl"></div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title">Ready to Transform Your Business?</h2>
              <p className="text-xl text-light-700 mb-8 max-w-2xl mx-auto">
                Let's work together to bring your digital vision to life. Contact us today to get started.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(37, 99, 235, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary"
                >
                  <Rocket className="h-5 w-5" />
                  Start Your Project
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home;