import type { FC } from "react";
import Image from "next/image";
import { LOGO } from "@/app/_constants/logo";

export const Logo: FC = () => {
	return (
		<Image unoptimized src={LOGO.src} alt="Logo" height={150} width={150} />
	);
};
