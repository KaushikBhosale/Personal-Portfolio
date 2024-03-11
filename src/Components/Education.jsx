import React, { useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "B.E in Civil",
      description: "Percentage : 74 % [ Aug 2019 - Jun 2022 ] From Dr DY Patil School Of Engineering & Technology, Lohegaon, Pune",
      icon: "fa-solid fa-graduation-cap",
    },
    {
      id: 2,
      title: "Diploma in Civil",
      description: "Percentage : 70 % [ Aug 2015 - Aug 2019 ] From Dr DY Patil School Of Engineering & Technology, Lohegaon, Pune",
      icon: "fa-solid fa-graduation-cap",
    },
    {
      id: 3,
      title: "Secondary School",
      description: "Percentage: 72 % [ Jun - 2015 ] From I.E.S VN Sule Guruji English Medium School, Dadar, Mumbai",
      icon: "fa-solid fa-school",
    },
  ]);

  return (
    <>
      <div className="main-container py-14">
        <h1 className="text-5xl font-bold text-center underline">
          My Education
        </h1>
        <div className="projects-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 mt-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="cursor-pointer hover:bg-slate-100 bg-gray-200 p-5 text-center shadow-lg rounded-xl service1 space-y-4"
            >
              <i className={`text-5xl ${project.icon}`}></i>
              <h1 className="text-4xl text-purple">{project.title}</h1>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
