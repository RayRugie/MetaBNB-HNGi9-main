import React from "react";
import { Link } from "react-router-dom";

const locationsNavlinks = () => {
	const links = [
		{
			path: "",
			title: "Restaurants",
		},
		{
			path: "",
			title: "Cottage",
		},
		{
			path: "",
			title: "Castle",
		},
		{
			path: "",
			title: "Fantasy city",
		},
		{
			path: "",
			title: "Beach",
		},
		{
			path: "",
			title: "Cabins",
		},
		{
			path: "",
			title: "Off-grid",
		},
		{
			path: "",
			title: "Farms",
		},
	];
	return (
		<div className="hidden lg:flex flex-1">
			<ul className="location-nav-links flex justify-between w-full">
				{links.map((link, index) => (
					<li key={index} className="nav-item flex items-center h-full">
						<Link className="p-2 hover:font-bold duration-800" to={link.path}>
							{link.title}
						</Link>
					</li>
					
				))}
			</ul>
		</div>
	);
};

export default locationsNavlinks;
