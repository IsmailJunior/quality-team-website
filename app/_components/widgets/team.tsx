"use client";
import type { FC } from "react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { TeamViewer } from "@/app/_components/custom/team-viewer/desktop/team-viewer-desktop";
import { TeamViewerMobile } from "@/app/_components/custom/team-viewer/mobile/team-viewer-mobile";

export const Team: FC = () => {
	const { t } = useTranslation();
	const [isMinWidthMedium, setIsMinWidthMedium] = useState(false);
	const mediaQuery = useMediaQuery({ query: `(max-width: 900px)` });
	useEffect(() => {
		if (mediaQuery !== isMinWidthMedium) {
			setIsMinWidthMedium(mediaQuery);
		}
	}, [isMinWidthMedium, mediaQuery]);
	return (
		<section className="h-[750px] bg-zinc-950">
			<h1 className="text-white text-4xl text-center mt-12 left-1/2 -translate-x-1/2 absolute">
				{t("crew.headline")}
			</h1>
			{isMinWidthMedium ? <TeamViewerMobile /> : <TeamViewer />}
		</section>
	);
};
