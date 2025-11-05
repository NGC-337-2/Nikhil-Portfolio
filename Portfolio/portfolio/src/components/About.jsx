'use client';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/site';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="gradient-text">About Me</span>
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate IT professional with 5+ years of experience specializing in 
                <span className="text-cyan-400 font-semibold"> cloud architecture</span> and 
                <span className="text-purple-400 font-semibold"> full-stack development</span>. 
                My journey began with frontend development and evolved into building scalable, 
                cloud-native applications.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I thrive on solving complex problems and enjoy the creative process of 
                <span className="gradient-text font-semibold"> "vibe coding"</span> — finding 
                flow states where technology and creativity intersect. Whether it's designing 
                microservices architectures or training machine learning models, I'm always 
                exploring new ways to push boundaries.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me contributing to open-source projects, 
                writing technical blogs, or experimenting with the latest AI tools and frameworks.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="text-cyan-400">📍</span>
                  {siteConfig.location}
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="text-cyan-400">✉️</span>
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-cyan-400 transition-colors">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="w-48 h-48 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full p-1">
                  <div className="w-full h-full bg-gray-800 rounded-full overflow-hidden">
                    <Image
                      src="/avatar.jpg"
                      alt={`${siteConfig.name} - Professional Photo`}
                      width={192}
                      height={192}
                      className="w-full h-full object-cover rounded-full"
                      priority
                    />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-cyan-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                  Available
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}