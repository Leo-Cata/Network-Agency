import React from 'react';
import {
  geminiProject,
  silvProject,
  olipopProject,
  goodrootProject,
  yellowProjects,
} from '../assets';

interface projectsData {
  img: string;
  project: string;
}

const projectCards: projectsData[] = [
  { img: geminiProject, project: 'Blabla Lab' },
  { img: silvProject, project: 'Silv Shoes' },
  { img: goodrootProject, project: 'Goodroot Crypto' },
  { img: olipopProject, project: 'Olipop NFTs' },
];

const ProjectsCards = () => {
  return (
    <div className="flex flex-col items-center justify-center self-baseline 2xl:mx-36 2xl:flex 2xl:flex-row 2xl:flex-wrap 2xl:gap-y-20 2xl:space-x-10">
      <div className="relative w-full">
        <img
          src={yellowProjects}
          alt=""
          className="absolute left-1/2 top-2/3 -z-10 hidden -translate-x-1/2 translate-y-2/3 transform 2xl:block"
        />
      </div>
      {projectCards.map((project) => (
        <div className="my-7">
          <img
            src={project.img}
            alt={project.project}
            className="drop-shadow-md"
          />
          <h3 className="text mt-3 mb-2 font-openSans text-2xl font-semibold uppercase text-mainBlue">
            {project.project}
          </h3>
          <div className="flex flex-wrap whitespace-nowrap text-center  font-openSans text-xs font-medium text-white [&>p]:m-1 [&>p]:w-[132px] [&>p]:rounded-full [&>p]:bg-darkBlueBackground [&>p]:py-1">
            <p>COPYWRITTING</p>
            <p>BRAND CONTENT</p>
            <p>E-COMMERCE</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsCards;
