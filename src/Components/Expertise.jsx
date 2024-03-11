import React, { useState } from "react";
import bannerBackground from "../assets/banner_wallpaper.svg";
import ContactModal from "./ContactModal";

const Expertise = () => {
    const [technologies] = useState([
        "C",
        "HTML5",
        "CSS5",
        "Bootstrap",
        "Javascript",
        "ReactJS",
        "MySQL",
        "Core Java",
        // "Spring Framework",
        "Hibernate(ORM Tool)",
        "Spring MVC",
        "Spring Data JPA",
        "Spring Boot",
        "Spring Boot RESTFul APIs",
        // "Spring Security",
    ]);
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="mt-2 py-6">
                <h1 className="mb-16 text-5xl font-bold underline text-center">
                    My Expertise
                </h1>
                <div
                    style={{
                        backgroundImage: `url(${bannerBackground})`,
                        backgroundSize: "cover",
                    }}
                    className="box-container items-center flex py-16"
                >
                    <div className="flex justify-center w-full md:w-2/3">
                        <div className="w-full text-center space-y-4">
                            <h1 className="text-4xl font-bold text-white">Skills</h1>
                            <p >
                                <b>Proficient in Java ecosystem, adept at building robust Spring Boot REST APIs, Spring Boot MVC, and proficient in MySQL database management.</b>
                            </p>
                            <button
                                className="text-2xl px-4 py-2 bg-black text-white rounded-full shadow-lg"
                                onClick={() => setShowModal(true)}
                            >
                                Hire Me
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center mt-8 md:mt-0 w-full md:w-2/3">
                        <div className="flex justify-center w-full space-x-3 flex-wrap">
                            {technologies.map((tech, index) => (
                                <p
                                    key={index}
                                    className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-black text-white bg-teal-800 cursor-pointer"
                                >
                                    {tech}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {showModal && <ContactModal closeModal={() => setShowModal(false)} />}
        </>
    );
};

export default Expertise;
