import React, { useState } from "react";
import bannerImage from "../assets/kaushik.png";
import resume from "../assets/Kaushik_Bhosale_Resume.pdf";

const About = () => {
    const [data, setData] = useState({
        image: bannerImage,
        title: "Full Stack Java Developer",
        desc1: `Transitioning from Civil Engineering to Full Stack Java Development, I merge engineering precision with Java, Spring Boot, React, MySQL, and database management expertise to architect comprehensive solutions. Proficient in building RESTful APIs, I prioritize backend development excellence for robust and scalable applications.`,
        desc2: ` With proficiency in React for dynamic frontends, I'm dedicated to delivering comprehensive, high-quality software solutions. Leveraging my background in Civil Engineering, I prioritize excellence in backend development, specializing in crafting RESTful APIs with Java and Spring Boot for scalable and efficient applications`,
        actionButton: {
            title: "Download CV",
            link: resume,
        },
    });

    return (
        <>
            <div className="main-container py-6">
                <h1 className="text-center pb-16 text-5xl underline font-bold">
                    About Me
                </h1>
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-between md:items-start">
                    {/* image container */}
                    <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                        <img
                            className="rounded-full shadow-lg w-3/4 md:w-fit"
                            src={data.image}
                            alt="Kaushik Bhosale"
                        />
                    </div>

                    {/* text container  */}
                    <div className="w-full md:w-2/3 flex justify-center">
                        <div className="space-y-5 w-11/12 md:w-full">
                            <h1 className="text-5xl font-semibold">{data.title}</h1>
                            <p>{data.desc1}</p>
                            <p>{data.desc2}</p>
                            <button className="bg-black text-white px-4 py-2 text-2xl rounded-full shadow-lg">
                                <a href={data.actionButton.link} target="_blank" rel="noopener noreferrer" download>{data.actionButton.title}</a>
                                <a href={data.actionButton.link} download>
                                    <i className="fas fa-download ml-2"></i>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
