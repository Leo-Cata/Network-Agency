import React from 'react';
import { starsFaq } from '../assets';
import FaqAccordion from './FaqAccordion';

const Faq = () => {
  return (
    <div className="block items-baseline justify-center px-6 py-10 lg:flex lg:space-x-10 2xl:flex 2xl:space-x-28">
      <div className="flex flex-col lg:space-y-24">
        <h1 className="pb-7 font-openSans text-[40px] font-semibold text-white">
          Frequently asked questions
        </h1>
        <img src={starsFaq} alt="" className="w-[300px] self-center" />
      </div>
      <FaqAccordion />
    </div>
  );
};

export default Faq;
