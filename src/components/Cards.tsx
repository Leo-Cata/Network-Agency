import React from 'react';
interface data {
  title: string;
  text: string;
  features: {
    [key: string]: string;
  };
}

const cardsData: data[] = [
  {
    title: 'Web Development',
    text: 'We specialize in developing interactive',
    features: {
      feature1: 'Visibility',
      feature2: 'Identity',
      feature3: 'Messaging',
      feature4: 'Value Proposition',
      feature5: 'CRO',
    },
  },
  {
    title: 'Web Design',
    text: 'We specialize in developing interactive',
    features: {
      feature1: 'UI/UX',
      feature2: 'Landing Pages',
      feature3: 'Redesigns',
      feature4: 'Functionality',
      feature5: 'Optimization',
    },
  },
  {
    title: 'E-commerce',
    text: 'Developing interactive, scalable, brand-oriented.',
    features: {
      feature1: '3D Animation',
      feature2: 'Socials',
      feature3: 'Paid Ads',
      feature4: 'On-Page',
      feature5: 'Technical',
    },
  },
];

const Cards = () => {
  return (
    <div className="flex flex-col items-center space-y-7 py-10 xl:flex-row xl:justify-center xl:space-y-0 xl:space-x-9 xl:pt-36">
      {cardsData.map((data) => {
        const { title, text, features } = data;
        const featureKeys = Object.keys(features);
        return (
          <div className="h-[400px] max-w-[350px] origin-bottom rounded-3xl border-2 border-white/20 bg-mainBlue p-8 text-start font-openSans text-white transition-all  duration-300 hover:border-white hover:bg-gradient-to-t hover:from-gradientLightBlueDarker hover:to-gradientLightBlue xl:hover:scale-110">
            <div>
              <h2 className="text-3xl font-semibold">{title}</h2>
              <p className="py-3">{text}</p>
            </div>
            <ul className="w-fit divide-y divide-white/10">
              {featureKeys.map((feature, index) => (
                <li key={feature} className="py-2 font-medium">
                  <span className="font-normal opacity-50">0{index + 1}</span>
                  <span className="px-5">{features[feature]}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
