import React from "react";
import { Link } from "react-router-dom";

const locationsNavlinksMobile = () => {
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

	const [open, setOpen] = React.useState(false);
	return (
		<nav className="relative lg:hidden">
			<div className="">
				<div
					className="locations-dropdown relative text-[0.9rem] md:text-base"
					onClick={() => setOpen((prevState) => !prevState)}
				>
					<select className="nav-item flex items-center h-full pl-3 ">
						{links.map((link, index) => (
							<option value="" className="" key={index}>
								<Link className="py-2 hover:font-bold duration-800" to={link.path}>
									{link.title}
								</Link>
							</option>
						))}
					</select>
					{/* <Link
						to={firstLink.path}
						className="flex items-center gap-2 px-5 font-bold lg:font-normal text-base lg:text-[0.9rem]"
					>
						{firstLink.mainTitle}
						<span className="chevron-down mt-[0.5rem] text-xl">
							<ion-icon className="" name={`${open ? "chevron-up" : "chevron-down"}`}></ion-icon>
						</span>
					</Link>
					<ul
						className={`location-nav-links absolute flex-col justify-between w-full bg-white z-40 px-5 py-2 ${
							open ? "flex" : "hidden"
						}`}
					>
						{links.map((link, index) => (
							<li key={index} className="nav-item flex items-center h-full">
								<Link className="py-2 hover:font-bold duration-800" to={link.path}>
									{link.title}
								</Link>
							</li>
						))}
					</ul> */}
				</div>
			</div>
		</nav>
	);
};

export default locationsNavlinksMobile;
