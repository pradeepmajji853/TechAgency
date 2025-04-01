import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Code2,
  Shield,
  Brain,
  Video,
  Smartphone,
  Database,
  Cloud,
  LineChart,
  Settings,
  ArrowRight,
  CheckCircle,
  Zap,
  Award,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description:
      'Custom web applications built with modern frameworks and responsive design principles.',
    features: ['React/Next.js', 'Vue/Nuxt.js', 'Node.js/Express', 'PHP/Laravel'],
    color: 'primary'
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description:
      'Native and cross-platform mobile applications for iOS and Android platforms.',
    features: ['React Native', 'Flutter', 'iOS (Swift)', 'Android (Kotlin)'],
    color: 'secondary'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description:
      'Comprehensive security solutions to protect your digital assets and data.',
    features: ['Security Audits', 'Penetration Testing', 'Security Training', 'Compliance'],
    color: 'primary'
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description:
      'Intelligent solutions that leverage the latest advances in artificial intelligence.',
    features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Deep Learning'],
    color: 'secondary'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description:
      'Scalable cloud infrastructure and services for modern applications.',
    features: ['AWS', 'Azure', 'Google Cloud', 'DevOps'],
    color: 'primary'
  },
  {
    icon: Database,
    title: 'Database Solutions',
    description:
      'Efficient database design and optimization for your applications.',
    features: ['SQL', 'NoSQL', 'Data Migration', 'Performance Tuning'],
    color: 'secondary'
  },
  {
    icon: Video,
    title: 'Video Production',
    description:
      'Professional video editing and post-production services.',
    features: ['Motion Graphics', '3D Animation', 'Color Grading', 'Sound Design'],
    color: 'primary'
  },
  {
    icon: LineChart,
    title: 'Digital Marketing',
    description:
      'Data-driven marketing strategies to grow your online presence.',
    features: ['SEO', 'Social Media', 'Content Marketing', 'Analytics'],
    color: 'secondary'
  },
];

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16"
    >
      {/* Hero Section - Light Theme */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-primary-50 to-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-100 rounded-full opacity-50 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-8"
            ></motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Our Services
            </h1>
            <p className="text-xl text-light-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              We offer a comprehensive range of digital services to help your business
              thrive in the modern technological landscape.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex justify-center"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(37, 99, 235, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary"
                >
                  Discuss Your Project
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Light Theme */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group hover:shadow-xl hover:border-primary-200 transition-all duration-300 hover-3d overflow-hidden h-full shine"
              >
                <div className="absolute -inset-[100px] bg-primary-50/50 rounded-full blur-3xl group-hover:bg-primary-100/50 transition-all duration-700 ease-in-out -z-10"></div>
                <div className={`h-16 w-16 mb-6 p-4 bg-${service.color}-100 text-${service.color}-600 rounded-xl group-hover:bg-${service.color}-200 transition-colors`}>
                  <service.icon className="h-full w-full" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-light-900">{service.title}</h3>
                <p className="text-light-700 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-light-600">
                      <CheckCircle className={`h-4 w-4 text-${service.color}-500 mr-2`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Link to="/contact">
                    <motion.div
                      className={`inline-flex items-center text-${service.color}-600 font-medium hover:text-${service.color}-700 mt-2 relative`}
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
                        className={`absolute -bottom-1 left-0 h-0.5 bg-${service.color}-500/50 w-0`}
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Light Theme */}
      <section className="py-24 bg-light-100 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-radial from-primary-100 to-transparent opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-6">Why Choose Us</h2>
            <p className="text-light-700 max-w-2xl mx-auto text-lg">
              We deliver exceptional value through our commitment to quality, innovation, and client satisfaction.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: 'Fast Delivery',
                description: 'We understand the importance of time and deliver projects efficiently without compromising quality.',
                color: 'primary'
              },
              {
                icon: Award,
                title: 'Expert Team',
                description: 'Our professionals have years of industry experience and are passionate about what they do.',
                color: 'secondary'
              },
              {
                icon: Users,
                title: 'Client Focus',
                description: 'We work closely with you, ensuring your vision is understood and realized throughout the project.',
                color: 'primary'
              },
              {
                icon: Shield,
                title: 'Quality Assurance',
                description: 'Rigorous testing and quality control ensure flawless products that exceed expectations.',
                color: 'secondary'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group transform transition-transform hover:scale-105"
              >
                <div className={`mb-6 p-3 bg-${benefit.color}-100 rounded-xl w-fit group-hover:bg-${benefit.color}-200 transition-colors duration-300`}>
                  <benefit.icon className={`h-7 w-7 text-${benefit.color}-600`} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-light-900">{benefit.title}</h3>
                <p className="text-light-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Light Theme */}
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
            <h2 className="section-title mb-6">Our Process</h2>
            <p className="text-light-700 max-w-2xl mx-auto text-lg">
              We follow a systematic approach to ensure the successful delivery of every project.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-primary-100 z-0"></div>
            
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your needs and objectives', color: 'primary' },
              { step: '02', title: 'Planning', description: 'Developing a strategic roadmap', color: 'secondary' },
              { step: '03', title: 'Execution', description: 'Implementing the solution', color: 'primary' },
              { step: '04', title: 'Support', description: 'Ongoing maintenance and optimization', color: 'secondary' },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center relative z-10"
              >
                <div className={`h-12 w-12 bg-${phase.color}-100 text-${phase.color}-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-soft border border-${phase.color}-200`}>
                  <span className="text-lg font-bold">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-light-900">{phase.title}</h3>
                <p className="text-light-700">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Light Theme */}
      <section className="py-24 relative bg-light-100">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-radial from-primary-100 to-transparent opacity-50"></div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <div className="card max-w-4xl mx-auto py-12 px-6 md:px-12 border-2 border-primary-100 shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-light-900">Ready to Start Your Project?</h2>
            <p className="text-xl text-light-700 mb-8 max-w-2xl mx-auto">
              Let's discuss your needs and find the perfect solution for your business.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(37, 99, 235, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
              >
                Get a Free Consultation
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Services;