import React from 'react';
interface Props {
  children: React.ReactNode;
}

const TopGradient = ({ children }: Props) => {
  return (
    <div className="relative -top-52 -z-50 h-[2886px] rounded-[100px] bg-gradient-to-tl from-gradientPurple to-gradientBlue">
      {children}
    </div>
  );
};

export default TopGradient;
