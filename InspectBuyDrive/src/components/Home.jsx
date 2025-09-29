import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-gray-200 animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-2xl px-8 py-10 w-full max-w-2xl border border-gray-200 flex flex-col items-center animate-fadeInScale">
                <div className="w-full bg-blue-50 rounded-xl py-6 px-4 mb-4">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 text-center tracking-tight animate-fadeInUp">
                        Let Phil take a look first before you hand over the cash.
                    </h2>
                </div>
                <p className="text-xl md:text-2xl text-red-600 font-bold mb-2 text-center uppercase tracking-wide animate-fadeInUp">
                    FIXED PRICING, NO SURPRISES
                </p>
                <p className="text-lg md:text-xl text-gray-800 mb-2 text-center font-semibold animate-fadeInUp">
                    ALL LIGHT VEHICLES <span className="font-bold text-blue-700">$275</span>
                </p>
                <p className="text-base md:text-lg text-gray-600 mb-2 text-center animate-fadeInUp">
                    Full Comprehensive Check Incl. PPSR
                </p>
                <p className="text-base md:text-lg text-gray-600 text-center animate-fadeInUp">
                    Vehicle Inspection Services Sydney
                </p>
                <div className="flex justify-center mt-8 animate-fadeInUp">
                    <button className="bg-gradient-to-r from-red-500 to-red-700 text-white px-8 py-3 rounded-xl shadow-lg hover:scale-105 hover:from-red-600 hover:to-red-800 transition-all font-bold text-xl flex items-center gap-2">
                        <span className="animate-bounce">🚗</span>
                        Book Inspection
                    </button>
                </div>
            </div>
            {/* Vehicle type selection */}
            <div className="w-full flex flex-col items-center mt-12 mb-24 animate-fadeInScale">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center animate-fadeInUp">What type of vehicle are you purchasing?</h3>
                <div className="flex flex-col md:flex-row items-center justify-center w-full gap-10">
                    <div className="flex flex-col gap-5 w-full max-w-xs">
                        <Link to="/car" className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-8 py-4 rounded-xl shadow-lg transition-all duration-200 font-bold text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center animate-fadeInUp">Car</Link>
                        <Link to="/suv" className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-8 py-4 rounded-xl shadow-lg transition-all duration-200 font-bold text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center animate-fadeInUp">SUV</Link>
                        <Link to="/4x4" className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-8 py-4 rounded-xl shadow-lg transition-all duration-200 font-bold text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center animate-fadeInUp">4x4</Link>
                        <Link to="/truck" className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-8 py-4 rounded-xl shadow-lg transition-all duration-200 font-bold text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center animate-fadeInUp">Truck</Link>
                        <Link to="/commercial" className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-8 py-4 rounded-xl shadow-lg transition-all duration-200 font-bold text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center animate-fadeInUp">Commercial</Link>
                    </div>
                    <div className="w-full max-w-md flex items-center justify-center animate-fadeInUp">
                        <span className="text-2xl md:text-3xl font-bold text-blue-700 text-center drop-shadow-lg">Thousands of Sydney car buyers trust Inspect Buy Drive.</span>
                    </div>
                </div>
            </div>
            {/* Animation styles */}
            <style>
                {`
                .animate-fadeIn { animation: fadeIn 1.2s ease-in; }
                .animate-fadeInUp { animation: fadeInUp 1.2s cubic-bezier(.4,0,.2,1); }
                .animate-fadeInScale { animation: fadeInScale 1.2s cubic-bezier(.4,0,.2,1); }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px);}
                    to { opacity: 1; transform: none;}
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(40px);}
                    to { opacity: 1; transform: translateY(0);}
                }
                @keyframes fadeInScale {
                    from { opacity: 0; transform: scale(0.95);}
                    to { opacity: 1; transform: scale(1);}
                }
                .animate-bounce {
                    animation: bounce 1s infinite;
                }
                @keyframes bounce {
                    0%, 100% { transform: translateY(0);}
                    50% { transform: translateY(-8px);}
                }
                `}
            </style>
        </section>
    );
};

export default Home;