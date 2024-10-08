import type { FC } from "react";
import Image from "next/image";
import { LOGO } from "@/app/_constants/logo";

export const Logo: FC = () => {
	return (
		<Image
			src={LOGO.src}
			alt="Logo of QualityTeam"
			height={150}
			width={150}
		/>
	);
};
