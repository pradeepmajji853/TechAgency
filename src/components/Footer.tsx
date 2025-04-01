import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  };
  
  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };
  
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Support', href: '#' },
        { name: 'FAQ', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
      ],
    },
  ];
  
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];
  
  return (
    <footer className={`relative pt-16 pb-8 border-t ${isDarkMode ? 'border-dark-700' : 'border-light-200'}`}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-100/40 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary-100/30 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h2 className="text-2xl font-bold mb-4 gradient-text">TechAgency</h2>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-light-700'}`}>
                Creating innovative digital solutions to help businesses thrive in the modern world.
              </p>
            </motion.div>
            
            <div className="space-y-2">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-primary-500 mt-0.5 mr-2" />
                <a href="mailto:info@techagency.com" className="hover:text-primary-600 transition-colors">
                  info@techagency.com
                </a>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-primary-500 mt-0.5 mr-2" />
                <a href="tel:+11234567890" className="hover:text-primary-600 transition-colors">
                  +1 (123) 456-7890
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-500 mt-0.5 mr-2" />
                <span>123 Tech Avenue, San Francisco, CA 94107</span>
              </div>
            </div>
          </div>
          
          {/* Footer Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="font-semibold mb-4 text-lg">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.href} 
                        className={`${
                          isDarkMode ? 'text-gray-400 hover:text-white' : 'text-light-700 hover:text-primary-600'
                        } transition-colors`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
        
        {/* Social Links and Copyright */}
        <div className={`pt-8 border-t ${isDarkMode ? 'border-dark-700' : 'border-light-200'} flex flex-col md:flex-row justify-between items-center`}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex space-x-4 mb-4 md:mb-0"
          >
            {socialLinks.map((social) => (
              <a 
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className={`${
                  isDarkMode 
                    ? 'bg-dark-800 text-gray-300 hover:bg-primary-900 hover:text-white' 
                    : 'bg-light-100 text-light-700 hover:bg-primary-100 hover:text-primary-600'
                } p-2 rounded-full transition-colors`}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-light-700'}`}
          >
            &copy; {currentYear} TechAgency. All rights reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;