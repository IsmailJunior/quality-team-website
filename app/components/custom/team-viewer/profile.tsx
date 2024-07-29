import type { FC } from "react";

type profileType = {
	image: string | undefined;
};

export const Profile: FC<profileType> = ({ image }) => {
	return (
		<div className="md:h-96 md:w-[400px]">
			<div
				className="bg-no-repeat bg-center bg-cover transition-all duration-300 rounded-full h-56 min-w-32 max-w-56 md:max-w-72 md:max-h-72 md:h-96 md:w-96 cursor-pointer"
				style={{ backgroundImage: `url(${image})` }}
			/>
		</div>
	);
};
