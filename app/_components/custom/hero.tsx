"use client";
import type { FC } from "react";
import ReactPlayer from "react-player";

const Hero: FC = () => {
	return (
		<section className="absolute -top-56 flex justify-center items-center w-screen lg:top-0 lg:relative">
			<ReactPlayer
				width="120vw"
				height="120vh"
				loop
				playing
				muted
				url="https://vimeo.com/995906418"
			/>
			<source src="https://vimeo.com/995906418" type="video/mp4" />
		</section>
	);
};

export default Hero;
