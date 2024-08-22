import type { FC } from "react";
import type { profileType } from "@/app/_types/home-page";
import Image from "next/image";

export const Profile: FC<profileType> = ({ image }) => {
	return (
		<div className="md:h-96 md:w-[380px]">
			<Image
				priority
				src={image}
				height={400}
				width={400}
				alt="Camera man"
			/>
		</div>
	);
};
