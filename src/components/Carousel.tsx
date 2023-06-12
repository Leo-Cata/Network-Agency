import React, { useState, useRef, useEffect } from 'react';
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
  // state to save the currect active index
  const [activeIndex, setActiveIndex] = useState(0);

  // state to know what button was pressed used to set the active index for the animations of the button
  const [lastClickedButton, setLastClickedButton] = useState<'prev' | 'next'>();

  // handles when you press the next button
  const handleNextClick = () => {
    setLastClickedButton('next');

    // if previndex is equal to the length of the items -1, the previndex doesnt change, else adds +1 to the index
    setActiveIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? prevIndex : prevIndex + 1,
    );
  };

  // handles when you press the prev button
  const handlePrevClick = () => {
    setLastClickedButton('prev');

    // if the previndex is equal to 0, dont change, else -1 to the index
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1,
    );
  };

  // to get a reference of the div element html
  const elementRef = useRef<HTMLDivElement>(null)

  // to save the height
  const [height, setHeight] = useState<number | null>(null)

  // effect to get the height of the carousel to set proper Y paddings and margins 
  useEffect(() => {
    const carouselElement = elementRef.current
    if (carouselElement) {
      const carouseHeight = carouselElement.clientHeight
      setHeight(carouseHeight)
    }
  }, [activeIndex])
  // you get a ref for an html div element which is set to null by default, then create a state to save a heightm which is null by default, then each time activeIndex changes,
  // create a const of the element referenced, if it exists,  create a const to save the height of that element then save the height which will later be used
  // to set the height of the relative father div

  return (
    <div className='relative lg:mt-52 -mb-36' style={{ height: `${height}px` }}>
      <AnimatePresence mode="wait">
        <motion.div className='absolute -top-36'
          ref={elementRef}
          layout
          initial={{ height: 'auto' }}
          animate={{ height: 'fit-content' }}
          transition={{ duration: 0.3 }}>
          <div className="rounded-[40px] border-[6px] border-white bg-gradient-to-tr from-gradientOrangeLight to-gradientOrangeDark">
            <div className="mx-4 my-6 flex flex-col 2xl:mx-[100px] 2xl:my-20 2xl:flex-row 2xl:space-x-5">
              <img
                src={quotationsTestimonials}
                alt="quotations mark"
                className="w-5 self-end 2xl:hidden"
              />
              {/* carousel text part */}
              <motion.div
                key={carouselItems[activeIndex].company}
                className="font-openSans text-white sm:h-fit"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6 }}>
                <h2 className="my-1 text-xl font-semibold 2xl:my-0 2xl:mb-20 2xl:text-4xl">
                  {carouselItems[activeIndex].title}
                </h2>
                <p className="mb-5 text-lg leading-9 opacity-80 2xl:mb-14 2xl:text-2xl">
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
                  alt="quotations mark"
                  className="hidden w-16 self-end 2xl:block"
                />
                <div className="mt-3 flex justify-center space-x-10 text-white 2xl:mt-0">
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
            </div>
            {/* carousel buttons end */}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
