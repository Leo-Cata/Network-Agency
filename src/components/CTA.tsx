import React from 'react';
import CustomButton from './CustomButton';
import { yellowCTA } from '../assets';

const CTA = () => {
  // same as projects, it only has a text, a button and an offset img
  return (
    <div className="py-10 text-center 2xl:pb-20 2xl:pt-40">
      <h1 className="pb-10 text-[40px] font-semibold text-white 2xl:mx-auto 2xl:w-1/2 2xl:pb-[60px] 2xl:text-[58px]">
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
          alt="yellow image"
          className="absolute -bottom-56 -left-80 hidden xl:block"
        />
      </div>
    </div>
  );
};

export default CTA;
