import React from "react";

const Contact = () => {
    return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 animate-fadeIn py-12">
            <form className="bg-white rounded-xl shadow-lg p-12 w-full max-w-2xl border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Details</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition" placeholder="Your Name" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="number">Phone Number</label>
                    <input type="tel" id="number" name="number" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition" placeholder="Your Number" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="address">Address</label>
                    <input type="text" id="address" name="address" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition" placeholder="Your Address" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="vehicle">Vehicle</label>
                    <input type="text" id="vehicle" name="vehicle" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition" placeholder="Vehicle Type" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md shadow transition-all duration-200 transform hover:scale-105 animate-fadeIn">Send</button>
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                    <div className="flex flex-col items-center">
                        <span className="text-lg font-semibold text-blue-700">Contact Us</span>
                        <span className="text-gray-700">+61 123 456 789</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-lg font-semibold text-blue-700">Email Us</span>
                        <span className="text-gray-700">info@inspectbuydrive.com</span>
                    </div>
                </div>
            </form>
            <div className="bg-gray-50 rounded-xl shadow p-6 border border-gray-200 flex flex-col items-center animate-fadeIn w-full mt-16">
                <h3 className="text-2xl md:text-4xl font-bold text-blue-700 mb-4 text-center">Love the car but not the seller?</h3>
                <p className="text-xl md:text-2xl text-gray-700 mb-4 text-center font-semibold">Buying from Facebook Marketplace?</p>
                <p className="text-xl md:text-2xl text-gray-700 mb-4 text-center italic">It’s your dream car…</p>
                <p className="text-xl md:text-2xl text-red-600 font-bold text-center">Let Phil take a look first — before you hand over the cash.</p>
            </div>
            <div className="w-full flex flex-col items-center mt-8 animate-fadeIn">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">What type of vehicle are you purchasing?</h3>
                <div className="flex flex-col md:flex-row items-center justify-center w-full mt-8 gap-8">
                    <div className="flex flex-col items-center gap-4 w-full max-w-xs">
                        {['Car', 'SUV', '4x4', 'Truck', 'Commercial'].map((type) => (
                            <button key={type} className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-6 py-3 rounded-xl shadow-md transition-all duration-200 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2">
                                {type}
                            </button>
                        ))}
                        <div className="mt-6 w-full text-center">
                            <p className="text-2xl md:text-4xl text-blue-700 font-bold mb-4">FIXED PRICING, NO SURPRISES</p>
                            <p className="text-2xl md:text-4xl text-gray-800 font-semibold mb-3">ALL LIGHT VEHICLES <span className="font-bold">$275</span></p>
                            <p className="text-xl md:text-2xl text-gray-600">Full Comprehensive Check Incl. PPSR</p>
                        </div>
                    </div>
                    <img src="https://inspectbuydrive.com.au/wp-content/uploads/2025/03/Untitled-design-40.png.webp" alt="Vehicle" className="w-full max-w-md h-auto rounded-xl shadow-lg" />
                </div>
            </div>
        </div>
    );
};

export default Contact;