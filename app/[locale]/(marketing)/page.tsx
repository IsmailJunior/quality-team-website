import type { NextPage } from "next";
import Image from "next/image";
import { MainBanner } from "@/app/_components/widgets/main-banner";
import { Team } from "@/app/_components/widgets/team";
import { Library } from "@/app/_components/widgets/library";
import { Showcase } from "@/app/_components/widgets/showcase";
import { HERO_STATIC } from "@/app/_constants/hero";

const Home: NextPage<{ params: { locale: any } }> = async ({
	params: { locale },
}) => {
	return (
		<div className="flex flex-col">
			<div className="absolute top-0 right-0 z-10">
				<Image
					src={HERO_STATIC.BRAIN.src}
					alt="Brain"
					height={300}
					width={300}
				/>
			</div>
			<MainBanner locale={locale} />
			<div className="relative">
				<div className="absolute top-0 right-0 hue-rotate-60 z-10">
					<Image
						src={HERO_STATIC.PARTICLES_RIGHT.src}
						alt="Brain"
						height={300}
						width={300}
					/>
				</div>
				<div className="absolute top-0 right-0 hue-rotate-60 z-10">
					<Image
						src={HERO_STATIC.GALAXY.src}
						alt="Brain"
						height={300}
						width={300}
					/>
				</div>
			</div>
			<Team />
			<div className="absolute top-0 left-0 hue-rotate-60">
				<Image
					src={HERO_STATIC.PARTICLES_LEFT_TOP.src}
					alt="Particles"
					height={1000}
					width={1000}
				/>
			</div>
			<Showcase />
			<Library />
		</div>
	);
};

export default Home;
