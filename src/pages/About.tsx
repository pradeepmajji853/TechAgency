import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, Target, Clock, Award, Zap, Heart, Star, Coffee, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { icon: Users, value: '100+', label: 'Happy Clients' },
  { icon: Trophy, value: '250+', label: 'Projects Completed' },
  { icon: Target, value: '99%', label: 'Client Satisfaction' },
  { icon: Clock, value: '15+', label: 'Years Experience' },
];

const About = () => {
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
              About TechAgency
            </h1>
            <p className="text-xl text-light-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              We are a team of passionate tech experts dedicated to delivering innovative digital solutions
              that drive business growth and meaningful transformation.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(37, 99, 235, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary"
                >
                  Get In Touch
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Light Theme */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center group transform transition-transform hover:scale-105 hover:shadow-xl"
              >
                <div className="inline-flex h-16 w-16 mx-auto items-center justify-center p-3 bg-primary-100 rounded-xl mb-6 group-hover:bg-primary-200 transition-colors">
                  <stat.icon className="h-8 w-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-light-900 mb-2">{stat.value}</div>
                <div className="text-light-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission - Light Theme */}
      <section className="py-24 bg-light-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary-100 to-transparent opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="section-title mb-6"
            >
              Our Mission
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-light-700 leading-relaxed italic"
            >
              "To empower businesses with innovative technology solutions that drive growth, 
              enhance efficiency, and create exceptional digital experiences."
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="card p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-100 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary-100 rounded-full opacity-50 blur-xl"></div>
            <div className="relative z-10">
              <p className="text-light-700 mb-6 leading-relaxed">
                At TechAgency, we believe that technology should work for people, not the other way around. 
                Our approach combines technical excellence with human-centered design to create digital 
                solutions that are not only powerful and efficient but also intuitive and enjoyable to use.
              </p>
              <p className="text-light-700 leading-relaxed">
                We partner with businesses of all sizes, from startups to enterprises, to help them 
                navigate the complex digital landscape and achieve their goals through technology. 
                Our commitment to quality, innovation, and client satisfaction drives everything we do.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section - Light Theme */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title mb-6">Our Story</h2>
              <div className="space-y-6 text-light-700">
                <p className="leading-relaxed">
                  Founded in 2008, TechAgency began as a small team of developers with a shared vision of creating 
                  technology solutions that make a real difference for businesses and their customers.
                </p>
                <p className="leading-relaxed">
                  As technology evolved, so did we. From web development to mobile apps, cybersecurity, and 
                  AI-driven solutions, we've continuously expanded our expertise to meet the changing needs 
                  of the digital world.
                </p>
                <p className="leading-relaxed">
                  Today, we're proud to be a leading digital solutions provider with a global client base and 
                  a track record of successful projects across multiple industries. Our journey continues as 
                  we embrace new technologies and challenges, always with the same passion for innovation and 
                  commitment to excellence that started it all.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden border border-light-200 shadow-2xl relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
                  alt="Team collaboration"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-100 rounded-xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary-100 rounded-xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - Light Theme */}
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
            <h2 className="section-title mb-6">Our Core Values</h2>
            <p className="text-light-700 max-w-2xl mx-auto text-lg">
              These principles guide every decision we make and every solution we deliver.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description:
                  'We embrace creativity and forward-thinking to develop solutions that push boundaries and create new possibilities.',
                icon: Zap
              },
              {
                title: 'Excellence',
                description:
                  'We maintain the highest standards in everything we do, from code quality to client communication and project management.',
                icon: Award
              },
              {
                title: 'Collaboration',
                description:
                  'We believe great things happen when we work together, fostering strong partnerships with our clients and within our team.',
                icon: Users
              },
              {
                title: 'Integrity',
                description:
                  'We operate with honesty and transparency, building trust through reliable service and ethical business practices.',
                icon: Heart
              },
              {
                title: 'Adaptability',
                description:
                  'We embrace change and continuously evolve our skills and approaches to stay ahead in the rapidly changing tech landscape.',
                icon: Target
              },
              {
                title: 'Client Focus',
                description:
                  'We put our clients\' needs first, measuring our success by the value and satisfaction we deliver to those we serve.',
                icon: Star
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group hover:shadow-xl hover:border-primary-200 transition-all duration-300"
              >
                <div className="mb-6 p-3 bg-primary-100 rounded-xl w-fit group-hover:bg-primary-200 transition-colors duration-300">
                  <value.icon className="h-7 w-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-light-900">{value.title}</h3>
                <p className="text-light-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Light Theme */}
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
            <h2 className="section-title mb-6">Meet Our Team</h2>
            <p className="text-light-700 max-w-2xl mx-auto text-lg">
              Our talented team of experts brings diverse skills and perspectives to every project.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO & Founder',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80'
              },
              {
                name: 'Michael Chen',
                role: 'CTO',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80'
              },
              {
                name: 'Jessica Rodriguez',
                role: 'Design Director',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80'
              },
              {
                name: 'David Kim',
                role: 'Lead Developer',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80'
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl mb-6 shadow-soft transform transition-transform group-hover:scale-105 group-hover:shadow-xl">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 via-transparent to-transparent"></div>
                </div>
                <h3 className="text-xl font-semibold text-light-900 mb-1">{member.name}</h3>
                <p className="text-primary-600">{member.role}</p>
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
            <h2 className="text-3xl font-bold mb-6 text-light-900">Ready to Work Together?</h2>
            <p className="text-xl text-light-700 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your business succeed in the digital world.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(37, 99, 235, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
              >
                Contact Us Today
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default About;