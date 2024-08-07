import type { FC } from "react";
import { FOOTER_BACKGROUND } from "@/app/_constants/footer";
export const Footer: FC = () => {
	return (
		<footer
			className="h-[500px] bg-center bg-cover bg-no-repeat text-white"
			style={{ backgroundImage: `url(${FOOTER_BACKGROUND.src})` }}
		>
			<section className="mx-24 space-y-12">
				<h1 className="text-3xl">About us:</h1>
				<p className="text-2xl">
					Quality Team agency
					<br />
					It was officially regesitered in 2023.
					<br />
					Before that, for a period of 8 years, ut was a group of
					professionals in the <br />
					Field of publicly and advertising that provided its clients
					with the best distinctive
					<br />
					experiences and become in a short period one of the most
					prominent
					<br />
					compantes in this field.
				</p>
			</section>
		</footer>
	);
};
