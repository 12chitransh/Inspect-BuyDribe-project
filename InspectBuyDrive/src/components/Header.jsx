import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
	<header className="bg-white shadow">
		<div className="container mx-auto flex items-center justify-between py-4 px-6">
			<div className="flex items-center space-x-2">
				<img
					src="https://inspectbuydrive.com.au/wp-content/uploads/2025/03/Untitled-design-40.png.webp"
					alt="Brand"
					className="h-10 w-auto ml-2 rounded"
				/>
				<span className="text-xl font-bold text-gray-800">
					Inspect BuyDrive
				</span>
			</div>
			<nav className="flex space-x-6 items-center">
				<Link
					to="/"
					className="text-gray-700 hover:text-blue-600 font-semibold"
				>
					Home
				</Link>
				<Link
					to="/service"
					className="text-gray-700 hover:text-blue-600 font-semibold"
				>
					Service
				</Link>
				<Link
					to="/about"
					className="text-gray-700 hover:text-blue-600 font-semibold"
				>
					About
				</Link>
				<Link
					to="/contact"
					className="text-gray-700 hover:text-blue-600 font-semibold"
				>
					Contact
				</Link>
				<button
					className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold transition"
					type="button"
				>
					Inspection
				</button>
			</nav>
		</div>
	</header>
);

export default Header;
