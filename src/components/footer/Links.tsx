import React, { useEffect, useState } from 'react';
import LinksServices from './LinksServices';
import LinksDevelopment from './LinksDevelopment';
import LinksDesign from './LinksDesign';
import LinksBunch from './LinksBunch';
import Contact from './Contact';

const Links = () => {
  const desktopWidth = 1279

  // state to save the width of the viewport
  const [viewportWidth, setViewportWidth] = useState<number>(window.innerWidth);

  // effect used to attatch a resize event listener to the window to set the width
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
    // when the viewport is bigger than x, swaps the links shown for a different view on mobile and desktop
    <div className="mt-7 flex flex-wrap justify-start gap-[27px] font-openSans text-white xl:justify-center xl:gap-0 xl:space-x-[60px]">
      <Contact />

      <div className=" xl:order-2 xl:flex xl:space-x-[60px]">
        <LinksServices />
        {viewportWidth > desktopWidth ? <LinksDesign /> : <LinksDevelopment />}
      </div>

      <div className="xl:order-3 xl:flex xl:space-x-[60px]">
        {viewportWidth > desktopWidth ? <LinksDevelopment /> : <LinksDesign />}

        <LinksBunch />
      </div>
    </div>
  );
};

export default Links;
