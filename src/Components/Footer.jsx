import React, { useState } from "react";
import { Link } from 'react-scroll'; // Import Link from react-scroll
import ContactModal from './ContactModal';

const Footer = () => {
    const [links] = useState([
        {
            text: "About",
            href: "about",
        },
        {
            text: "Privacy Policy",
            href: "/privacy",
        },
        {
            text: "Licensing",
            href: "/licensing",
        },
        {
            text: "Contact",
            href: "contact",
        },
    ]);

    const handleOpenModal = (id) => {
        if (id === "contact") {
            setShowModal(true);
        }
    };

    // State to manage modal visibility
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="py-5 border bg-black text-white flex flex-col md:flex-row justify-between items-center px-8 md:px-24 lg:px-32">
                <div className="mb-4 md:mb-0">
                    <p>
                        <b> @2024 | Kaushik Ajit Bhosale | <span>All Rights Reserved</span></b>
                    </p>
                </div>
                <div className="space-x-5 flex flex-wrap">
                    {links.map((link, index) => (
                        <Link key={index} to={link.href} spy={true} smooth={true} offset={-70} duration={500} className="hover:underline cursor-pointer" onClick={() => handleOpenModal(link.href)}>
                            {link.text}
                        </Link>
                    ))}
                </div>
            </div>
            {/* Modal component */}
            {showModal && <ContactModal closeModal={() => setShowModal(false)} />}
        </>
    );
};

export default Footer;
