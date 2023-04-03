import React from 'react';
import { abstractPurplePink, arrows, eye } from '../assets';
import CustomButton from './CustomButton';

const Hero = () => {
  return (
    <div className="mx-4 max-w-7xl md:mx-16 2xl:mx-[23rem]">
      <div className=" z-50 font-openSans text-5xl font-extrabold text-mainBlue md:flex md:justify-end lg:text-8xl">
        <h1 className="block md:inline-block">
          We Develope the{' '}
          <img
            src={eye}
            alt="eye-like image"
            className="inline-block w-10 align-baseline lg:w-24"
          />{' '}
          eye{' '}
          <span>
            {' '}
            <img
              src={arrows}
              alt="arrows image"
              className="inline-block w-12 align-middle lg:w-28"
            />{' '}
            catching
          </span>{' '}
          brands
        </h1>
        <img
          src={abstractPurplePink}
          alt="abstract form"
          className="absolute -right-48 -z-50 hidden w-96 md:block"
        />
      </div>

      <div className="my-3 max-w-sm space-y-8">
        <h3 className="font-atkinson text-xl text-mainBlue">
          Empower your franchisees and locations to grow with our intelligent
          dashboards and tools.
        </h3>
        <div className="md:max-w-[164px]">
          <CustomButton
            displayText="Contact Us"
            isTransparent={false}
            textColor="text-white"
          />
        </div>
      </div>
      <img
        src={abstractPurplePink}
        alt="abstract form"
        className="absolute -right-8 w-28 md:hidden"
      />
    </div>
  );
};

export default Hero;
