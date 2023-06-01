import React from 'react';
import CustomButton from './CustomButton';
import ProjectsCards from './ProjectsCards';

const Projects = () => {
  return (
    <div className="py-10 xl:py-20">
      <h1 className="text-center font-openSans text-4xl font-semibold text-mainBlue 2xl:text-6xl 2xl:w-2/4 mx-auto">
        Comprised of diverse minds
      </h1>
      <div>
        <ProjectsCards />
      </div>
      <div className="mx-auto max-w-xs justify-center xl:flex pt-10 2xl:pt-20">
        <CustomButton
          displayText="See All Projects"
          isTransparent={false}
          textColor="text-white"
        />
      </div>
    </div>
  );
};

export default Projects;
