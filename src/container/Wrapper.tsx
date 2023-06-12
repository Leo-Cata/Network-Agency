import React from 'react';
interface Props {
  children: React.ReactNode;
}

const Wrapper = ({ children }: Props) => {
  return <div className="mx-4 md:mx-16 2xl:mx-[200px]">{children}</div>;
};

export default Wrapper;
