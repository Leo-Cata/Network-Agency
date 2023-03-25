import { useState } from 'react';
import { CgMenu, CgClose } from 'react-icons/cg';
import { motion, AnimatePresence } from 'framer-motion';
import { networkLogo } from '../assets';

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="flex justify-between h-16 items-center px-4">
        <div className="flex space-x-1">
          <img src={networkLogo} alt="network logo" className="w-5" />
          <h1 className="font-openSans text-xl text-mainBlue font-semibold">
            Network
          </h1>
        </div>
        <div onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <CgClose size={24} className="opacity-50 cursor-pointer" />
          ) : (
            <CgMenu size={24} className="opacity-50 cursor-pointer" />
          )}
        </div>
      </div>
      <motion.div layout onClick={() => setIsOpen(!isOpen)}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              exit={{ scaleY: 0 }}
              className="flex flex-col items-center origin-top text-mainBlue font-openSans shadow-md rounded-[3rem]">
              <ul className=" space-y-4  [&_li]:cursor-pointer">
                <li>Pricing</li>
                <li>Success</li>
                <li>Stories</li>
                <li>About Us</li>
                <li>Company</li>
              </ul>
              <div className="bg-gradient-to-r from-gradientOrangeLight to-gradientOrangeDark p-[1px] rounded-xl my-8">
                <button className="w-full h-full px-7 py-3 bg-mainBackground rounded-xl font-medium">
                  Contant us
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};

export default NavbarMobile;
