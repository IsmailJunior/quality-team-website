"use client";
import type { FC } from "react";
import { useState } from "react";
import { cn } from "@/app/lib/utils";
import { CAST_IMAGES } from "@/app/constants/castImagesMobile";
export const ImageViewer: FC = () => {
	const [currentBackground, setCurrentBackground] = useState(CAST_IMAGES[1]);
	const [currentIndex, setCurrentIndex] = useState(
		CAST_IMAGES.indexOf(CAST_IMAGES[1])
	);
	const handleSetBackground = (index: number) => {
		setCurrentBackground(CAST_IMAGES[index]);
		setCurrentIndex(index);
	};
	return (
		<div
			className="w-screen h-svh bg-center bg-no-repeat bg-cover transition-all duration-300"
			style={{ backgroundImage: `url(${currentBackground.src})` }}
		>
			<div className="flex flex-col h-screen justify-between items-center py-12 space-y-24">
				<h1 className="text-4xl">Cast & Crew</h1>
				<div className=" max-w-2xl min-w-32 px-5">
					<h1 className="text-5xl font-medium mb-2">Ismail Salah</h1>
					<p className="text-wrap">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Inventore, delectus beatae natus suscipit amet
						dicta aspernatur mollitia perferendis consequatur iusto
						odit, quo doloremque? Odio optio qui ducimus aut sint
						beatae. Assumenda, placeat vel debitis excepturi ducimus
						libero reprehenderit optio quasi iste distinctio magni
						ad minima totam omnis unde? Repellendus facere rem
						molestias eligendi totam tempora quo ad odio sed
						mollitia. Nihil quam delectus temporibus dolorum. Ex
						eius veniam tenetur ut. Explicabo impedit error in ipsa
						doloremque deleniti sunt sit assumenda quibusdam
						laborum, recusandae cupiditate, repudiandae quas, atque
						temporibus possimus? Eligendi.
					</p>
				</div>
				<div className="flex justify-center">
					{CAST_IMAGES.map((image, index: number) => (
						<div
							onClick={() => handleSetBackground(index)}
							key={index}
							className={cn(
								"mx-5 h-14 transition-all w-14 bg-cover bg-no-repeat bg-center rounded-full cursor-pointer",
								currentIndex === index
									? "grayscale-0"
									: "grayscale"
							)}
							style={{ backgroundImage: `url(${image.src})` }}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
