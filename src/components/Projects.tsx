import React from 'react';
import CustomButton from './CustomButton';
import ProjectsCards from './ProjectsCards';

const Projects = () => {
  return (
    <div className="mx-6 py-10 xl:py-20">
      <h1 className="mb-10 text-center font-openSans text-4xl font-semibold text-mainBlue">
        Comprised of diverse minds
      </h1>
      <div>
        <ProjectsCards />
      </div>
      <div className="mx-auto max-w-xs justify-center xl:flex">
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
