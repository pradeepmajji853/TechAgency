import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, ArrowRight, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', subject: '', message: '' };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      valid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  // Animation variants
  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6 }
  };

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
              Get in Touch
            </h1>
            <p className="text-xl text-light-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Light Theme */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="md:col-span-7 card shadow-xl border-primary-100"
            >
              <h2 className="text-2xl font-semibold mb-8 text-light-900 inline-flex items-center">
                <span className="mr-2">Send us a Message</span>
                <div className="h-1 w-1 rounded-full bg-primary-600"></div>
              </h2>
              
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-primary-100 text-primary-700 p-5 rounded-lg flex items-center gap-3 mb-8 shadow-sm"
                >
                  <CheckCircle className="h-5 w-5 text-primary-600" />
                  <p className="font-medium">Thank you! Your message has been sent successfully.</p>
                </motion.div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-light-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className={`input-field ${errors.name ? 'border-red-500 focus:ring-red-500' : 'focus:ring-primary-500'}`}
                      disabled={isSubmitting}
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-light-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`input-field ${errors.email ? 'border-red-500 focus:ring-red-500' : 'focus:ring-primary-500'}`}
                      disabled={isSubmitting}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-light-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`input-field ${errors.subject ? 'border-red-500 focus:ring-red-500' : 'focus:ring-primary-500'}`}
                    disabled={isSubmitting}
                  />
                  {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-light-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`input-field resize-none ${errors.message ? 'border-red-500 focus:ring-red-500' : 'focus:ring-primary-500'}`}
                    disabled={isSubmitting}
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -10px rgba(37, 99, 235, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full btn btn-primary py-3 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="md:col-span-5 space-y-10"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-8 text-light-900 inline-flex items-center">
                  <span className="mr-2">Contact Information</span>
                  <div className="h-1 w-1 rounded-full bg-primary-600"></div>
                </h2>
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-start gap-4 group" 
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="p-3 bg-primary-100 rounded-lg group-hover:bg-primary-200 transition-colors">
                      <MapPin className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1 text-light-900">Our Location</h3>
                      <p className="text-light-700">123 Tech Street, Digital City, 12345</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-start gap-4 group" 
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="p-3 bg-primary-100 rounded-lg group-hover:bg-primary-200 transition-colors">
                      <Phone className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1 text-light-900">Phone Number</h3>
                      <a href="tel:+15551234567" className="text-light-700 hover:text-primary-600 transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-start gap-4 group" 
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="p-3 bg-primary-100 rounded-lg group-hover:bg-primary-200 transition-colors">
                      <Mail className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1 text-light-900">Email Address</h3>
                      <a href="mailto:info@techagency.com" className="text-light-700 hover:text-primary-600 transition-colors">
                        info@techagency.com
                      </a>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-start gap-4 group" 
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="p-3 bg-primary-100 rounded-lg group-hover:bg-primary-200 transition-colors">
                      <Clock className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1 text-light-900">Working Hours</h3>
                      <p className="text-light-700">Monday - Friday: 9am - 6pm</p>
                      <p className="text-light-700">Weekend: Closed</p>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Map */}
              <div className="mt-10">
                <h2 className="text-2xl font-semibold mb-6 text-light-900 inline-flex items-center">
                  <span className="mr-2">Find Us</span>
                  <div className="h-1 w-1 rounded-full bg-primary-600"></div>
                </h2>
                <div className="rounded-xl overflow-hidden border border-light-200 shadow-soft h-64 bg-light-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Globe className="h-20 w-20 text-primary-200" />
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-100 rounded-full opacity-50 blur-xl"></div>
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary-100 rounded-full opacity-50 blur-xl"></div>
                  </div>
                  {/* Placeholder for actual map */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-light-700 text-center px-8">Interactive map would be displayed here</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Light Theme */}
      <section className="py-24 bg-light-100 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-radial from-primary-100 to-transparent opacity-30"></div>
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-6">Frequently Asked Questions</h2>
            <p className="text-light-700 text-lg">
              Find answers to common questions about our services.
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {[
              {
                question: "What services do you offer?",
                answer: "We offer a comprehensive range of digital services including web development, mobile app development, cybersecurity solutions, AI & machine learning implementation, cloud solutions, database management, video production, and digital marketing."
              },
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 3-6 months. We'll provide a detailed timeline after our initial consultation."
              },
              {
                question: "What is your pricing structure?",
                answer: "We offer both fixed-price and time-and-materials pricing models depending on project requirements. We'll provide a detailed quote after understanding your project needs during our initial consultation."
              },
              {
                question: "Do you offer ongoing support after project completion?",
                answer: "Yes, we offer maintenance and support packages tailored to your needs. This includes regular updates, security patches, performance optimization, and technical support."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group hover:shadow-xl hover:border-primary-200 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-light-900 group-hover:text-primary-700 transition-colors">{faq.question}</h3>
                <p className="text-light-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;