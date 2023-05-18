import React from 'react';
import BrandandContact from './BrandandContact';
import Links from './Links';
import Contact from './Contact';
import Copyright from './Copyright';

const Footer = () => {
  return (
    <footer className="px-6 2xl:px-[135px]">
      <BrandandContact />
      <Links />
      <Copyright />
    </footer>
  );
};

export default Footer;
