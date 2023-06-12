import React, { useState } from 'react';
import { networkLogo } from '../assets';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import CustomButton from './CustomButton';

const Navbar = () => {
  // state to save if the menu is open or not, 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // handle function to set the menu to its opposite state
  // to open and close it on mobile
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative 2xl:mx-20">
      {/* title and img */}
      <div className="mx-6 flex items-center justify-between py-6">
        <div className="flex space-x-1">
          <img src={networkLogo} alt="network logo" className="md:w-8" />
          <h1 className="font-openSans font-semibold text-mainBlue lg:text-3xl">
            Network
          </h1>
        </div>
        {/* title and img finish */}

        {/* mobile menu button */}
        <button onClick={handleMenu} className="block opacity-50 lg:hidden">
          {isMenuOpen ? (
            <AiOutlineClose size={24} />
          ) : (
            <AiOutlineMenu size={24} />
          )}
        </button>
        {/* mobile menu button ends */}

        {/* desktop menu links */}
        <ul className="hidden space-x-9 text-mainBlue lg:flex [&>li]:cursor-pointer">
          <li>Pricing</li>
          <li>Success</li>
          <li>Stories</li>
          <li>About Us</li>
          <li>Company</li>
        </ul>
        <div className="hidden lg:block">
          <CustomButton
            displayText={'Contact Us'}
            isTransparent={true}
            textColor="text-mainBlue"
          />
        </div>
      </div>
      {/* desktop menu links ends */}

      {/* mobile menu links */}
      <motion.div
        layout
        onClick={handleMenu}
        className="absolute w-full  lg:hidden">
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              exit={{ scaleY: 0 }}
              className="flex origin-top flex-col items-center rounded-b-[3rem] bg-mainBackground font-openSans text-mainBlue shadow-md">
              <ul className="space-y-4 [&>li]:cursor-pointer">
                <li>Pricing</li>
                <li>Success</li>
                <li>Stories</li>
                <li>About Us</li>
                <li>Company</li>
              </ul>
              <div className="my-8">
                <CustomButton
                  displayText={'Contact Us'}
                  isTransparent={true}
                  textColor="text-mainBlue"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      {/* mobile menu links ends */}
    </nav>
  );
};

export default Navbar;
