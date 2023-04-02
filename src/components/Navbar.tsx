import React, { useState } from 'react';
import { networkLogo } from '../assets';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import CustomButton from './CustomButton';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative">
      <div className="mx-6 flex items-center justify-between py-6">
        <div className="flex space-x-1">
          <img src={networkLogo} alt="network logo" />
          <h1 className="font-openSans font-semibold text-mainBlue">Network</h1>
        </div>
        <button onClick={handleMenu} className="block opacity-50 md:hidden">
          {isMenuOpen ? (
            <AiOutlineClose size={24} />
          ) : (
            <AiOutlineMenu size={24} />
          )}
        </button>
        <ul className="hidden space-x-9 text-mainBlue md:flex [&>li]:cursor-pointer">
          <li>Pricing</li>
          <li>Success</li>
          <li>Stories</li>
          <li>About Us</li>
          <li>Company</li>
        </ul>
        <div className="hidden md:block">
          <CustomButton text={'Contact Us'} isTransparent={false} />
        </div>
      </div>

      <motion.div
        layout
        onClick={handleMenu}
        className="absolute w-full md:hidden">
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              exit={{ scaleY: 0 }}
              className="flex origin-top flex-col items-center rounded-[3rem] font-openSans text-mainBlue shadow-md">
              <ul className="space-y-4 [&>li]:cursor-pointer">
                <li>Pricing</li>
                <li>Success</li>
                <li>Stories</li>
                <li>About Us</li>
                <li>Company</li>
              </ul>
              <div className="my-8">
                <CustomButton text={'Contact Us'} isTransparent={false} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};

export default Navbar;
