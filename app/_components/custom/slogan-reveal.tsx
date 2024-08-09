import type { FC } from "react";
import TextReveal from "@/app/_components/magicui/text-reveal";

export const SloganReveal: FC = () => {
	return (
		<div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg border bg-white dark:bg-black">
			<TextReveal text="Magic UI will change the way you design." />
		</div>
	);
};
