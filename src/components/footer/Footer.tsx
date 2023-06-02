import React from 'react';
import BrandandContact from './BrandandContact';
import Links from './Links';
import Contact from './Contact';
import Copyright from './Copyright';

const Footer = () => {
  return (
    <footer className='pt-10 2xl:pt-20'>
      <BrandandContact />
      <Links />
      <Copyright />
    </footer>
  );
};

export default Footer;
