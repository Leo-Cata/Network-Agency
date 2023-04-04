import React from 'react';
import CustomButton from './CustomButton';
import { notepad, person1, person2, person3, person4 } from '../assets';

const Features = () => {
  const peopleIcons = [person1, person2, person3, person4];
  return (
    <div className="mx-6 flex flex-col items-center 2xl:flex-row 2xl:justify-center">
      <div className="mr-0 space-y-3 text-white 2xl:mr-48 2xl:w-1/4">
        <h2 className="font-openSans text-4xl font-semibold md:text-6xl">
          Design beautiful websites
        </h2>
        <p className="font-atkinson">
          Empower your franchisees and locations to grow with our intelligent
          dashboards and tools.
        </p>
        <div className="md:max-w-[160px]">
          <CustomButton
            displayText="Contact Us"
            isTransparent={false}
            textColor="text-white"
          />
        </div>
        <div className="space-y-5 pt-10 md:pt-20">
          <div className="flex">
            {peopleIcons.map((person, index) => (
              <div
                className={`w-12 rounded-full border-2 border-mainBlue p-[1px] md:w-16 ${
                  index !== 0 ? '-ml-4' : ''
                }`}>
                <img
                  src={person}
                  alt={`example person ${index + 1}`}
                  key={index}
                />
              </div>
            ))}
          </div>
          <div className="pb-8 font-openSans text-white">
            <p className="text-2xl">10,000+</p>
            <p className="text-lg text-white/60">Positive Feedback</p>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center 2xl:block">
        <div className="absolute left-28 top-1 w-10 flex-grow rounded-full border border-gradientOrangeDark p-[2px] md:w-20">
          <img
            src={person1}
            alt="example person 1"
            className="h-full w-full rounded-full"
          />
        </div>
        <img src={notepad} alt="notepad" className="w-[650px]" />
      </div>
    </div>
  );
};

export default Features;
