"use client";
import type { FC } from "react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { ServiceViewer } from "@/app/_components/custom/service-viewer/desktop/service-viewer-desktop";
import { ServiceViewerMobile } from "@/app/_components/custom/service-viewer/mobile/service-viewer-mobile";
export const Services: FC = () => {
	const { t } = useTranslation();
	const [isMinWidthMedium, setIsMinWidthMedium] = useState(false);
	const mediaQuery = useMediaQuery({ query: `(max-width: 900px)` });
	useEffect(() => {
		if (mediaQuery !== isMinWidthMedium) {
			setIsMinWidthMedium(mediaQuery);
		}
	}, [isMinWidthMedium, mediaQuery]);
	return (
		<section className="h-[750px] bg-center bg-cover bg-no-repeat hue-rotate-60">
			<h1 className="text-white text-4xl text-center mt-12 left-1/2 -translate-x-1/2 absolute">
				{t("services.headline")}
			</h1>
			{isMinWidthMedium ? <ServiceViewerMobile /> : <ServiceViewer />}
		</section>
	);
};
