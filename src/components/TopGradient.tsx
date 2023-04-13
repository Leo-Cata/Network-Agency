import React from 'react';
interface Props {
  children: React.ReactNode;
}

const TopGradient = ({ children }: Props) => {
  return (
    <div className="my-52 w-full rounded-[40px] bg-gradient-to-tl from-gradientPurple to-gradientBlue lg:rounded-[100px] xl:my-14">
      {children}
    </div>
  );
};

export default TopGradient;
