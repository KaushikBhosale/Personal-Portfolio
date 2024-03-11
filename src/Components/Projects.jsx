import React, { useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Employee Management",
      description: "An efficient system facilitating HR tasks, tracking employee data, performance, attendance, and payroll management for streamlined organizational processes.",
      icon: "fa-solid fa-users-rectangle",
      actionButton: {
        title: "View Src",
        link: "#",
      },
    },
    {
      id: 2,
      title: "E-Notes Application",
      description: "This project involves developing a web application designed to perform Create, Read, Update, Delete operations for Managing a Data of Employees. ",
      icon: "fa-solid fa-pen-to-square",
      actionButton: {
        title: "View Src",
        link: "#",
      },
    },
    {
      id: 3,
      title: "RESTFul APIs",
      description: "Develop RESTful APIs efficiently with Spring Boot, leveraging Postman for testing, and MVC architecture for organized and scalable code.",
      icon: "fa-solid fa-cloud",
      actionButton: {
        title: "View Src",
        link: "#",
      },
    },
  ]);

  return (
    <>
      <div className="main-container py-14">
        <h1 className="text-5xl font-bold text-center underline text-black">
          My Projects
        </h1>
        <div className="projects-container flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 px-10 mt-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="cursor-pointer hover:bg-slate-100 bg-gray-200 p-5 text-center shadow-lg rounded-xl service1 space-y-4 md:w-1/3"
            >
              <i className={`text-5xl ${project.icon}`}></i>
              <h1 className="text-4xl text-purple">{project.title}</h1>
              <p>{project.description}</p>
              {/* <button className="px-3 py-2 bg-blue-500 text-2xl rounded-full shadow-lg">
                {project.actionButton.title}
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
