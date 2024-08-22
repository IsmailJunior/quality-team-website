"use client";
import type { FC } from "react";
import ReactPlayer from "react-player";
import { useResponsive } from "@/app/_hooks/responsive";

const Hero: FC = () => {
	const { isMinWidthMedium } = useResponsive();
	return (
		<>
			{!isMinWidthMedium ? (
				<section className="absolute -top-56 flex justify-center items-center w-screen lg:top-0 lg:relative">
					<ReactPlayer
						width="120vw"
						height="120vh"
						loop
						playing
						muted
						url="https://vimeo.com/995906418"
					/>
					<source
						src="https://vimeo.com/995906418"
						type="video/mp4"
					/>
				</section>
			) : (
				<section className="relative -top-24 flex justify-center items-center w-screen lg:top-0">
					<ReactPlayer
						style={{ position: "absolute" }}
						width="1500px"
						height="120vh"
						loop
						playing
						muted
						url="https://vimeo.com/995906418"
					/>
					<source
						src="https://vimeo.com/995906418"
						type="video/mp4"
					/>
				</section>
			)}
		</>
	);
};

export default Hero;
