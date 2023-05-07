import React from 'react';

interface Props {
  children: React.ReactNode;
}
const BottomGradient = ({ children }: Props) => {
  return (
    <div className="mt-52 w-full rounded-t-[40px] bg-gradient-to-tl from-gradientPurple to-gradientBlue lg:rounded-t-[100px] xl:mt-14">
      {children}
    </div>
  );
};

export default BottomGradient;
