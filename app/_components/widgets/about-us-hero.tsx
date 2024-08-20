import type { FC } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { AboutUsHero } from "@/app/_components/custom/about-us-hero";
export const AboutUsHeroWidget: FC = () => {
	return (
		<section className="h-[730px] flex flex-col justify-center items-center">
			<AboutUsHero />
			<Link href="#contact">
				<ChevronDown color="white" size={50} className="mt-14" />
			</Link>
		</section>
	);
};
