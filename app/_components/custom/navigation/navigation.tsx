"use client";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useNavigation } from "@/app/_hooks/navigation";
import { Logo } from "@/app/_components/custom/logo";
import { AlignJustify } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageChanger } from "@/app/_components/custom/language-changer";

export const Navigation = () => {
	const { t } = useTranslation();
	const { isOpen, resetMenu, onMenuClicked } = useNavigation();
	return (
		<AnimatePresence>
			<div className="fixed w-screen border-b border-slate-500 top-0 bg-gradient-to-r z-50 text-slate-100 font-semibold bg-zinc-950 lg:px-16">
				<motion.div
					initial={{ height: 100 }}
					animate={{ height: isOpen ? 325 : 100 }}
					exit={{ height: 100 }}
					className="container overflow-hidden flex flex-wrap items-center  lg:space-x-0 lg:py-0 pb-10"
				>
					<div className="flex-1 flex justify-between items-center">
						<div className="py-5">
							<LanguageChanger />
						</div>
					</div>
					<div className="flex-1 flex justify-between items-center">
						<Link
							onClick={resetMenu}
							className="p-5"
							href="/"
							title="Logo"
						>
							<Logo />
						</Link>
					</div>
					<button
						name="menu"
						onClick={onMenuClicked}
						className="cursor-pointer lg:hidden block p-5 text-xl"
					>
						<AlignJustify />
					</button>
					<div className="flex flex-col justify-center items-center font-normal lg:text-base text-center lg:flex lg:items-center lg:w-auto w-full">
						<nav>
							<ul className="lg:flex lg:border items-center space-y-5 lg:space-y-0 justify-between pt-10 lg:pt-0">
								<li>
									<Link
										title="Home"
										onClick={resetMenu}
										className="lg:p-4 py-3 px-0 block"
										href="/"
									>
										<div className="text-lg">
											{t("common:navbar.home")}
										</div>
									</Link>
								</li>
								<li>
									<Link
										title="About us"
										onClick={resetMenu}
										className="lg:p-4 py-3 px-0 block"
										href="/about-us"
									>
										<div className="text-lg">
											{t("common:navbar.about_us")}
										</div>
									</Link>
								</li>
								<li>
									<Link
										title="Call us"
										onClick={resetMenu}
										target="_blank"
										className="lg:p-4 py-3 px-0 block transition-all lg:bg-white lg:text-zinc-950 hover:bg-zinc-950 lg:border hover:text-white hover:border-white"
										href="tel:0774666251"
									>
										<div className="text-lg">
											{t("common:navbar.cta")}
										</div>
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</motion.div>
			</div>
		</AnimatePresence>
	);
};
