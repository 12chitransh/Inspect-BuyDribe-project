import React from "react";

const About = () => (
  <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-blue-800 mb-4">About CarMarket</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          CarMarket is a next-level marketplace for buying and selling second-hand vehicles.
          We combine smart search, verified inspection reports, and one-click checkout.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-xl shadow-lg p-6 transform transition hover:-translate-y-1 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold mb-3 text-blue-700">Our Mission</h2>
          <p className="text-gray-700">Help every buyer find the most reliable, best-value car with confidence.</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 transform transition hover:-translate-y-1 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold mb-3 text-blue-700">Our Vision</h2>
          <p className="text-gray-700">A trusted online destination where used car buying is transparent, fast, and fun.</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 transform transition hover:-translate-y-1 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold mb-3 text-blue-700">Our Promise</h2>
          <p className="text-gray-700">All listings verified with full condition reports and fair pricing guarantee.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-3xl font-bold mb-4">How it works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border border-gray-100 rounded-lg hover:bg-blue-50 transition text-center">
            <h4 className="font-semibold text-blue-600">Search Smart</h4>
            <p className="text-gray-600 mt-2">Filter by model, year, price, mileage, and inspection rating.</p>
          </div>
          <div className="p-4 border border-gray-100 rounded-lg hover:bg-blue-50 transition text-center">
            <h4 className="font-semibold text-blue-600">Inspect Agreed</h4>
            <p className="text-gray-600 mt-2">Each car is verified by our inspectors before listing.</p>
          </div>
          <div className="p-4 border border-gray-100 rounded-lg hover:bg-blue-50 transition text-center">
            <h4 className="font-semibold text-blue-600">Buy Confident</h4>
            <p className="text-gray-600 mt-2">Add to cart, checkout, and get your vehicle delivered or picked up.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
