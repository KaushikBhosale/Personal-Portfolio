import React, { useState } from "react";

const Services = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Web Application Development",
      description: "Develop Web Applications using Java technologies for both frontend and backend.",
      icon: "fa-brands fa-aws",
      actionButton: {
        title: "Check",
        link: "#",
      },
    },
    {
      id: 2,
      title: "Frontend Development",
      description: "Designing and coding user interfaces for web applications and websites.",
      icon: "fa-solid fa-computer",
      actionButton: {
        title: "Check",
        link: "#",
      },
    },
    {
      id: 3,
      title: "Backend Development",
      description: "Building server-side logic to support web applications and services.",
      icon: "fa-solid fa-server",
      actionButton: {
        title: "Check",
        link: "#",
      },
    },
  ]);

  return (
    <>
      <div className="main-container py-14">
        <h1 className="text-5xl font-bold text-center underline text-black">
          My Services
        </h1>
        <div className="services-container flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 px-10 mt-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="cursor-pointer hover:bg-slate-100 bg-gray-200 p-5 text-center shadow-lg rounded-xl service1 space-y-4 md:w-1/3"
            >
              <i className={`text-5xl ${service.icon}`}></i>
              <h1 className="text-4xl text-purple">{service.title}</h1>
              <p>{service.description}</p>
              {/* <button className="px-3 py-2 bg-blue-500 text-2xl rounded-full shadow-lg">
                {service.actionButton.title}
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
