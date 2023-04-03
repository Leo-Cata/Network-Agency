import React from 'react';

interface props {
  displayText: string;
  isTransparent: boolean;
  textColor: string;
}

const CustomButton = ({ displayText, isTransparent, textColor }: props) => {
  return (
    <div className="rounded-xl bg-gradient-to-r from-gradientOrangeLight to-gradientOrangeDark p-[1px]">
      <button
        className={`h-full w-full rounded-xl px-7 py-3 font-openSans font-medium ${textColor} ${
          isTransparent ? 'bg-mainBackground' : ''
        }`}>
        {displayText}
      </button>
    </div>
  );
};

export default CustomButton;
