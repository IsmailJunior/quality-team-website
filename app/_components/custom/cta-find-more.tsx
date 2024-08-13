"use client";
import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Button } from "@/app/_components/ui/button";
import { CTA_IMAGES } from "@/app/_constants/cta";
export const CTAFindMore: FC = () => {
	const { t } = useTranslation();
	return (
		<div className="flex items-center justify-between w-full py-28 lg:py-0">
			<Image
				unoptimized
				className="hidden lg:block"
				src={CTA_IMAGES.BEHIND_THE_SCENE_TWO_CAMERA_MEN}
				width={800}
				height={800}
				alt="Singer"
			/>
			<div className="flex flex-col justify-center items-center mx-auto px-5 space-y-5">
				<h1 className="text-4xl text-center">
					{t("common:widgets.second_cta.title")}
				</h1>
				<Link href="/about-us">
					<Button size="lg" variant="outline">
						{t("common:widgets.second_cta.description")}
					</Button>
				</Link>
			</div>
		</div>
	);
};
