import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cars } from "../data/cars";
import { CartContext } from "../context/CartContext";

const Home = () => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find Your Perfect Car
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Discover amazing deals on second-hand cars from trusted sellers
          </p>
          <Link
            to="/cars"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Browse Cars
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Cars</h3>
              <p className="text-gray-600">All our cars are thoroughly inspected and verified for quality.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-600">Competitive pricing with no hidden fees or surprises.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
              <p className="text-gray-600">Choose from a wide variety of makes, models, and price ranges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Cars</h2>
            <Link to="/cars" className="text-blue-600 font-semibold hover:text-blue-700">
              View all cars →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.slice(0, 6).map((car) => (
              <div key={car.id} className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <img src={car.image} alt={car.name} className="w-full h-44 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-1">{car.name}</h3>
                  <p className="text-gray-600 mb-2">{car.description}</p>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-green-600 font-bold">${car.price.toLocaleString()}</span>
                    <span className="text-gray-500 text-sm">{car.year}</span>
                  </div>
                  <div className="flex gap-2 mb-3 text-xs text-gray-500">
                    <span>{car.fuel}</span>
                    <span>|</span>
                    <span>{car.transmission}</span>
                    <span>|</span>
                    <span>{car.mileage.toLocaleString()} km</span>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      to={`/cars/${car.id}`}
                      className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-center hover:bg-blue-700"
                    >
                      View
                    </Link>
                    <button
                      onClick={() => addToCart(car)}
                      className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Car?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied customers who found their perfect vehicle with us.</p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/signup"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Sign Up Now
            </Link>
            <Link
              to="/cars"
              className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Cars
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;