import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power4.out",
    });
  }, []);

  return (
    <nav 
      ref={navRef} 
      className="fixed w-full z-50 bg-[#0f0f0f]/90 backdrop-blur-md border-b border-[#2a2a2a]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold"
            >
              <span className="bg-gradient-to-r from-[#4f46e5] to-[#06b6d4] text-transparent bg-clip-text">
                EduVision
              </span>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Explore', 'Community', 'Resources'].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={item.toLowerCase()}
                  className="text-gray-300 hover:text-[#4f46e5] transition-colors duration-200 text-sm font-medium"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
            >
              Sign In
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gradient-to-r from-[#4f46e5] to-[#06b6d4] text-white rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-[#4f46e5]/25 transition-all duration-200"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;