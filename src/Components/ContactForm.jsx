import { useState } from "react";

const ContactForm = () => {
    // State to manage form inputs
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., sending data to server)
        console.log(formData);
        // Clear form fields after submission
        setFormData({ name: "", email: "", message: "" });
    };

    // Function to handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Name input */}
            <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-semibold mb-1">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    placeholder="Cannot submit as this is a Static Website"
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                    required
                />
            </div>
            {/* Email input */}
            <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-semibold mb-1">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    placeholder="Cannot submit as this is a Static Website"
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                    required
                />
            </div>
            {/* Message input */}
            <div className="mb-4">
                <label htmlFor="message" className="block text-lg font-semibold mb-1">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    placeholder="Cannot submit as this is a Static Website"
                    onChange={handleChange}
                    rows={4}
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                    required
                />
            </div>
            {/* Submit button */}
            <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600"
            >
                Submit
            </button>
            <small><b>Cannot submit as this is a Static Website</b></small>
        </form>
    );
};

export default ContactForm;

