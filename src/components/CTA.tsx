import React from 'react';
import CustomButton from './CustomButton';
import { yellowCTA } from '../assets';

const CTA = () => {
  return (
    <div className="px-6 py-10 text-center 2xl:py-20">
      <h1 className="pb-10 text-[40px] font-semibold text-white 2xl:mx-auto 2xl:w-1/4 2xl:pb-[60px]">
        Have an Idea? Let's Build and Scale It
      </h1>
      <div className="mx-auto max-w-xs justify-center xl:flex">
        <CustomButton
          displayText="Book a demo"
          isTransparent={false}
          textColor="text-white"
        />
      </div>
      <div className="relative">
        <img
          src={yellowCTA}
          alt=""
          className="absolute -bottom-56 -left-40 hidden xl:block"
        />
      </div>
    </div>
  );
};

export default CTA;
