import React from "react";
import LocationsNavLinks from "../components/locationsNavlinks";
import LocationsNavLinksMobile from "../components/locationsNavlinks-mobile";

const locations = () => {
	return (
		<nav className="pt-[3rem] lg:pt-[5rem] px-4 md:px-0">
			<div className="locations-nav-container flex items-center justify-between md:flex md:justify-between md:items-center md:w-[90%] md:mx-auto lg:w-[87%] xl:w-[80%] md:gap-[3rem] lg:gap-[1.5rem] xl:gap-[3rem]">
				<LocationsNavLinks />
				<input
					className="rounded-[8px] border-2 border-[#B4B4B4] py-2 px-3 bg-settings bg-[95%] bg-no-repeat w-[40%] md:w-[25%] block lg:w-[16%]"
					placeholder="Location"
				/>

				<div className={`locations-nav__mobile lg:hidden`}>
					<LocationsNavLinksMobile />
				</div>
			</div>
		</nav>
	);
};

export default locations;
