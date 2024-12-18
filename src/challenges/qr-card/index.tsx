import qrImage from "./images/image-qr-code.png?url";

export default function QrCard() {
	return (
		<main className="bg-[#d6e2f0] font-outfit flex justify-center items-center min-h-screen">
			<div className="w-[315px] bg-white rounded-[20px] p-6 shadow transition-shadow hover:shadow-lg">
				<a href="https://github.com/mrLuisFer" target="_blank" rel="noreferrer noopener">
					<img
						src={qrImage}
						alt="QR Code"
						draggable="false"
						className="w-full rounded-[15px] object-cover"
					/>
				</a>
				<h1 className="text-xl text-center mt-8 text-[--qr-dark-blue]">
					<a
						href="https://www.frontendmentor.io/challenges"
						target="_blank"
						rel="noreferrer noopener"
						className="font-semibold text-inherit hover:text-black"
					>
						Improve your front-end skills by building projects
					</a>
				</h1>
				<p className="text-center text-[--qr-grayish-blue] text-base w-[250px] mx-auto leading-6 font-normal mt-2.5">
					Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
				</p>
			</div>
		</main>
	);
}
