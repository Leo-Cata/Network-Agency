import React from 'react';
import { star } from '../assets';
import Cards from './Cards';
import CustomButton from './CustomButton';

const Services = () => {
  return (
    <div className="mx-6 py-10 2xl:my-20 ">
      <div>
        <div className="relative hidden 2xl:block">
          <img src={star} alt="" className="absolute right-52 -top-5" />
        </div>
        <h2 className=" text-center font-openSans text-[40px] font-semibold tracking-tighter text-white 2xl:mx-auto 2xl:w-1/3 2xl:text-6xl">
          Retail franchise digital marketing
        </h2>
      </div>
      <div>
        <Cards />
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

export default Services;
