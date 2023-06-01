import React from 'react';
import CustomButton from './CustomButton';
import AboutCards from './AboutCards';
import { orangeCircle } from '../assets';

const About = () => {
  return (
    <div className="py-10 2xl:py-20">
      <div className="relative">
        <img
          src={orangeCircle}
          alt=""
          className="absolute -right-[350px] top-0 hidden xl:block"
        />
      </div>
      <h2 className="text-center font-openSans text-4xl font-semibold text-white xl:mx-auto xl:w-2/3 xl:text-6xl">
        Strategic design over the years
      </h2>
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
    </div>
  );
};

export default About;
