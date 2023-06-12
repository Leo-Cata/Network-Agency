import React from 'react';
import CustomButton from './CustomButton';
import { notepad, person1, person2, person3, person4 } from '../assets';

const Features = () => {
  // array with the imgs of different people
  const peopleIcons = [person1, person2, person3, person4];


  return (
    <div className="flex flex-col items-center 2xl:justify-between xl:flex-row py-10 xl:py-20">
      {/* main title, subtext, button and img */}
      <div className=" space-y-6 2xl:block">
        <div className="space-y-3 text-white">
          <h2 className="font-openSans text-4xl font-semibold md:text-6xl">
            Design beautiful websites
          </h2>
          <p className="font-atkinson">
            Empower your franchisees and locations to grow with our intelligent
            dashboards and tools.
          </p>
        </div>
        <div className="max-w-[327px] 2xl:max-w-[170px]">
          <CustomButton
            displayText="Contact Us"
            isTransparent={false}
            textColor="text-white"
          />
        </div>
        <div>
          <div className="inline-flex">
            {peopleIcons.map((person, index) => (
              <div
                className={`rounded-full border-2 border-mainBlue p-[1px] ${index !== 0 ? '-ml-4' : ''
                  }`}>
                <img src={person} alt="" key={index} className=" w-12" />
              </div>
            ))}
          </div>
          <div className="mt-5 leading-7">
            <p className="font-openSans text-2xl font-bold text-white">
              10,000+
            </p>
            <p className="font-atkinson text-lg text-white/60">
              Positive Feedback
            </p>
          </div>
        </div>
      </div>
      {/* main title, subtext, button and img ends */}


      {/* right side notepad and person icon */}
      <div className="w-full sm:w-1/2 2xl:flex 2xl:w-4/5 2xl:justify-end">
        <div className="relative mt-8 2xl:w-5/6">
          <div className="absolute left-28 top-2 w-10 rounded-full border-2 border-gradientOrangeDark p-[1px] sm:w-14 md:w-20 2xl:left-44">
            <img src={person2} alt="" />
          </div>
          <img src={notepad} alt="" className="w-full" />
        </div>
      </div>
      {/* right side notepad and person icon */}
    </div>
  );
};

export default Features;
