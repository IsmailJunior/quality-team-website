import type { FC } from "react";

type elementType = {
	thumnail: string;
	picture: string;
	title: string;
	description: string;
};

type dataType = {
	data: elementType[];
};

export const Switcher: FC<dataType> = ({ data }) => {
	return (
		<div className="flex md:flex-col md:space-y-3">
			{data.map(({ thumnail }, index: number) => (
				<div
					key={index}
					className="bg-no-repeat bg-center bg-cover my-12 rounded-full h-20 w-28 min-h-10 min-w-10 md:my-0 md:h-24 md:w-24 cursor-pointer"
					style={{ backgroundImage: `url(${thumnail})` }}
				/>
			))}
		</div>
	);
};
