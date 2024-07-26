"use client";
import { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import Slider from "react-slick";
import { ChevronUp, ChevronDown } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MAIN_BANNER_IMAGES } from '@/app/constants/mainBannerImages';

export const VerticalCarosuel = () =>
{
	const settings = {
		dots: false,
		infinite: true,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000
	};
	const [ element, setElement ] = useState( null );
	const [ selector, setSelector ] = useState( null );
	let elementRef = useRef();
	let selectorRef = useRef();
	const next = () =>
	{
		elementRef.slickNext();
	};
	const prev = () =>
	{
		elementRef.slickPrev();
	};
	useEffect( () =>
	{
		setElement( elementRef );
		setSelector( selectorRef );
	}, [] );
	return (
		<div className="flex">
			<div style={ { width: 200 } } className="flex flex-col">
				<button className="flex justify-center" onClick={ prev }>
					<ChevronUp />
				</button>
				<Slider
					arrows={ false }
					asNavFor={ element }
					ref={ slider => ( selectorRef = slider ) }
					slidesToShow={ 3 }
					swipeToSlide={ true }
					focusOnSelect={ true }
					vertical
					autoplay
					autoplaySpeed={ 3000 }
				>
					{ MAIN_BANNER_IMAGES.map( ( image, index ) => (
						<button key={ index }>
							<Image src={ image.src } alt="Background Image" width={ 200 } height={ image.height } />
						</button>
					) ) }
				</Slider>
				<button className="flex justify-center" onClick={ next }>
					<ChevronDown />
				</button>
			</div>
			<div style={ { width: 500 } }>
				<Slider
					asNavFor={ selector }
					ref={ slider => ( elementRef = slider ) }
					{ ...settings }
				>
					{ MAIN_BANNER_IMAGES.map( ( image, index ) => (
						<div key={ index } className="relative overflow-hidden">
							<Image src={ image.src } alt="Background Image" layout="cover" width={ 500 } height={ 300 } />
						</div>
					) ) }
				</Slider>
			</div>
		</div >
	);
};
