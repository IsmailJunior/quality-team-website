import type { FC } from "react";

type profileType = {
	image: string;
};

export const Profile: FC<profileType> = ({ image }) => {
	return (
		<div>
			<div
				className="bg-no-repeat bg-center bg-cover rounded-full h-56 min-w-32 max-w-56 md:max-w-72 md:max-h-72 md:h-96 md:w-96 cursor-pointer"
				style={{ backgroundImage: `url(${image})` }}
			/>
		</div>
	);
};
