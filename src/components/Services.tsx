import React from 'react';
import { star } from '../assets';
import Cards from './Cards';
import CustomButton from './CustomButton';

const Services = () => {
  return (
    <div className="py-10 2xl:py-20 ">
      {/* title and star */}
      <div className='xl:pb-36 pb-10'>
        {/* absolute start img */}
        <div className="relative hidden 2xl:block">
          <img src={star} alt="" className="absolute -right-40 top-10" />
        </div>
        <h2 className=" text-center font-openSans text-[40px] font-semibold tracking-tighter text-white 2xl:mx-auto 2xl:w-2/3 2xl:text-6xl">
          Retail franchise digital marketing
        </h2>
      </div>
      {/* title and star ends */}

      {/* cards and button */}
      <div>
        <Cards />
      </div>
      <div className="mx-auto max-w-xs justify-center xl:flex xl:pt-20 pt-10">
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

export default Services;
