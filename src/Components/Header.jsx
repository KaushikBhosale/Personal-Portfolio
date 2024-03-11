
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import ContactModal from './ContactModal';
import resume from "../assets/Kaushik_Bhosale_Resume.pdf";

const Header = () => {
    const [brandName, setBrandName] = useState("</>");
    const menuLinks = [
        { title: "Home", link: "home", id: 1 },
        { title: "Services", link: "services", id: 2 },
        { title: "Projects", link: "projects", id: 3 },
        { title: "Expertise", link: "expertise", id: 4 },
        { title: "About", link: "about", id: 5 },
        { title: "Education", link: "education", id: 6 },
        { title: "Contact", link: "contact", id: 7 }
    ];
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = (e, title) => {
        e.preventDefault();
        if (title === "Contact" || title === "Hire Me") {
            setShowModal(true);
        }
    };

    return (
        <>
            <div className="flex justify-between items-center px-8 py-4 bg-gray-100 border-b md:px-16 md:h-20">
                <div className='text-2xl font-bold'>{brandName}</div>
                <div className='hidden md:flex space-x-6'>
                    {menuLinks.map((link) => (
                        <Link key={link.id} to={link.link} spy={true} smooth={true} offset={-70} duration={600} className='hover:text-purple-600 cursor-pointer' onClick={(e) => handleOpenModal(e, link.title)}>
                            {link.title}
                        </Link>
                    ))}
                </div>
                <div>
                    <button className="px-4 py-2 bg-black text-white text-1xl rounded-full shadow">
                        <a href={resume} target="_blank" rel="noopener noreferrer" download>Download CV</a>
                        <a href={resume} download>
                            <i className="fas fa-download ml-2"></i>
                        </a>
                    </button>
                </div>
            </div>
            {showModal && <ContactModal closeModal={() => setShowModal(false)} />}
        </>
    )
}

export default Header;
