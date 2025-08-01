'use client';
import React, { useState } from 'react';
import { Code, Palette, Rocket, Search, Smartphone, Zap } from 'lucide-react';

export function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices.",
      features: ["React & Next.js", "Responsive Design", "Performance Optimization"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
      features: ["iOS & Android", "Cross-platform", "App Store Optimization"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that engage users and drive conversions.",
      features: ["User Research", "Prototyping", "Design Systems"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Boost your online visibility and drive organic traffic to your website.",
      features: ["Keyword Research", "Technical SEO", "Content Strategy"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast websites that provide exceptional user experiences.",
      features: ["Speed Optimization", "Core Web Vitals", "CDN Integration"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Rocket,
      title: "Digital Strategy",
      description: "Comprehensive digital solutions to grow your business and reach your goals.",
      features: ["Market Analysis", "Growth Planning", "Technology Consulting"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 transform hover:scale-110 transition-transform duration-300">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            My Services
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Transforming ideas into digital experiences with cutting-edge technology and creative excellence
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card */}
                <div className="relative h-full bg-transparent rounded-2xl p-4 sm:p-6 lg:p-8 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden backdrop-blur-none border-0">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${service.color} rounded-xl mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center text-xs sm:text-sm text-gray-400 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300"
                        style={{
                          transitionDelay: `${featureIndex * 100}ms`
                        }}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-3 group-hover:scale-150 transition-transform duration-300`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/10 transition-colors duration-500"></div>
                </div>

                {/* Floating Elements */}
                <div className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r ${service.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse`}></div>
                <div className={`absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r ${service.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse`} style={{ animationDelay: '0.5s' }}></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <button
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              onClick={() => window.location.href = 'mailto:abdul.ahadt732@gmail.com'}
            >
              Get Started Today
            </button>
            <button
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base flex items-center justify-center"
              onClick={() => window.open('https://wa.me/923259684493', '_blank')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-4 h-4 mr-2">
                <path d="M380.9 97.1C339.4 55.6 283.8 32 224 32S108.6 55.6 67.1 97.1 32 195.2 32 256c0 40.5 10.3 79.9 29.8 114.3L32 480l120.2-30.8c31.4 17.1 66.8 26.2 101.8 26.2H224c59.8 0 115.4-23.6 156.9-65.1s65.1-100.2 65.1-160.1c0-59.9-23.6-115.5-65.1-157zm-144 329.8c-2.4 0-4.9-.1-7.2-.6-33.3-6.9-63.5-22.3-88.7-44.4-17.7-15.5-32.9-33.2-44.5-52.6-11.4-19.3-17.4-40.4-17.4-62.6 0-32.9 8.2-63.5 24.5-91.8 16.3-28.3 38.6-49.9 66.9-66.2 28.3-16.3 58.9-24.5 91.8-24.5 32.9 0 63.5 8.2 91.8 24.5 28.3 16.3 49.9 38.6 66.2 66.9 16.3 28.3 24.5 58.9 24.5 91.8s-8.2 63.5-24.5 91.8c-16.3 28.3-38.6 49.9-66.9 66.2-28.3 16.3-58.9 24.5-91.8 24.5zm0-248.8c-5.4 0-9.8 4.4-9.8 9.8s4.4 9.8 9.8 9.8c12.2 0 22.3 9.9 22.3 22.1s-10.1 22.1-22.3 22.1c-5.4 0-9.8 4.4-9.8 9.8s4.4 9.8 9.8 9.8c22.9 0 41.9-18.7 41.9-41.7s-19-41.7-41.9-41.7z"/>
              </svg>
              WhatsApp
            </button>
            <button
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/20 text-gray-300 rounded-xl font-semibold hover:border-blue-500/50 hover:text-blue-400 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              onClick={() => window.location.href = '/#projects'}
            >
              View Portfolio
            </button>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 mt-3 sm:mt-4 px-4">
            Ready to bring your vision to life? Let's create something amazing together.
          </p>
        </div>
      </div>
    </section>
  );
}