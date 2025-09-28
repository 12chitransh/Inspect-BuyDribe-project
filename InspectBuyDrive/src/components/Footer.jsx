import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white py-8 px-4">
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
				<div className="flex items-center gap-4">
					<img src="https://inspectbuydrive.com.au/wp-content/uploads/2025/03/Untitled-design-40.png.webp" alt="Logo" className="h-24 w-auto rounded-xl shadow" />
				</div>
				<nav className="flex flex-col md:flex-row items-center gap-6 text-lg font-semibold">
					<Link to="/" className="hover:text-blue-400 transition">Home</Link>
					<Link to="#service" className="hover:text-blue-400 transition">Service</Link>
					<Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
					<Link to="#about" className="hover:text-blue-400 transition">About</Link>
				</nav>
				<div className="flex flex-col items-center md:items-end text-sm md:text-base">
					<span className="font-bold text-blue-400">Contact Us</span>
					<span>+61 123 456 789</span>
					<span>info@inspectbuydrive.com</span>
				</div>
			</div>
			<div className="mt-8 text-center text-gray-400 text-xs">
				&copy; {new Date().getFullYear()} Inspect BuyDrive. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
