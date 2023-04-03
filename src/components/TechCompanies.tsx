import React from 'react';
import { alphabet, amazon, azure, orangePerson, slack } from '../assets';
const techCompanies = [alphabet, amazon, azure, slack];

const TechCompanies = () => {
  return (
    <div className="my-36 flex flex-col items-center justify-evenly xl:flex-row-reverse">
      <img src={orangePerson} alt="" />
      <div className="mx-14 mt-11 grid grid-cols-2 justify-items-center gap-y-5 xl:mt-20 xl:flex xl:space-x-5">
        {techCompanies.map((company, index) => (
          <img src={company} alt="" key={index} className="h-[50px] w-28" />
        ))}
      </div>
    </div>
  );
};

export default TechCompanies;
