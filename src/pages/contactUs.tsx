import React from "react";


const ContactUs = () => {

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center ">
            <h2 className="text-3xl font-bold text-white mb-8">Contact Us</h2>
            <div className="bg-gray-800 shadow-lg rounded-2xl w-full max-w-4xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Send us a message</h3>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-300 mb-1 text-left">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-300 mb-1 text-left">Email</label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-300 mb-1 text-left">Message</label>
                            <textarea
                                rows="3"
                                placeholder="Your Message"
                                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col justify-center space-y-6 text-gray-300">
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                        <p>support@example.com</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Phone No</h4>
                        <p>+11 234 567 890</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Location</h4>
                        <p>123 Street, City, Country</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
