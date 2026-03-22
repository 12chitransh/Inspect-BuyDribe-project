import React, { useContext, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { cars } from '../data/cars';
import { CartContext } from '../context/CartContext';

const Cars = () => {
  const { addToCart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('price-asc');
  const [fuelFilter, setFuelFilter] = useState('all');

  const filteredCars = useMemo(() => {
    let results = cars.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (fuelFilter !== 'all') {
      results = results.filter((car) => car.fuel.toLowerCase() === fuelFilter);
    }

    if (sortBy === 'price-asc') {
      results = results.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      results = results.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'year-newest') {
      results = results.sort((a, b) => b.year - a.year);
    } else if (sortBy === 'year-oldest') {
      results = results.sort((a, b) => a.year - b.year);
    }

    return results;
  }, [searchTerm, sortBy, fuelFilter]);

  const uniqueFuels = useMemo(() => {
    return ['all', ...new Set(cars.map((car) => car.fuel.toLowerCase()))];
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold text-center mb-6">Available Cars</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Search by model, description..."
          className="col-span-1 md:col-span-2 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="year-newest">Year: Newest</option>
          <option value="year-oldest">Year: Oldest</option>
        </select>
      </div>

      <div className="mb-6 flex flex-wrap gap-3">
        {uniqueFuels.map((fuel) => (
          <button
            key={fuel}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${fuelFilter === fuel ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            onClick={() => setFuelFilter(fuel)}
          >
            {fuel === 'all' ? 'All Fuels' : fuel.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCars.length === 0 ? (
          <div className="col-span-full text-center text-gray-500 bg-white border border-dashed border-gray-300 rounded-lg p-8">
            No cars found for the selected criteria.
          </div>
        ) : (
          filteredCars.map((car) => (
            <div key={car.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:-translate-y-1 hover:shadow-2xl">
              <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">{car.name}</h2>
                <p className="text-gray-600 mb-2">{car.description}</p>
                <div className="text-sm text-gray-500 mb-3 space-y-1">
                  <p>Year: {car.year}</p>
                  <p>Mileage: {car.mileage.toLocaleString()} km</p>
                  <p>Fuel: {car.fuel}</p>
                  <p>Transmission: {car.transmission}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">${car.price.toLocaleString()}</span>
                  <div className="flex gap-2">
                    <Link
                      to={`/cars/${car.id}`}
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-300 transition"
                    >
                      View
                    </Link>
                    <button
                      onClick={() => addToCart(car)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cars;