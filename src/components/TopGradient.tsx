import React from 'react';
interface Props {
  children: React.ReactNode;
}

const TopGradient = ({ children }: Props) => {
  return (
    <div className="mt- w-full rounded-[40px] bg-gradient-to-tl from-gradientPurple to-gradientBlue lg:rounded-[100px]">
      {children}
    </div>
  );
};

export default TopGradient;
