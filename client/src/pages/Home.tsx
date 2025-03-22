import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Home = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#030303]">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[#030303]">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#4f46e5]/10 via-transparent to-[#06b6d4]/10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)]" />
      </div>

      {/* Main Content */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div ref={heroRef} className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-white">Master Your</span>{' '}
              <span className="bg-gradient-to-r from-[#4f46e5] to-[#06b6d4] text-transparent bg-clip-text">
                Learning Journey
              </span>
            </motion.h1>

            <motion.p 
              className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Personalized AI-powered learning paths that adapt to your goals. 
              Join a community of learners and accelerate your growth.
            </motion.p>

            <motion.div 
              className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#4f46e5] to-[#06b6d4] rounded-lg font-medium text-white shadow-lg shadow-[#4f46e5]/25 hover:shadow-[#4f46e5]/50 transition-all duration-300"
              >
                Start Learning
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-lg font-medium text-gray-300 hover:bg-white/10 transition-all duration-300"
              >
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Features Grid */}
            <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'AI-Powered Learning',
                  description: 'Personalized paths that adapt to your learning style'
                },
                {
                  title: 'Interactive Roadmaps',
                  description: 'Visual progress tracking with milestone achievements'
                },
                {
                  title: 'Global Community',
                  description: 'Connect with learners and mentors worldwide'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#4f46e5]/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-[#4f46e5] to-[#06b6d4] text-transparent bg-clip-text">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
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