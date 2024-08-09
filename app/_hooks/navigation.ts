'use client';
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export const useNavigation = () =>
{
	const [isOpen, setIsOpen] = useState(false);
	const [isMinWidthMedium, setIsMinWidthMedium] = useState(false);
	const mediaQuery = useMediaQuery({ query: `(max-width: 1000px)` });
	const onMenuClicked = () => {
		isOpen ? setIsOpen(false) : setIsOpen(true);
	};
	const resetMenu = () => {
		setIsOpen(false);
	};

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		if (scrollPosition > 0) {
			resetMenu();
		}
	};
	useEffect(() => {
		if (mediaQuery !== isMinWidthMedium) {
			setIsMinWidthMedium(mediaQuery);
		}
		if (isMinWidthMedium) {
			resetMenu();
		}
		handleScroll();
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [ mediaQuery, isMinWidthMedium ] );
	return {
		isOpen, 
		resetMenu,
		onMenuClicked
	}
}