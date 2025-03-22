import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Home = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#121212]">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4A90E2]/10 via-transparent to-[#00D4FF]/10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
      </div>

      {/* Main Content */}
      <div className="relative pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div ref={heroRef} className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#EAEAEA]">Redefining</span>{' '}
              <span className="bg-gradient-to-r from-[#4A90E2] to-[#00D4FF] text-transparent bg-clip-text">
                Learning Path
              </span>
            </motion.h1>
            
            <motion.p
              className="mt-6 text-2xl text-[#00D4FF] font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              Building Digital Presence!
            </motion.p>

            <motion.div 
              className="mt-12 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-[#252733] rounded-lg font-medium text-[#EAEAEA]
                         border border-[#4A90E2]/20 hover:border-[#4A90E2]/40
                         shadow-lg shadow-[#4A90E2]/10 hover:shadow-[#4A90E2]/20
                         transition-all duration-300 group"
              >
                <span className="bg-gradient-to-r from-[#4A90E2] to-[#00D4FF] text-transparent bg-clip-text group-hover:opacity-80">
                  Begin Your Journey
                </span>
              </motion.button>
            </motion.div>

            {/* Features Grid */}
            <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Personalized Learning',
                  description: 'Adaptive pathways that evolve with your progress',
                  icon: '🎯'
                },
                {
                  title: 'Digital Portfolio',
                  description: 'Showcase your skills and achievements',
                  icon: '💼'
                },
                {
                  title: 'Expert Connection',
                  description: 'Learn from industry leaders and mentors',
                  icon: '🤝'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="p-8 rounded-xl bg-[#1E1E2E]/50 backdrop-blur-sm
                           border border-[#4A90E2]/10 hover:border-[#4A90E2]/20
                           group transition-all duration-300"
                >
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#EAEAEA]">
                    {feature.title}
                  </h3>
                  <p className="text-[#B0B0B0]">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;