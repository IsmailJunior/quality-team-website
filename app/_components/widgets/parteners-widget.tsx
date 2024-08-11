import type { FC } from "react";
import { Parteners } from "@/app/_components/custom/parteners";

export const PartenersWidget: FC = () => {
	return (
		<section className="h-[500px] text-white text-center mb-56">
			<h1 className="text-6xl mb-6">شركائنا</h1>
			<Parteners />
		</section>
	);
};
