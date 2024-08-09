import type { FC } from "react";
import type { profileType } from "@/app/_types/home-page.type";
import Image from "next/image";

export const Profile: FC<profileType> = ({ image }) => {
	return (
		<div className="md:h-96 md:w-[380px]">
			<Image src={image} height={500} width={500} alt="Image" />
		</div>
	);
};
