

import React, { useState } from 'react';
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import emailjs from '@emailjs/browser';

// Define type for form data
interface FormData {
    name: string;
    email: string;
    message: string;
}

// Define type for error state
interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}
// Define the prop type for each component
type SectionProps = {
    sectionRef: React.RefObject<HTMLDivElement>;
};


const Contact: React.FC<SectionProps> = ({ sectionRef }) => {
    // State to hold form data
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });

    // State to handle errors
    const [errors, setErrors] = useState<FormErrors>({});

    // State for success message
    const [successMessage, setSuccessMessage] = useState<string>('');

    // Handle input change and update formData
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Validate email format
    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Form validation
    const validateForm = (): boolean => {
        let valid = true;
        let newErrors: FormErrors = {};

        if (formData.name.trim() === '') {
            newErrors.name = 'Full name is required';
            valid = false;
        }

        if (formData.email.trim() === '') {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Invalid email format';
            valid = false;
        }

        if (formData.message.trim() === '') {
            newErrors.message = 'Message is required';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    // Handle form submit
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        // Check if form is valid
        if (validateForm()) {
            // If valid, handle form submission (e.g., send data to API)
            console.log('Form submitted successfully:', formData);


             // Use your EmailJS service ID, template ID, and user ID
             emailjs.send("","",{
                from_name: formData.email,
                to_name: "@gmail.com",
                message: formData.name + '\n' + formData.message,
                },{
                    publicKey:''
                })
             .then(
               (response) => {
                 console.log('SUCCESS!', response.status, response.text);
               },
               (err) => {
                 console.log('FAILED...', err);
               },
             );

            // Clear form data and show success message
            setFormData({ name: '', email: '', message: '' });
            setSuccessMessage('Your message has been sent successfully!');
            setErrors({});

            // Clear success message after 3 seconds
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        }
    };

    return (
        <div ref={sectionRef} className="w-full bg-black justify-center text-center py-5 mt-2 p-[5%] md:p-[10%] lg:p-[20%]">
            <h4 className="text-gray-400 font-semibold text-xs">GET IN TOUCH</h4>
            <h4 className="text-white font-sans font-semibold text-xl">Contact <span className="text-cyan-500">me.</span></h4>
            <div className="flex flex-col md:flex-row justify-between p-8 mt-10 bg-gray-950 text-white space-y-6 md:space-y-0 md:space-x-10">
                {/* Left Section - Contact Info */}
                <div className="flex flex-col space-y-4">
                    <h2 className="text-2xl font-semibold">Have an awesome project idea?</h2>
                    <p className="text-sky-500 font-semibold text-start">Let’s Discuss.</p>

                    <div className="flex items-center space-x-4">
                        <FaPhoneSquareAlt />
                        <p className="text-gray-300">+91 8958411183</p>
                    </div>

                    <div className="flex items-center space-x-4">
                        <MdEmail />
                        <p className="text-gray-300">Souravkukreti84@gmail.com</p>
                    </div>

                    <div className="flex items-center space-x-4">
                        <HiLocationMarker />
                        <p className="text-gray-300">India.</p>
                    </div>
                </div>

                {/* Right Section - Contact Form */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/2 space-y-6">
                    {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}

                    <form onSubmit={handleSubmit} noValidate>
                        <div className="flex flex-col">
                            <label className="text-gray-400 text-sm text-start">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter name"
                                className={`p-3 bg-gray-950 text-gray-300 rounded-md focus:outline-none focus:ring-2 ${errors.name ? 'focus:ring-red-500' : 'focus:ring-sky-500'
                                    }`}
                            />
                            {errors.name && <p className="text-red-500 text-sm text-start">{errors.name}</p>}
                        </div>

                        <div className="flex flex-col mt-4">
                            <label className="text-gray-400 text-sm text-start">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter email"
                                className={`p-3 bg-gray-950 text-gray-300 rounded-md focus:outline-none focus:ring-2 ${errors.email ? 'focus:ring-red-500' : 'focus:ring-sky-500'
                                    }`}
                            />
                            {errors.email && <p className="text-red-500 text-sm text-start">{errors.email}</p>}
                        </div>

                        <div className="flex flex-col mt-4">
                            <label className="text-gray-400 text-sm text-start">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Enter message"
                                className={`p-3 bg-gray-950 text-gray-300 rounded-md focus:outline-none focus:ring-2 ${errors.message ? 'focus:ring-red-500' : 'focus:ring-sky-500'
                                    } h-32`}
                            />
                            {errors.message && <p className="text-red-500 text-sm text-start">{errors.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="bg-sky-500 mt-6 hover:bg-sky-600 text-gray-900 font-semibold py-2 px-4 rounded-md flex items-center justify-center"
                        >
                            Send Message <i className="fas fa-paper-plane ml-2"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
