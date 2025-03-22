import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-[#1E1E2E]/90 backdrop-blur-md border-b border-[#4A90E2]/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#4A90E2] to-[#00D4FF] text-transparent bg-clip-text">
              EduVision
            </span>
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Projects', 'Community', 'Resources'].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={item.toLowerCase()}
                  className="text-[#EAEAEA] hover:text-[#00D4FF] transition-colors duration-200 text-sm font-medium relative group"
                >
                  <span>{item}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D4FF] group-hover:w-full transition-all duration-300"/>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Auth Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2 bg-[#252733] text-[#EAEAEA] rounded-lg text-sm font-medium
                     border border-[#4A90E2]/20 hover:border-[#4A90E2]/40 
                     shadow-lg shadow-[#4A90E2]/5 hover:shadow-[#4A90E2]/10 
                     transition-all duration-300"
          >
            Sign In
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;