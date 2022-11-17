import React from "react";
import Place from "./place";

import imagesUrls from "../images.jsx";
import "../App.css";

const Home = () => {
	const places = imagesUrls.map((item) => {
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
		<div className={`main-container text-center md:text-left inset-0`}>
			<section className="hero-section flex flex-col gap-7 pb-7 mt-[6rem] md:pb-[4.1875rem] md:flex-row md:items-center md:justify-between md:w-[90%] md:mx-auto lg:w-[87%] xl:w-[80%] md:mt-[7.5rem]">
				<div className="r-side px-4 flex flex-col gap-4 md:w-[70%] md:px-0 lg:gap-[3rem] lg:w-[60%] xl:w-[48%]">
					<div className="text-content">
						<h2 className="hero-heading font-bold text-[1.7rem] leading-[1.06] mb-5 md:mb-[2.6rem] lg:text-4xl lg:leading-[1.4] xl:text-[3rem]">
							Rent a <span className="text-meta">Place</span> away from <span className="text-meta">Home</span> in the
							<span className="text-meta">Metaverse</span>
						</h2>
						<p className="text-base lg:text-[1.2rem] lg:leading-7 xl:text-[1.5rem] xl:leading-9">
							We provide you access to luxury and affordable houses in the Metaverse, get a chance to turn your
							imagination to reality at your comfort zone.
						</p>
					</div>
					<div className="input-field flex md:justify-start md:w-[92%] xl:w-[85%]">
						<input
							type="text"
							className="border-[#A3A3A3] border-[1px] p-[0.4rem] px-[0.5rem] border-solid w-[66%] rounded-tl-[4px] rounded-bl-[4px] lg:p-[0.7rem]"
							placeholder="Search for location"
						/>
						<button className=" bg-buttonColor text-white py-[0.4rem] w-[35%] rounded-tr-[4px] rounded-br-[4px]">
							Search
						</button>
					</div>
				</div>
				<div className="l-side ">
					<img
						src="./images/hero-img.png"
						alt=""
						className=" w-[80%] mx-auto md:mx-0 md:w-[84%] md:ml-auto lg:w-[95%] xl:w-[100%]"
					/>
				</div>
			</section>
			<div className="clients  bg-buttonColor">
				<div className="images py-2 flex justify-center gap-[3rem] md:animate-none md:translate-x-0 md:justify-between md:px-16 lg:w-[80%] lg:mx-auto lg:px-0">
					<img src="./images/brand-mbtoken.svg" alt="" className="w-[22%] md:w-[22%] lg:w-[16.5%]" />
					<img src="./images/brand-metamask.svg" alt="" className="w-[22%] md:w-[22%] lg:w-[16.5%]" />
					<img src="./images/brand-opensea.svg" alt="" className="w-[22%] md:w-[22%] lg:w-[16.5%]" />
				</div>
			</div>
			<section className="places-container py-14 md:w-[90%] md:mx-auto lg:w-[87%] xl:w-[83%]">
				<h2 className="places-heading font-bold text-[1.3rem] mb-6 md:text-center md:text-[2rem] lg:text-[2.5rem] lg:leading-[43px]">
					Inspiration for your next adventure
				</h2>
				<div className="places px-5 flex flex-col gap-6 md:px-0 md:flex-row md:flex-wrap md:justify-between lg:gap-0">
					{places}
				</div>
			</section>
			<section className="about-metaverse  bg-buttonColor p-10 text-white flex flex-col md:p-[6.3rem] md:flex-row md:justify-between md:items-center lg:px-0">
				<div className="flex flex-col gap-10 md:flex-row md:justify-between md:items-center lg:w-[87%] lg:mx-auto lg:justify-between xl:w-[80%]">
					<div className="r-side md:w-[50%] xl:w-[35%]">
						<div className="text-content space-y-7 text-[0.875rem] lg:space-y-12">
							<h2 className="about-metaverse__heading text-[1.85rem] font-bold lg:text-[3rem]">Metabnb NFTs</h2>
							<p className="about-metaverse__copy md:text-base md:leading-6 lg:text-[1.13rem] lg:leading-8">
								Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as
								NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
							</p>
							<a
								href="/nfts"
								className="about-metaverse__link text-meta bg-white py-3 px-8 rounded-[8px] inline-block md:text-base"
							>
								Learn more
							</a>
						</div>
					</div>
					<div className="l-side hidden md:block md:w-[48%] xl:w-[56%]">
						<img src="./images/about-img.svg" alt="" className="about-metaverse__img  md:w-[fit-content]" />
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
