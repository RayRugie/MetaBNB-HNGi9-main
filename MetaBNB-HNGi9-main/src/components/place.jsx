import React from "react";

function place(props) {
	const getLocalStorage = () => {
		let data = localStorage.getItem("isFavorite");
		if (data) {
			return JSON.parse(localStorage.getItem("isFavorite"));
		} else {
			return false;
		}
	};
	const [isFavorite, setIsFavorite] = React.useState(false);

	React.useEffect(() => {
		localStorage.setItem("isFavorite", JSON.stringify(isFavorite));
	}, [isFavorite]);
	

	return (
		<div className="place-container p-4 space-y-[10px] text-[0.89rem] border-2 shadow-md rounded-[14px] md:w-[48%] lg:text-[0.75rem] lg:w-[24%] lg:gap-6">
			<div className="place-img relative">
				<img src={props.img} alt="" className="w-full" />
				<div
					className="heart absolute top-[5%] right-[5%] cursor-pointer"
					onClick={() => setIsFavorite((prevState) => !prevState)}
				>
					<svg width="24" height="24" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9.59964 2.62953L10 3.16466L10.4004 2.62953C11.3204 1.39974 12.7949 0.600006 14.44 0.600006C17.2315 0.600006 19.5 2.87381 19.5 5.69001C19.5 6.82563 19.3189 7.87375 19.0043 8.84609L19.0032 8.84935C18.249 11.2361 16.7035 13.1596 15.0354 14.5933C13.365 16.0289 11.6004 16.9483 10.4589 17.3367L10.4589 17.3366L10.4536 17.3385C10.3537 17.3737 10.1893 17.4 10 17.4C9.81075 17.4 9.64625 17.3737 9.54641 17.3385L9.54642 17.3385L9.54106 17.3367C8.3996 16.9483 6.635 16.0289 4.96465 14.5933C3.29649 13.1596 1.75096 11.2361 0.996763 8.84935L0.996774 8.84935L0.995722 8.8461C0.681141 7.87375 0.5 6.82563 0.5 5.69001C0.5 2.87381 2.76848 0.600006 5.56 0.600006C7.2051 0.600006 8.67958 1.39974 9.59964 2.62953Z"
							fill={isFavorite ? "red" : "#D7D7D7"}
							stroke={isFavorite ? "red" : "url(#paint0_linear_5163_349)"}
						/>
						<defs>
							<linearGradient
								id="paint0_linear_5163_349"
								x1="10"
								y1="17.9"
								x2="10"
								y2="0.100006"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#1D0E3D" />
								<stop offset="1" stopColor="#0F051D" />
							</linearGradient>
						</defs>
					</svg>
				</div>
			</div>

			<div className="row1 flex justify-between">
				<p className="left">{props.location}</p>
				<p className="right font-bold">{props.price} </p>
			</div>
			<div className="row2 flex justify-between">
				<p className="left text-left">{props.distance} </p>
				<p className="right font-bold text-right">{props.availability}</p>
			</div>
			<div className="star">
				<img src="./icons/place-stars.svg" alt="" className="stars w-[30%]" />
			</div>
		</div>
	);
}

export default place;
