"use client";
import React from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { CarosuelControllers } from "@/app/components/custom/carosuel/carosuel-controllers";
import { CarouselIndicator } from "@/app/components/custom/carosuel/carosuel-indicator";
import { MAIN_BANNER_IMAGES } from "@/app/constants/mainBannerImages";
export const MainCarosuel: React.FC = () => {
	return (
		<CarouselProvider
			isIntrinsicHeight
			isPlaying
			infinite
			interval={4000}
			naturalSlideWidth={100}
			naturalSlideHeight={50}
			totalSlides={MAIN_BANNER_IMAGES.length}
		>
			<Slider className="absolute -z-10 w-screen">
				{MAIN_BANNER_IMAGES.map((bannerImage, index: number) => (
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
			<CarouselIndicator items={MAIN_BANNER_IMAGES.length} />
		</CarouselProvider>
	);
};
