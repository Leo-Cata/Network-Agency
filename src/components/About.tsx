import React from 'react';
import CustomButton from './CustomButton';
import AboutCards from './AboutCards';
import { orangeCircle } from '../assets';

const About = () => {
  return (
    <div className="py-10 2xl:py-20">
      {/* img and title */}
      <div className="relative">
        <img
          src={orangeCircle}
          alt="orange Circle"
          className="absolute -right-60 top-0 hidden xl:block"
        />
      </div>
      <h2 className="text-center font-openSans text-4xl font-semibold text-white xl:mx-auto xl:w-2/3 xl:text-6xl">
        Strategic design over the years
      </h2>
      {/* img and title ends */}

      {/* cards ands button */}
      <div>
        <AboutCards />
      </div>
      <div className="mx-auto max-w-xs justify-center xl:flex">
        <CustomButton
          displayText="Contact Us"
          isTransparent={false}
          textColor="text-white"
        />
      </div>
      {/* cards and button ends */}
    </div>
  );
};

export default About;
