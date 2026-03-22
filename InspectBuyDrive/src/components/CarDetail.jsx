import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { cars } from '../data/cars';

const CarDetail = () => {
  const { id } = useParams();
  const car = cars.find((entry) => String(entry.id) === id);

  if (!car) {
    return (
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center">Car not found</h2>
        <p className="text-center mt-4">
          Return to <Link to="/cars" className="text-blue-600 underline">Cars list</Link>.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6">{car.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src={car.image} alt={car.name} className="w-full rounded-lg shadow-lg" />
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-lg text-gray-700 mb-4">{car.description}</p>
          <div className="grid grid-cols-2 gap-4 text-gray-600 mb-4">
            <div><strong>Year:</strong> {car.year}</div>
            <div><strong>Mileage:</strong> {car.mileage.toLocaleString()} km</div>
            <div><strong>Fuel:</strong> {car.fuel}</div>
            <div><strong>Transmission:</strong> {car.transmission}</div>
          </div>
          <p className="text-3xl font-bold text-green-600 mb-4">${car.price.toLocaleString()}</p>
          <Link
            to="/cars"
            className="inline-block mt-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Cars
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;