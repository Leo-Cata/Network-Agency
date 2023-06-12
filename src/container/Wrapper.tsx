import React from 'react';

// interface to set the type of the children as reactnode elements
interface Props {
  children: React.ReactNode;
}

// this wrapper is reusable component to set the x axis margins of the pages
// used around all components that arent the gradients
const Wrapper = ({ children }: Props) => {
  return <div className="mx-4 md:mx-16 2xl:mx-[200px]">{children}</div>;
};

export default Wrapper;
