import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="bg-white shadow-md w-full">
					<div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
						<div className="flex items-center space-x-2">
							
							<img src="https://inspectbuydrive.com.au/wp-content/uploads/2025/03/Untitled-design-40.png.webp" alt="Brand" className="h-10 w-auto ml-2 rounded" />
							<span className="text-xl font-bold text-gray-800">Inspect BuyDrive</span>
						</div>
						<nav className="hidden md:flex space-x-6">
							  <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium">Home</Link>
							  <a href="#service" className="text-gray-600 hover:text-blue-600 font-medium">Service</a>
							  <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium">About</a>
							  <Link to="/contact" className="text-gray-600 hover:text-blue-600 font-medium">Contact</Link>
						</nav>
						<div className="flex items-center space-x-4">
							<button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition-colors font-semibold hidden md:block">
								Book Inspection
							</button>
							<button className="md:hidden p-2 rounded text-gray-600 hover:bg-gray-100 focus:outline-none">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5m-16.5 5.5h16.5m-16.5 5.5h16.5" />
								</svg>
							</button>
						</div>
			</div>
		</header>
	);
};

export default Header;
