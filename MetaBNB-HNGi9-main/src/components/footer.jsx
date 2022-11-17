import React from "react";

const footer = () => {
	return (
		<footer className="bg-black">
			<div className="text-white py-9 px-5 md:flex md:justify-between md:w-[90%] md:mx-auto md:px-0 md:pt-[3.875rem] lg:w-[81.5%] xl:w-[78%]">
				<div className="footer-logo-w-social-links md:flex md:flex-col md:justify-between">
					<a href="/" className="footer-logo mb-7 block md:mb-0">
						<img src="./images/logo-white.svg" alt="" className="mr-auto md:w-[74%] md:mx-0 lg:w-[82%]" />
					</a>
					<div className="footer-social-links-w-copyright hidden md:flex md:flex-col md:gap-14">
						<div className="footer-social-links flex md:gap-9">
							<a href="" className="footer-social-link">
								<img src="./icons/facebook.svg" alt="" className="" />
							</a>
							<a href="" className="footer-social-link">
								<img src="./icons/instagram.svg" alt="" className="" />
							</a>
							<a href="" className="footer-social-link">
								<img src="./icons/twitter.svg" alt="" className="" />
							</a>
						</div>
						<div className="footer-copyright text-[#F7F7F7]">
							<p>&copy; 2022 Metabnb</p>
						</div>
					</div>
				</div>
				<div className="footer-links flex flex-col justify-between mb-7 gap-8 md:flex-row md:gap-0 md:w-[56%] md:text-left lg:translate-x-[-4rem]">
					<div className="footer-links__community flex flex-col text-[0.85rem] md:text-[0.875rem]">
						<h2 className="footer-links__community-heading text-lg font-bold mb-4 md:mb-[1.275rem] md:text-[1.125rem]">
							Community
						</h2>
						<div className="space-y-3 flex flex-col">
							<a href="" className="footer-links__community-link text-[#F1F3F9]">
								NFT
							</a>
							<a href="" className="footer-links__community-link text-[#F1F3F9]">
								Tokens
							</a>
							<a href="" className="footer-links__community-link text-[#F1F3F9]">
								Landlords
							</a>
							<a href="" className="footer-links__community-link text-[#F1F3F9]">
								Discord
							</a>
						</div>
					</div>
					<div className="footer-links__places flex flex-col text-[0.85rem] md:text-[0.875rem]">
						<h2 className="footer-links__places-heading text-lg font-bold mb-4 md:mb-[1.275rem] md:text-[1.125rem]">
							Places
						</h2>
						<div className="flex flex-col space-y-3">
							<a href="" className="footer-links__places-link text-[#F1F3F9]">
								Castle
							</a>
							<a href="" className="footer-links__places-link text-[#F1F3F9]">
								Farms
							</a>
							<a href="" className="footer-links__places-link text-[#F1F3F9]">
								Beach
							</a>
							<a href="" className="footer-links__places-link text-[#F1F3F9]">
								Learn more
							</a>
						</div>
					</div>
					<div className="footer-links__about-us flex flex-col text-[0.85rem] md:text-[0.875rem]">
						<h2 className="footer-links__about-us-heading text-lg font-bold mb-4 md:mb-[1.275rem] md:text-[1.125rem]">
							About-us
						</h2>
						<div className="flex flex-col space-y-3">
							<a href="" className="footer-links__about-us-link text-[#F1F3F9]">
								Road map
							</a>
							<a href="" className="footer-links__about-us-link text-[#F1F3F9]">
								Creators
							</a>
							<a href="" className="footer-links__about-us-link text-[#F1F3F9]">
								Careers
							</a>
							<a href="" className="footer-links__about-us-link text-[#F1F3F9]">
								Contact us
							</a>
						</div>
					</div>
				</div>
				<div className="footer-social-links__mobile flex flex-col gap-3 mt-7 md:hidden">
					<div className="footer-social-links flex gap-5">
						<a href="" className="footer-social-link">
							<img src="./icons/facebook.svg" alt="" className="" />
						</a>
						<a href="" className="footer-social-link">
							<img src="./icons/instagram.svg" alt="" className="" />
						</a>
						<a href="" className="footer-social-link">
							<img src="./icons/twitter.svg" alt="" className="" />
						</a>
					</div>
					<div className="footer-copyright">
						<p>&copy; 2022 Metabnb</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default footer;
