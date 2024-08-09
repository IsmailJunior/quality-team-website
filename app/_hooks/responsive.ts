'use client';
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";


export const useResponsive = () =>
{
	const [isMinWidthMedium, setIsMinWidthMedium] = useState(false);
	const mediaQuery = useMediaQuery({ query: `(max-width: 900px)` });
	useEffect(() => {
		if (mediaQuery !== isMinWidthMedium) {
			setIsMinWidthMedium(mediaQuery);
		}
	}, [ isMinWidthMedium, mediaQuery ] );
	return {
		isMinWidthMedium
	}
}