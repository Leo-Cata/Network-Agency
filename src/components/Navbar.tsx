import React, { useState } from 'react';
import { networkLogo } from '../assets';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative">
      <div className="flex justify-between items-center py-6 mx-6">
        <div className="flex space-x-1">
          <img src={networkLogo} alt="network logo" />
          <h1 className="font-openSans text-mainBlue font-semibold">Network</h1>
        </div>
        <button onClick={handleMenu} className="opacity-50">
          {isMenuOpen ? (
            <AiOutlineClose size={24} />
          ) : (
            <AiOutlineMenu size={24} />
          )}
        </button>
      </div>

      <motion.div layout onClick={handleMenu} className="absolute w-full">
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              exit={{ scaleY: 0 }}
              className="flex flex-col items-center origin-top text-mainBlue font-openSans shadow-md rounded-[3rem]">
              <ul className="space-y-4 [&>li]:cursor-pointer">
                <li>Pricing</li>
                <li>Success</li>
                <li>Stories</li>
                <li>About Us</li>
                <li>Company</li>
              </ul>
              <div className=" bg-gradient-to-r from-gradientOrangeLight to-gradientOrangeDark p-[1px] rounded-xl my-8">
                <button className="w-full h-full px-7 py-3 bg-mainBackground rounded-xl font-medium">
                  Contact Us
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};

export default Navbar;
