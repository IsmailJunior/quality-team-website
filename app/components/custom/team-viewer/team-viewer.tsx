"use client";
import type { FC } from "react";
import { Switcher } from "@/app/components/custom/team-viewer/switcher";
import { Profile } from "@/app/components/custom/team-viewer/profile";
import { TEAM } from "@/app/constants/team";

type elementType = {
	thumnail: string;
	picture: string;
	title: string;
	description: string;
};

export const TeamViewer: FC = () => {
	const DATA: elementType[] = [
		{
			thumnail: TEAM.EMILIA_CLARKE.src,
			picture: "",
			title: "Emilia Clarke",
			description:
				"Emilia Isobel Euphemia Rose Clarke (born October 23, 1986) is a British actress, best known for her portrayal as Daenerys Targaryen in Game of Thrones. She has received various accolades, including an Empire Award, a Saturn Award and four Primetime Emmy Award nominations. In 2019, Time magazine named Clarke one of the 100 most influential people in the world.",
		},
		{
			thumnail: TEAM.KIKOLAJ_COSTER_WALDAU.src,
			picture: "",
			title: "Nikolaj Coster-Waldau",
			description:
				"Nikolaj William Coster-Waldau (born 27 July 1970) is a Danish actor and producer. He graduated from the Danish National School of Performing Arts in Copenhagen in 1993, and had his breakthrough role in Denmark with the film Nightwatch (1994). He played Jaime Lannister in the HBO fantasy drama series Game of Thrones, for which he received two Primetime Emmy Award nominations for Outstanding Supporting Actor in a Drama Series.",
		},
		{
			thumnail: TEAM.KIT_HARINGTON.src,
			picture: "",
			title: "",
			description:
				"Christopher Catesby 'Kit' Harington (born December 26, 1986) is an English actor. He is known for his role as Jon Snow in the HBO fantasy television series Game of Thrones (2011–2019), for which he received nominations for a Golden Globe Award and two Primetime Emmy Awards.",
		},
		{
			thumnail: TEAM.PETER_DINKLAGE.src,
			picture: "",
			title: "Kit Harington",
			description:
				"Peter Dinklage is an American actor. Since his breakout role in The Station Agent (2003), he has appeared in numerous films and theatre plays. Since 2011, Dinklage has portrayed Tyrion Lannister in the HBO series Game of Thrones. For this he won an Emmy for Outstanding Supporting Actor in a Drama Series and a Golden Globe Award for Best Supporting Actor - Series, Miniseries or Television Film in 2011. Peter Hayden Dinklage was born in Morristown, New Jersey,",
		},
	];
	return (
		<div className="flex flex-col-reverse md:flex-row md:justify-between mx-auto w-full max-w-2xl">
			<Switcher data={DATA} />
			<Profile image={DATA[0].thumnail} />
		</div>
	);
};
