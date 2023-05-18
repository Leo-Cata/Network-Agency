import React from 'react';

const Bunch = () => {
  return (
    <div className="mb-7 2xl:w-[180px]">
      <h3 className="text-xl font-semibold">An odd bunch</h3>
      <ul className="space-y-3 pt-4 font-atkinson opacity-60 [&>li]:cursor-pointer">
        <li>Cayman</li>
        <li>Australia</li>
        <li>USA</li>
        <li>South Africa</li>
        <li>UK</li>
      </ul>
    </div>
  );
};

export default Bunch;
