import React, { useState } from 'react';
import { quotationsTestimonials } from '../assets';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';

interface CarouselItemProps {
  title: string;
  text: string;
  person: string;
  company: string;
}

const carouselItems: CarouselItemProps[] = [
  {
    title: 'Passion for creating digital experiences',
    text: 'I was very satisfied with my decision to work with them on building the website for my brand, Blabla Lab. They did a great job putting the site together in a timely fashion. The team is extremely detail-oriented and were open to the feedback I provided them.',
    person: 'John Doe',
    company: 'Blabla Lab',
  },
  {
    title: 'Building Websites That Drive Results',
    text: 'I was amazed at the quality of the website that was built for my shoe store. The team was attentive to my requests and were able to create a seamless and visually appealing website. I would definitely recommend their services to anyone looking to create an online presence for their business.',
    person: 'Jane Smith',
    company: 'Silv Shoes',
  },
  {
    title: 'Elevating Your Online Presence',
    text: "Working with the team was a great experience from start to finish. They were able to take our vision and create a website that was both functional and visually appealing. The team was always available to answer any questions and make adjustments as needed. I couldn't be happier with the final result.",
    person: 'Bob Johnson',
    company: 'Goodroot Crypto',
  },
  {
    title: 'Creating Memorable Online Experiences',
    text: "I had an amazing experience building my NFT ecommerce platform with the team. They created a visually stunning and user-friendly website that captured my brand's essence. They were attentive to my needs and provided support and answers promptly. Highly recommend their services for anyone looking to build an online store.",
    person: 'Sarah Lee',
    company: 'Olipop NFTs',
  },
];
const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [lastClickedButton, setLastClickedButton] = useState<'prev' | 'next'>();

  const handleNextClick = () => {
    setLastClickedButton('next');

    setActiveIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? prevIndex : prevIndex + 1,
    );
  };
  const handlePrevClick = () => {
    setLastClickedButton('prev');

    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1,
    );
  };

  return ( 
  <div className='relative h-36 2xl:my-[215px] mb-[530px] sm:mb-[300px]'>
    <AnimatePresence mode="wait">
      <motion.div className='absolute -top-36'
        layout
        initial={{ height: 'auto' }}
        animate={{ height: 'fit-content' }}
        transition={{ duration: 0.3 }}>
        <div className="rounded-[40px] border-[6px] border-white bg-gradient-to-tr from-gradientOrangeLight to-gradientOrangeDark">
          <div className="mx-8 my-10 flex flex-col 2xl:mx-[100px] 2xl:my-20 2xl:flex-row 2xl:space-x-5">
            <img
              src={quotationsTestimonials}
              alt=""
              className="w-9 self-end 2xl:hidden"
            />
            {/* carousel text part */}

            <motion.div
              key={carouselItems[activeIndex].company}
              className="font-openSans text-white sm:h-fit"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}>
              <h2 className="my-5 text-2xl font-semibold leading-[50px] 2xl:my-0 2xl:mb-20 2xl:text-4xl">
                {carouselItems[activeIndex].title}
              </h2>
              <p className="mb-10 text-lg leading-9 opacity-80 2xl:mb-14 2xl:text-2xl">
                {carouselItems[activeIndex].text}
              </p>
              <h3 className="mb-1 text-lg font-semibold">
                {carouselItems[activeIndex].person}
              </h3>
              <h4 className="opacity-80">
                {carouselItems[activeIndex].company}
              </h4>
              {/* carousel text part ends */}
            </motion.div>
            {/* carousel buttons */}
            <div className="flex-col justify-between 2xl:flex 2xl:min-w-[200px]">
              <img
                src={quotationsTestimonials}
                alt=""
                className="hidden w-16 self-end 2xl:block"
              />
              <div className="mt-7 flex justify-center space-x-10 text-white 2xl:mt-0">
                <button
                  className={
                    lastClickedButton === 'prev' ? 'scale-150 duration-300' : ''
                  }
                  onClick={handlePrevClick}>
                  <BsArrowLeft size={30} />
                </button>
                <button
                  className={
                    lastClickedButton === 'next' ? 'scale-150 duration-300' : ''
                  }
                  onClick={handleNextClick}>
                  <BsArrowRight size={30} />
                </button>
              </div>
            </div>
            {/* carousel buttons end */}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
    </div>
  );
};

export default Carousel;
