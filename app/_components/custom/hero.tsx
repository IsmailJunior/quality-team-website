"use client";
import type { FC } from "react";
import ReactPlayer from "react-player";

const Hero: FC = () => {
	return (
		<section className="absolute -top-56 lg:top-0 lg:relative">
			<ReactPlayer
				width="100vw"
				height="100vh"
				loop
				playing
				muted
				url="https://vimeo.com/995906418?share=copy"
			/>
			<source
				src="https://vimeo.com/995906418?share=copy"
				type="video/mp4"
			/>
		</section>
	);
};

export default Hero;
