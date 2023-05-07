import React from 'react';
import { starsFaq } from '../assets';
import FaqAccordion from './FaqAccordion';

const Faq = () => {
  return (
    <div className="block items-baseline px-6 py-10 lg:flex lg:space-x-10">
      <div className="flex flex-col">
        <h1 className="pb-7 font-openSans text-[40px] font-semibold text-white">
          Frequently asked questions
        </h1>
        <img src={starsFaq} alt="" className="w-[227px] self-center" />
      </div>
      <FaqAccordion />
    </div>
  );
};

export default Faq;
