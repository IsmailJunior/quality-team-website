"use client";
import React from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import {
	CarouselProvider,
	Slider,
	Slide,
	DotGroup,
	ButtonNext,
	ButtonBack,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { cn } from "@/app/lib/utils";
import bannerImageOne from "@/public/static/Game-of-Thrones.jpeg";
import bannerImageTwo from "@/public/static/Got.jpeg";
import bannerImageThree from "@/public/static/Stark.jpeg";
import bannerImageFour from "@/public/static/GotThrones.jpeg";
import bannerImageFive from "@/public/static/Elon.jpeg";
export const MainCarosuel: React.FC = () => {
	const bannerImages = [
		bannerImageOne,
		bannerImageTwo,
		bannerImageThree,
		bannerImageFour,
		bannerImageFive,
	];
	return (
		<CarouselProvider
			isPlaying
			isIntrinsicHeight
			naturalSlideWidth={100}
			naturalSlideHeight={50}
			totalSlides={bannerImages.length}
			interval={4000}
			infinite
			dragEnabled={false}
			touchEnabled={false}
		>
			<Slider className="absolute -z-10 w-screen">
				{bannerImages.map((bannerImage, index: number) => (
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
			<DotGroup
				dotNumbers
				className="flex absolute left-1/2 -translate-x-1/2 mt-2"
				renderDots={({ currentSlide }) => {
					{
						return bannerImages.map((_, index) => (
							<span
								key={index}
								className={cn(
									"h-3 w-3 rounded-full rtl:ml-2 ltr:mr-2",
									currentSlide === index
										? "bg-black"
										: "bg-slate-400"
								)}
							/>
						));
					}
				}}
			/>
			<div className="space-x-4 mx-5">
				<ButtonBack>
					<MoveLeft />
				</ButtonBack>
				<ButtonNext>
					<MoveRight />
				</ButtonNext>
			</div>
		</CarouselProvider>
	);
};
