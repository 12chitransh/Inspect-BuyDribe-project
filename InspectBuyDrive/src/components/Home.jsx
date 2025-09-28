import React from "react";

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
            <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-8 py-3 rounded-xl shadow-md transition-all duration-200 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-400">Car</button>
                <button className="bg-green-600 hover:bg-green-700 active:bg-green-800 text-white px-8 py-3 rounded-xl shadow-md transition-all duration-200 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-green-400">SUV</button>
                <button className="bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-white px-8 py-3 rounded-xl shadow-md transition-all duration-200 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-yellow-300">4x4</button>
                <button className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-8 py-3 rounded-xl shadow-md transition-all duration-200 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-red-400">Truck</button>
                <button className="bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white px-8 py-3 rounded-xl shadow-md transition-all duration-200 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-purple-400">Commercial</button>
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