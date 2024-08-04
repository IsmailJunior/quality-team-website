import type { FC } from "react";
import Image from "next/image";
import { BlurFade } from "@/app/_components/magicui/blur-fade";

const images = Array.from({ length: 24 }, (_, i) => {
	const isLandscape = i % 2 === 0;
	const width = isLandscape ? 800 : 600;
	const height = isLandscape ? 600 : 800;
	return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
});

export const Galary: FC = () => {
	return (
		<div className="grid grid-cols-3 md:grid-cols-6 gap-2 pt-24 edge">
			{images.map((imageUrl, idx) => (
				<BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
					<Image
						className="mb-4 w-80 rounded-lg"
						src={imageUrl}
						alt={`Random stock image ${idx + 1}`}
						width={150}
						height={150}
					/>
				</BlurFade>
			))}
		</div>
	);
};
