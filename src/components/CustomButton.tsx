import React from 'react';

interface props {
  text: string;
  isTransparent: boolean;
}

const CustomButton = ({ text, isTransparent }: props) => {
  return (
    <div className="rounded-xl bg-gradient-to-r from-gradientOrangeLight to-gradientOrangeDark p-[1px]">
      <button
        className={`h-full w-full rounded-xl px-7 py-3 font-openSans font-medium text-mainBlue ${
          isTransparent ? '' : 'bg-mainBackground'
        }`}>
        {text}
      </button>
    </div>
  );
};

export default CustomButton;
