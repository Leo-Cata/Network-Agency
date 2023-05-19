import React, { useEffect, useState } from 'react';
import LinksServices from './LinksServices';
import LinksDevelopment from './LinksDevelopment';
import LinksDesign from './LinksDesign';
import LinksBunch from './LinksBunch';
import Contact from './Contact';

const Links = () => {
  const [viewportWidth, setViewportWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="mt-7 flex flex-wrap justify-start gap-[27px] font-openSans text-white xl:justify-center xl:gap-0 xl:space-x-[60px]">
      <Contact />

      <div className=" xl:order-2 xl:flex xl:space-x-[60px]">
        <LinksServices />
        {viewportWidth > 1279 ? <LinksDesign /> : <LinksDevelopment />}
      </div>

      <div className="xl:order-3 xl:flex xl:space-x-[60px]">
        {viewportWidth > 1279 ? <LinksDevelopment /> : <LinksDesign />}

        <LinksBunch />
      </div>
    </div>
  );
};

export default Links;
