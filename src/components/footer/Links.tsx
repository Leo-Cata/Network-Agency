import React from 'react';
import LinksServices from './LinksServices';
import LinksDevelopment from './LinksDevelopment';
import LinksDesign from './LinksDesign';
import LinksBunch from './LinksBunch';
import Contact from './Contact';

const Links = () => {
  return (
    <div className="mt-7 flex flex-wrap justify-center gap-[27px] font-openSans text-white xl:justify-start xl:gap-0 xl:space-x-[60px]">
      <Contact />

      <div className="xl:order-2 xl:flex xl:space-x-[60px]">
        <LinksServices />
        <LinksDevelopment />
      </div>

      <div className="xl:order-3 xl:flex xl:space-x-[60px]">
        <LinksDesign />
        <LinksBunch />
      </div>
    </div>
  );
};

export default Links;
