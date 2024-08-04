"use client";

import type { FC } from "react";
import { MAIN_BANNER_IMAGES } from "@/app/_constants/carosuelImages";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/app/_components/custom/slider/slider.css";

const slider = [
	{
		title: "Donut 1",
		description:
			"Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
		url: MAIN_BANNER_IMAGES[0].src,
	},
	{
		title: "Donut 2",
		description:
			"Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
		url: MAIN_BANNER_IMAGES[1].src,
	},
	{
		title: "Donut 3",
		description:
			"Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
		url: MAIN_BANNER_IMAGES[2].src,
	},

	{
		title: "Donut 4",
		description:
			"Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
		url: MAIN_BANNER_IMAGES[3].src,
	},
	{
		title: "Donut 5",
		description:
			"Our Donut Collection Offers a Mouthwatering Array of Flavors, Toppings, and Shapes for Every Craving and Occasion.",
		url: MAIN_BANNER_IMAGES[4].src,
	},
];

export const Slider: FC = () => {
	return (
		<div className="carousel-slider">
			<div>
				<div className="carousel-content">
					<span>discover</span>
					<h1>Sweet Donut Heaven</h1>
					<hr />
					<p>
						Our Donut Collection Offers a Mouthwatering Array of
						Flavors, Toppings, and Shapes for Every Craving and
						Occasion.
					</p>
					<a href="#" className="slider-btn">
						GET IN
					</a>
				</div>
			</div>

			<Swiper
				className="swiper"
				modules={[Pagination, EffectCoverflow, Autoplay]}
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					depth: 100,
					modifier: 3,
					slideShadows: true,
				}}
				loop={true}
				pagination={{ clickable: true }}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				breakpoints={{
					640: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 1,
					},
					1024: {
						slidesPerView: 2,
					},
					1560: {
						slidesPerView: 3,
					},
				}}
			>
				{slider.map((elements, index) => (
					<SwiperSlide
						key={index}
						style={{ backgroundImage: `url(${elements.url})` }}
						className="swiper-slider"
					>
						<div>
							<h2>{elements.title}</h2>
							<p>{elements.description}</p>
							<a
								href={`${elements.url}`}
								target="_blank"
								className="slider-btn"
							>
								explore
							</a>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
