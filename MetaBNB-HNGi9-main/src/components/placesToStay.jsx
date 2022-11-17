import React from "react";
import Place from "./place";
import LocationNavbar from "./locationsNav";
import fullImagesUrls from "../fullData.jsx";
const places = () => {
	const places = fullImagesUrls.map((item) => {
		return (
			<Place
				key={item.id}
				img={item.img}
				location="Desert king"
				price="1MBT per night"
				distance="2345km away"
				availability="available for 2weeks stay"
			/>
		);
	});
	return (
		<div className="places-main-container mt-[5rem] md:mt-[7rem]">
			<LocationNavbar />
			<div className="place-container pb-8 pt-[3rem] md:pb-[5rem]">
				<div className="places px-3 flex flex-col gap-6 md:px-0 md:flex-row md:flex-wrap md:justify-between md:w-[90%] md:mx-auto lg:w-[87%] xl:w-[80%] lg:gap-0">
					{places}
				</div>
			</div>
		</div>
	);
};

export default places;
