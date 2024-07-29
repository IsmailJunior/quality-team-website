"use client";
import type { FC } from "react";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Switcher } from "@/app/components/custom/team-viewer/switcher";
import { Profile } from "@/app/components/custom/team-viewer/profile";
import { Biography } from "@/app/components/custom/team-viewer/biography";
import { TEAM } from "@/app/constants/team";

type elementType = {
	id: number;
	pos: number;
	active: boolean;
	thumnail: string;
	picture: string;
	title: string;
	description: string;
};

const DATA: elementType[] = [
	{
		id: 1,
		pos: 1,
		active: true,
		thumnail: TEAM.EMILIA_CLARKE.src,
		picture: "",
		title: "Emilia Clarke",
		description:
			"Emilia Isobel Euphemia Rose Clarke (born October 23, 1986) is a British actress, best known for her portrayal as Daenerys Targaryen in Game of Thrones. She has received various accolades, including an Empire Award, a Saturn Award and four Primetime Emmy Award nominations. In 2019, Time magazine named Clarke one of the 100 most influential people in the world.",
	},
	{
		id: 2,
		pos: 2,
		active: true,
		thumnail: TEAM.KIKOLAJ_COSTER_WALDAU.src,
		picture: "",
		title: "Nikolaj Coster-Waldau",
		description:
			"Nikolaj William Coster-Waldau (born 27 July 1970) is a Danish actor and producer. He graduated from the Danish National School of Performing Arts in Copenhagen in 1993, and had his breakthrough role in Denmark with the film Nightwatch (1994). He played Jaime Lannister in the HBO fantasy drama series Game of Thrones, for which he received two Primetime Emmy Award nominations for Outstanding Supporting Actor in a Drama Series.",
	},
	{
		id: 3,
		pos: 3,
		active: true,
		thumnail: TEAM.KIT_HARINGTON.src,
		picture: "",
		title: "Kit Harington",
		description:
			"Christopher Catesby 'Kit' Harington (born December 26, 1986) is an English actor. He is known for his role as Jon Snow in the HBO fantasy television series Game of Thrones (2011–2019), for which he received nominations for a Golden Globe Award and two Primetime Emmy Awards.",
	},
	{
		id: 4,
		pos: 4,
		active: true,
		thumnail: TEAM.PETER_DINKLAGE.src,
		picture: "",
		title: "Peter Dinklage",
		description:
			"Peter Dinklage is an American actor. Since his breakout role in The Station Agent (2003), he has appeared in numerous films and theatre plays. Since 2011, Dinklage has portrayed Tyrion Lannister in the HBO series Game of Thrones. For this he won an Emmy for Outstanding Supporting Actor in a Drama Series and a Golden Globe Award for Best Supporting Actor - Series, Miniseries or Television Film in 2011. Peter Hayden Dinklage was born in Morristown, New Jersey,",
	},
	{
		id: 5,
		pos: 5,
		active: true,
		thumnail: TEAM.SOPHIE_TURNER.src,
		picture: "",
		title: "Sophie Turner",
		description:
			"Sophie Belinda Jonas (née Turner; born 21 February 1996) is an English actress. She made her acting debut as Sansa Stark on the HBO epic fantasy television series Game of Thrones (2011–2019), for which she received a Primetime Emmy Award nomination for the Outstanding Supporting Actress in a Drama Series in 2019.",
	},
	{
		id: 6,
		pos: 6,
		active: true,
		thumnail: TEAM.IAIN_GLEN.src,
		picture: "",
		title: "Iain Glen",
		description:
			"Iain Alan Sutherland Glen (born 24 June 1961) is a Scottish actor. Glen is best known for his roles as Dr. Alexander Isaacs/Tyrant in three films of the Resident Evil film series (2004–2016) and as Ser Jorah Mormont in the HBO fantasy television series Game of Thrones (2011–2019). Other notable roles include John Hanning Speke in Mountains of the Moon (1990), Larry Winters in Silent Scream (1990) for which he won the Silver Bear for Best Actor from the Berlin International Film Festival, Manfred Powell in Lara Croft: Tomb Raider (2001), Brother John in Song for a Raggy Boy (2003), the title role in Jack Taylor (2010–2016), Sir Richard Carlisle in Downton Abbey (2011), James Willett in Eye in the Sky (2015), and Bruce Wayne in Titans (2019–present).",
	},
];

export const TeamViewer: FC = () => {
	const [elements, setElements] = useState<elementType[]>(DATA);
	const [currentProfile, setCurrentProfile] = useState(elements.at(1));
	const onProfileClick = (profile: elementType) => {
		setCurrentProfile(profile);
	};
	const onTopChevronClick = () => {
		let prevState = [...elements];
		let nextElementId = prevState
			.filter(element => element.active === true)
			.sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
			.at(0)?.id;
		prevState
			.filter(
				(element: elementType | undefined) => element?.active === false
			)
			.map(element => (element.active = true));
		prevState
			.filter(
				(element: elementType | undefined) =>
					element?.id === nextElementId
			)
			.map(element => (element.active = false));
		prevState
			.filter(
				(element: elementType | undefined) =>
					element?.id === nextElementId
			)
			.map(
				element =>
					(element.pos =
						Math.max.apply(
							null,
							prevState.map(function (o) {
								return o.pos;
							})
						) + 1)
			);
		setElements(prevState);
		if (nextElementId! < elements.length - 1) {
			setCurrentProfile(prevState.at(nextElementId! + 1));
		} else if (nextElementId! === elements.length) {
			nextElementId = 1;
			prevState
				.filter(
					(element: elementType | undefined) =>
						element?.active === false
				)
				.map(element => (element.active = true));
			setCurrentProfile(prevState.at(nextElementId!));
		} else {
			nextElementId = 0;
			prevState
				.filter(
					(element: elementType | undefined) =>
						element?.active === false
				)
				.map(element => (element.active = true));
			setCurrentProfile(prevState.at(nextElementId!));
		}
	};
	return (
		<div className="container flex flex-col items-center space-y-20 mx-auto w-full max-w-4xl">
			<h1 className="text-white text-4xl mt-16">CAST & CREW</h1>
			<div className="flex flex-col-reverse md:flex-row md:justify-between mx-auto w-full max-w-2xl">
				<div className="flex text-white space-y-6 flex-col items-center w-full">
					<button onClick={onTopChevronClick}>
						<ChevronUp />
					</button>
					<Switcher
						data={elements}
						onValueFromChild={async element =>
							onProfileClick(element)
						}
						currentProfile={currentProfile}
					/>
					<button>
						<ChevronDown />
					</button>
				</div>
				<div className="relative">
					<Profile image={currentProfile?.thumnail} />
					<Biography
						title={currentProfile?.title}
						description={currentProfile?.description}
					/>
				</div>
			</div>
		</div>
	);
};
