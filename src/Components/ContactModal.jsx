import React from 'react';
import ContactForm from './ContactForm'; // Assuming you have a ContactForm component

const ContactModal = ({ closeModal }) => {
    return (
        // Modal overlay
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            {/* Modal content */}
            <div className="bg-white p-8 rounded-lg">
                {/* Modal title */}
                <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
                
                {/* Render the ContactForm component */}
                <ContactForm />
                {/* Close button */}
                <button className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 mt-4" onClick={closeModal}>
                    Close
                </button>
            </div>
        </div>
    );
}

export default ContactModal;
