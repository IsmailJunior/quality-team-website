"use client";
import type { FC } from "react";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { ImageViewer } from "@/app/components/custom/mobile/image-viewer/image-viewer";
import { TeamViewer } from "@/app/components/custom/team-viewer";

export const AboutUs: FC = () => {
	const [isMinWidthMedium, setIsMinWidthMedium] = useState(false);
	const mediaQuery = useMediaQuery({ query: `(max-width: 1000px)` });
	useEffect(() => {
		if (mediaQuery !== isMinWidthMedium) {
			setIsMinWidthMedium(mediaQuery);
		}
	}, [mediaQuery, isMinWidthMedium]);
	return (
		<div className="text-white">
			{isMinWidthMedium ? (
				<ImageViewer />
			) : (
				<TeamViewer locale={undefined} />
			)}
		</div>
	);
};
