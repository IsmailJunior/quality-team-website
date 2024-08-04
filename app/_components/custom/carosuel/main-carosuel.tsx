"use client";
import React from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { CarosuelControllers } from "@/app/_components/custom/carosuel/carosuel-controllers";
import { CarouselIndicator } from "@/app/_components/custom/carosuel/carosuel-indicator";
export const MainCarosuel: React.FC<{ data: { src: string }[] }> = ({
	data,
}) => {
	return (
		<CarouselProvider
			isIntrinsicHeight
			isPlaying
			infinite
			interval={4000}
			naturalSlideWidth={100}
			naturalSlideHeight={50}
			totalSlides={data.length}
			className="absolute left-1/2 -translate-x-1/2 w-full"
		>
			<Slider className="absolute -z-10 w-screen md:w-[93%] mx-auto">
				{data.map((bannerImage, index: number) => (
					<Slide key={index} index={index}>
						<div
							className="bg-no-repeat bg-center bg-cover w-full h-[720px]"
							style={{
								backgroundImage: `url(${bannerImage.src})`,
							}}
						/>
					</Slide>
				))}
			</Slider>
			<CarosuelControllers />
			<CarouselIndicator items={data.length} />
		</CarouselProvider>
	);
};
