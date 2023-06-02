import React from 'react';

const Copyright = () => {
  return (
    <div className="flex flex-col-reverse space-y-5 space-y-reverse py-10 font-atkinson text-white opacity-60 sm:flex-row sm:justify-between sm:space-y-0 lg:pb-12 lg:pt-32">
      <h6 className="mx-auto max-w-[200px] text-center sm:mx-0 sm:max-w-none">
        Copyright @ UIHUT 2023. All rights reserved.
      </h6>
      <div className="gap-[27px] space-y-2 sm:flex sm:space-y-0">
        <h6>Terms and service</h6>
        <h6>Privacy Policy</h6>
      </div>
    </div>
  );
};

export default Copyright;
