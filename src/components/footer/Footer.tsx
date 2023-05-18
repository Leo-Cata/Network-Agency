import React from 'react';
import BrandandContact from './BrandandContact';
import Links from './Links';
import Contact from './Contact';

const Footer = () => {
  return (
    <footer className="px-6 2xl:px-[135px]">
      <BrandandContact />
      <div className="">
        <Links />
        <Contact />
      </div>
    </footer>
  );
};

export default Footer;
