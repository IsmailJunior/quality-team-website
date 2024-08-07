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
				light
				muted
				url="https://player.vimeo.com/video/938788460"
			/>
			<source
				src="https://player.vimeo.com/video/938788460"
				type="video/mp4"
			/>
		</section>
	);
};

export default Hero;
