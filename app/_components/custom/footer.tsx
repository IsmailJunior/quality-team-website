import type { FC } from "react";
import { FOOTER_BACKGROUND } from "@/app/_constants/footer";
export const Footer: FC = () => {
	return (
		<footer
			className="h-[750px] bg-center bg-cover bg-no-repeat"
			style={{ backgroundImage: `url(${FOOTER_BACKGROUND.src})` }}
		>
			<ul>
				<li>Terms</li>
				<li>Terms</li>
				<li>Terms</li>
				<li>Terms</li>
			</ul>
		</footer>
	);
};
