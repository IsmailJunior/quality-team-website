import type { FC } from "react";
import { BentoGalary } from "@/app/_components/custom/bento-galary";
export const BentoGalaryWidget: FC = () => {
	return (
		<section className="h-full lg:h-[700px] my-24 px-16 container text-white">
			<h1 className="text-3xl text-center lg:text-start lg:text-5xl font-semibold mb-16">
				Behind the scene
			</h1>
			<BentoGalary />
		</section>
	);
};
