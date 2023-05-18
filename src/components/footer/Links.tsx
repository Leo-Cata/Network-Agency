import React from 'react';
import LinksServices from './LinksServices';
import LinksDevelopment from './LinksDevelopment';
import LinksDesign from './LinksDesign';
import LinksBunch from './LinksBunch';

const Links = () => {
  return (
    <div className="mt-7 flex gap-[27px] font-openSans text-white">
      <div>
        <LinksServices />
        <LinksDevelopment />
      </div>

      <div>
        <LinksDesign />
        <LinksBunch />
      </div>
    </div>
  );
};

export default Links;
