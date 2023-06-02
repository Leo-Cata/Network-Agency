import React from 'react';

interface aboutData {
  title: string | number;
  text: string;
}

const aboutData: aboutData[] = [
  {
    title: 400,
    text: 'Talented people ready to being your vision',
  },
  {
    title: 15,
    text: 'Years of experience working with tech',
  },
  {
    title: 40,
    text: 'Offices in the United States',
  },
  {
    title: '3K+',
    text: 'Pixel perfect projects designed',
  },
];

const AboutCards = () => {
  return (
    <div className="py-10 flex flex-col items-center space-y-4 xl:flex-row xl:justify-center xl:space-x-9 xl:space-y-0 2xl:py-20">
      {aboutData.map((data) => (
        <div className=" w-2/3 max-w-[275px] space-y-3 rounded-xl bg-white px-8 py-4 text-mainBlue xl:h-[200px] xl:space-y-6 xl:px-11 xl:py-8">
          <h2 className="font-openSans text-5xl font-extrabold lg:text-6xl xl:text-7xl">
            {data.title}
          </h2>
          <p className="font-atkinson">{data.text}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutCards;
