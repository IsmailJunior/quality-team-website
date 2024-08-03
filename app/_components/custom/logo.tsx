import type { FC } from "react";
import Image from "next/image";
import { LOGO } from "@/app/_constants/logo";

export const Logo: FC = () => {
	return (
		<Image
			className="absolute left-14 top-16"
			src={LOGO.src}
			alt="Logo"
			height={200}
			width={200}
		/>
	);
};
