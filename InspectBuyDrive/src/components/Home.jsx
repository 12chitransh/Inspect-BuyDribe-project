import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <section className="mt-8 flex flex-col items-center animate-fadeIn">
            <div className="bg-gray-100 rounded-xl shadow-md px-6 py-8 w-full border border-gray-200 flex flex-col items-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center tracking-tight">
                    Let Phil take a look first before you hand over the cash.
                </h2>
                <p className="text-lg md:text-xl text-blue-600 font-semibold mb-2 text-center uppercase tracking-wide">
                    FIXED PRICING, NO SURPRISES
                </p>
                <p className="text-lg md:text-xl text-gray-700 mb-2 text-center">
                    ALL LIGHT VEHICLES <span className="font-bold">$275</span>
                </p>
                <p className="text-base md:text-lg text-gray-600 mb-2 text-center">
                    Full Comprehensive Check Incl. PPSR
                </p>
                <p className="text-base md:text-lg text-gray-600 text-center">
                    Vehicle Inspection Services Sydney
                </p>
                <div className="flex justify-center mt-6">
                    <button className="bg-red-600 text-white px-6 py-2 rounded-md shadow hover:bg-red-700 transition-colors font-semibold text-lg">
                        Book Inspection
                    </button>
                </div>
            </div>
        {/* Vehicle type selection */}
    <div className="w-full flex flex-col items-center mt-8 mb-24 animate-fadeIn">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">What type of vehicle are you purchasing?</h3>
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8">
            <div className="flex flex-col gap-4 w-full max-w-xs">
                <Link to="/car" className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-8 py-3 rounded-xl shadow-md transition-all duration-200 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center">Car</Link>
                <Link to="/suv" className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-8 py-3 rounded-xl shadow-md transition-all duration-200 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center">SUV</Link>
                <Link to="/4x4" className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-8 py-3 rounded-xl shadow-md transition-all duration-200 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center">4x4</Link>
                <Link to="/truck" className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-8 py-3 rounded-xl shadow-md transition-all duration-200 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center">Truck</Link>
                <Link to="/commercial" className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-8 py-3 rounded-xl shadow-md transition-all duration-200 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center">Commercial</Link>
            </div>
            <div className="w-full max-w-md flex items-center justify-center">
                <span className="text-xl md:text-2xl font-bold text-blue-700 text-center">Thousands of Sydney car buyers trust Inspect Buy Drive.</span>
            </div>
        </div>
    </div>
        </section>
    );
};

// Tailwind CSS animation utility
// Add this to your global CSS if not present:
// .animate-fadeIn { animation: fadeIn 1.2s ease-in; }
// @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: none; } }

export default Home;