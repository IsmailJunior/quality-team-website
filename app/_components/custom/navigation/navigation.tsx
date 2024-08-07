"use client";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { Logo } from "@/app/_components/custom/logo";
import { AlignJustify } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isMinWidthMedium, setIsMinWidthMedium] = useState(false);
	const mediaQuery = useMediaQuery({ query: `(max-width: 1000px)` });
	const onMenuClicked = () => {
		isOpen ? setIsOpen(false) : setIsOpen(true);
	};
	const resetMenu = () => {
		setIsOpen(false);
	};

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		if (scrollPosition > 0) {
			resetMenu();
		}
	};
	useEffect(() => {
		if (mediaQuery !== isMinWidthMedium) {
			setIsMinWidthMedium(mediaQuery);
		}
		if (isMinWidthMedium) {
			resetMenu();
		}
		handleScroll();
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [mediaQuery, isMinWidthMedium]);
	return (
		<AnimatePresence>
			<motion.div
				initial={{ height: 100 }}
				animate={{ height: isOpen ? 360 : 100 }}
				exit={{ height: 100 }}
				className="fixed border-b border-slate-500 overflow-hidden w-screen top-0 bg-gradient-to-r z-10 text-slate-100 font-semibold bg-zinc-950 lg:px-16 px-6 flex flex-wrap items-center space-x-6 lg:space-x-0 lg:py-0 pb-10"
			>
				<div className="flex-1 flex justify-between items-center">
					<Link onClick={resetMenu} className="py-5" href="/">
						<Logo />
					</Link>
				</div>
				<button
					onClick={onMenuClicked}
					className="cursor-pointer lg:hidden block p-5 text-xl"
				>
					<AlignJustify />
				</button>
				<div className="flex flex-col justify-center items-center font-normal text-2xl lg:text-base text-center lg:flex lg:items-center lg:w-auto w-full">
					<nav>
						<ul className="lg:flex lg:border items-center space-y-5 lg:space-y-0 justify-between pt-4 lg:pt-0">
							<li>
								<Link
									onClick={resetMenu}
									className="lg:p-4 py-3 px-0 block"
									href="/"
								>
									<motion.div
										initial={{
											opacity: 0,
											translateY: "30px",
										}}
										whileInView={{
											opacity: 1,
											translateY: "0px",
										}}
										viewport={{ once: false }}
									>
										Home
									</motion.div>
								</Link>
							</li>
							<li>
								<Link
									onClick={resetMenu}
									className="lg:p-4 py-3 px-0 block"
									href="/about-us"
								>
									<motion.div
										initial={{
											opacity: 0,
											translateY: "30px",
										}}
										whileInView={{
											opacity: 1,
											translateY: "0px",
											transition: { delay: 0.2 },
										}}
										viewport={{ once: false }}
									>
										About us
									</motion.div>
								</Link>
							</li>
							<li>
								<Link
									onClick={resetMenu}
									className="lg:p-4 py-3 px-0 block transition-all lg:bg-white lg:text-zinc-950 hover:bg-zinc-950 lg:border hover:text-white hover:border-white"
									href="/services"
								>
									<motion.div
										initial={{
											opacity: 0,
											translateY: "30px",
										}}
										whileInView={{
											opacity: 1,
											translateY: "0px",
											transition: { delay: 0.3 },
										}}
										viewport={{ once: false }}
									>
										Advertise with us
									</motion.div>
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};
