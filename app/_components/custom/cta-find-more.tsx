import type { FC } from "react";
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import { CTA_IMAGES } from "@/app/_constants/cta";
export const CTAFindMore: FC = () => {
	return (
		<div className="flex items-center justify-between w-full py-28 lg:py-0">
			<Image
				className="hidden lg:block"
				src={CTA_IMAGES.BEHIND_THE_SCENE_TWO_CAMERA_MEN}
				width={800}
				height={800}
				alt="Singer"
			/>
			<div className="flex flex-col mx-auto px-5 space-y-5">
				<h1>+1,000 Reviews</h1>
				<h1 className="text-4xl">AWARD WINNING AGENCY</h1>
				<Button size="lg" variant="outline">
					Advertise your bussiness
				</Button>
			</div>
		</div>
	);
};
