import React from "react";

const About = () => (
  <div>
    <div className="w-screen min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row w-full h-full">
        {/* Left Side with Image and Main Text */}
        <div className="md:w-1/2 w-full flex flex-col items-center justify-center h-full bg-gradient-to-br from-blue-100 via-gray-100 to-white animate-fadeInLeft">
          <img
            src="https://www.hdwallpaperspulse.com/wp-content/uploads/2016/03/06/grey-car-background.jpeg"
            alt="Grey Car"
            className="w-4/5 h-64 object-cover rounded-xl shadow-md mt-8 mb-6 transition-transform duration-700 hover:scale-105"
          />
          <p className="text-4xl md:text-5xl text-center font-semibold text-gray-900 px-8 mb-8 animate-fadeInUp">
            At Inspect Buy Drive, we specialise in one thing — helping you avoid
            costly vehicle mistakes.
          </p>
        </div>
        {/* Right Side with About Content */}
        <div className="md:w-1/2 w-full flex flex-col justify-center p-10 h-full animate-fadeInRight">
          <div className="flex justify-center items-center mb-6 w-full h-24">
            <h2 className="text-5xl font-extrabold text-blue-700 drop-shadow-lg animate-fadeInDown">
              About Us
            </h2>
            <button
              className="ml-6 px-5 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition font-semibold animate-fadeInScale"
              type="button"
            >
              Inspection
            </button>
          </div>
          <p className="text-2xl text-gray-700 mb-6 leading-relaxed animate-fadeInUp">
            Inspect Buy Drive is dedicated to helping Sydney car buyers make
            informed decisions. Our team provides comprehensive vehicle inspections,
            ensuring transparency and peace of mind for every purchase.
          </p>
          <p className="text-xl text-gray-500 font-medium animate-fadeInUp">
            Trust us for fixed pricing, no surprises, and expert advice before you
            hand over the cash.
          </p>
          {/* New centered text below About Us content */}
          <div className="w-full flex justify-center items-center">
            <p className="text-center mx-auto max-w-3xl mt-10 text-lg text-gray-700 font-medium animate-fadeInScale">
              At Inspect Buy Drive, we specialise in one thing — helping you avoid
              costly vehicle mistakes. Whether it’s a used car, a commercial truck, or a
              piece of construction machinery, we give you the confidence to buy
              smart.
              <br />
              <br />
              Our lead inspector is a highly qualified diesel mechanic with years of
              hands-on experience across every type of vehicle on Australian roads and
              worksites. We know what to look for, where problems hide, and how to
              explain it in plain English.
            </p>
          </div>
        </div>
      </div>
      {/* Animation styles */}
      <style>
        {`
          .animate-fadeInLeft {
            animation: fadeInLeft 1s ease;
          }
          .animate-fadeInRight {
            animation: fadeInRight 1s ease;
          }
          .animate-fadeInUp {
            animation: fadeInUp 1.2s ease;
          }
          .animate-fadeInDown {
            animation: fadeInDown 1.2s ease;
          }
          .animate-fadeInScale {
            animation: fadeInScale 1.2s cubic-bezier(.4,0,.2,1);
          }
          @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(-40px);}
            to { opacity: 1; transform: translateX(0);}
          }
          @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(40px);}
            to { opacity: 1; transform: translateX(0);}
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-40px);}
            to { opacity: 1; transform: translateY(0);}
          }
          @keyframes fadeInScale {
            from { opacity: 0; transform: scale(0.95);}
            to { opacity: 1; transform: scale(1);}
          }
        `}
      </style>
    </div>
    {/* How It Works Section */}
    <div className="w-full flex flex-col items-center justify-center mt-16 mb-12 animate-fadeInUp">
      <h3 className="text-4xl font-extrabold text-blue-700 mb-8 text-center drop-shadow-lg">How It Works</h3>
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform duration-500 hover:scale-105">
          <span className="text-5xl mb-4 text-blue-600">📝</span>
          <h4 className="text-xl font-bold mb-2 text-gray-800">1. Book Online</h4>
          <p className="text-gray-600 text-center">Choose your vehicle type and book your inspection easily online or by phone.</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform duration-500 hover:scale-105">
          <span className="text-5xl mb-4 text-blue-600">🔍</span>
          <h4 className="text-xl font-bold mb-2 text-gray-800">2. We Inspect</h4>
          <p className="text-gray-600 text-center">Our expert inspector visits the vehicle, performs a thorough check, and explains everything in plain English.</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform duration-500 hover:scale-105">
          <span className="text-5xl mb-4 text-blue-600">✅</span>
          <h4 className="text-xl font-bold mb-2 text-gray-800">3. Buy With Confidence</h4>
          <p className="text-gray-600 text-center">Get a clear report and advice so you can buy smart, avoid costly mistakes, and drive away with peace of mind.</p>
        </div>
      </div>
    </div>
    {/* Why Choose Us Section */}
    <div className="w-full flex flex-col items-center justify-center mt-8 mb-16 animate-fadeInUp">
      <h3 className="text-4xl font-extrabold text-blue-700 mb-8 text-center drop-shadow-lg">Why Choose Us</h3>
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform duration-500 hover:scale-105">
          <span className="text-5xl mb-4 text-blue-600">🎯</span>
          <h4 className="text-xl font-bold mb-2 text-gray-800">Expertise</h4>
          <p className="text-gray-600 text-center">Led by a highly qualified diesel mechanic with years of hands-on experience across all vehicle types.</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform duration-500 hover:scale-105">
          <span className="text-5xl mb-4 text-blue-600">💡</span>
          <h4 className="text-xl font-bold mb-2 text-gray-800">Transparency</h4>
          <p className="text-gray-600 text-center">Clear, honest reports and advice in plain English. No hidden fees or surprises.</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform duration-500 hover:scale-105">
          <span className="text-5xl mb-4 text-blue-600">🤝</span>
          <h4 className="text-xl font-bold mb-2 text-gray-800">Trust</h4>
          <p className="text-gray-600 text-center">Thousands of Sydney buyers rely on Inspect Buy Drive for peace of mind and smart purchases.</p>
        </div>
      </div>
    </div>
    {/* What type of vehicle are you purchasing Section */}
    <div className="w-full flex flex-col items-center mt-12 mb-24 animate-fadeInScale">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center animate-fadeInUp">
        What type of vehicle are you purchasing?
      </h3>
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-10">
        <div className="flex flex-col gap-5 w-full max-w-xs">
          <a href="/car" className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-8 py-4 rounded-xl shadow-lg transition-all duration-200 font-bold text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center animate-fadeInUp">Car</a>
          <a href="/suv" className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-8 py-4 rounded-xl shadow-lg transition-all duration-200 font-bold text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center animate-fadeInUp">SUV</a>
          <a href="/4x4" className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-8 py-4 rounded-xl shadow-lg transition-all duration-200 font-bold text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center animate-fadeInUp">4x4</a>
          <a href="/truck" className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-8 py-4 rounded-xl shadow-lg transition-all duration-200 font-bold text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center animate-fadeInUp">Truck</a>
          <a href="/commercial" className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-8 py-4 rounded-xl shadow-lg transition-all duration-200 font-bold text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center animate-fadeInUp">Commercial</a>
        </div>
        <div className="w-full max-w-md flex items-center justify-center animate-fadeInUp">
          <span className="text-2xl md:text-3xl font-bold text-blue-700 text-center drop-shadow-lg">
            Thousands of Sydney car buyers trust Inspect Buy Drive.
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default About;