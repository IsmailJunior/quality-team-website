import type { FC } from "react";
import type { profileType } from "@/app/_types/homePage.type";

export const Profile: FC<profileType> = ({ image }) => {
	return (
		<div className="md:h-96">
			<div
				className="bg-no-repeat bg-center bg-cover transition-all duration-300 rounded-full h-56 min-w-32 max-w-56 cursor-pointer"
				style={{ backgroundImage: `url(${image})` }}
			/>
		</div>
	);
};
