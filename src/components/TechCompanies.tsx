import React from 'react';
import { alphabet, amazon, azure, orangePerson, slack } from '../assets';
const techCompanies = [alphabet, amazon, azure, slack];


const TechCompanies = () => {
  return (
    <div className="flex flex-col items-center justify-between xl:flex-row-reverse xl:items-end lg:pb-10 xl:pb-20">
      {/* img */}
      <div className="flex h-32 w-fit max-w-[330px] items-end rounded-full bg-[#0C185B] md:max-w-[400px] lg:max-w-[570px] xl:h-52">
        <img src={orangePerson} alt="" />
      </div>
      {/* img ends */}

      {/* companies  */}
      <div className="py-10 grid grid-cols-2 gap-y-5 xl:mt-20 xl:flex xl:space-x-5">
        {techCompanies.map((company, index) => (
          <img src={company} alt={company} key={index} className="h-[50px] w-28" />
        ))}
      </div>
      {/* companies ends */}
    </div>
  );
};

export default TechCompanies;
