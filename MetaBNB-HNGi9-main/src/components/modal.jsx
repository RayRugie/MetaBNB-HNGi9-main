import React from "react";

const modal = ({ setShowModal }) => {
	return (
		<div className="modal-main-container">
			<div
				className="modal-container bg-modal fixed top-0 h-screen w-full z-40 flex justify-center items-center"
				onClick={setShowModal}
			>
				<div className="modal p-4 md:p-8 bg-white w-[93%] z-1 rounded-2xl flex flex-col gap-14 md:w-[60%] lg:w-[55%] xl:w-[33%]">
					<div className="modal-header flex justify-between">
						<h2 className="modal-heading font-bold text-lg md:text-2xl">Connect Wallet</h2>
						<img onClick={setShowModal} src="./icons/close.svg" alt="close icon" className="cursor-pointer" />
					</div>
					<div className="flex flex-col gap-4">
						<p className="modal-subtitle text-sm md:text-base">Choose your preferred wallet:</p>
						<div className="metamask-container py-3 px-6 flex justify-between">
							<div className="metamask flex gap-4 items-center">
								<img className="metamask-img" src="./icons/metamask.svg" alt="metamask logo" />
								<a href="" className="metamask-text font-semibold md:text-lg">
									Metamask
								</a>
							</div>
							<a href="" className="">
								<img src="./icons/down chevron.svg" alt="right chevron" className="" />
							</a>
						</div>
						<div className="walletconnect-container py-3 px-6 flex justify-between">
							<div className="Wallet-connect flex gap-4 items-center">
								<img className="WalletConnect-img" src="./icons/WalletConnect.svg" alt="WalletConnect logo" />
								<a href="" className="wallet-connect-text font-semibold md:text-lg">
									WalletConnect
								</a>
							</div>
							<a href="" className="">
								<img src="./icons/down chevron.svg" alt="right chevron" className="" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default modal;
