import React from 'react';
import { networkLogo } from '../../assets';
import CustomButton from '../CustomButton';

const BrandandContact = () => {
  return (
    <div className="justify-between border-b-[1px] border-white/10 pb-7 sm:mb-9 sm:flex">
      <img src={networkLogo} alt="network logo" className="w-20 pb-4" />
      <div className="items-center sm:flex">
        <h1 className="pb-3 font-openSans text-white sm:pr-10 sm:pb-0">
          Send us a email at
        </h1>
        <div className="max-w-xs ">
          <CustomButton
            isTransparent={false}
            displayText="realemail@email.com"
            textColor="text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default BrandandContact;
