import type { FC } from "react";
import { NumberTicker } from "@/app/_components/magicui/number-ticker";

type staticsTickerType = {
	value: number;
	label: string;
};

export const StaticsTicker: FC<staticsTickerType> = ({ value, label }) => {
	return (
		<div className="flex flex-col items-center md:w-24 rtl:ml-4 ltr:mr-4">
			<p className="whitespace-pre-wrap text-xl md:text-4xl tracking-tighter font-semibold">
				<NumberTicker value={value} />
			</p>
			<p className="text-sm font-semibold">{label}</p>
		</div>
	);
};
