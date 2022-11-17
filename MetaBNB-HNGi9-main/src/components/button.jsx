import React from "react";
import { Link } from "react-router-dom";


const button = ({openModal}) => {
	return (
		<div className="">
				<button onClick={openModal} className="py-3 px-6 bg-buttonColor text-white rounded-[10px]">
					Connect wallet
				</button>
		</div>
	);
};

export default button;
