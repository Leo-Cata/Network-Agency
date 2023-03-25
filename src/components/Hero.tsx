import NavbarMobile from './NavbarMobile';
import { eye, arrows } from '../assets';

const Hero = () => {
  return (
    <div>
      <NavbarMobile />
      <div className="mx-4 font-openSans font-extrabold text-mainBlue text-5xl">
        <h1>
          We develop the{' '}
          <img
            src={eye}
            alt="eye-like symbol"
            className="w-10 inline-block align-baseline"
          />{' '}
          eye{' '}
          <img
            src={arrows}
            alt="Arrows symbols"
            className="w-12 inline-block"
          />{' '}
          catching brands
        </h1>
      </div>
      <div className="m-4 font-openSans text-lg flex flex-col items-center space-y-6">
        <p className="text-mainBlue font-normal">
          Empower your franchisees and locations to grow with our intelligent
          dashboards and tools.
        </p>
        <button className="bg-gradient-to-r from-gradientOrangeLight to-gradientOrangeDark w-full py-4 rounded-xl text-white">
          Contact us
        </button>
      </div>
    </div>
  );
};

export default Hero;
