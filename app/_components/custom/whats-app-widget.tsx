"use client";
import type { FC } from "react";
import Link from "next/link";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { XCircle } from "lucide-react";
import { ChatPanelContext } from "@/app/_store/chat-panel-context";
import { WhatsAppIcon } from "@/app/_components/custom/whats-app-icon";
import { SARA_SUPPORT } from "@/app/_constants/chat";

export const WhatsAppWidget: FC = () => {
	const { isChatPanelOpen, handleSwitchPanel } = useContext(ChatPanelContext);
	return (
		<div className="fixed bottom-0">
			<AnimatePresence>
				{isChatPanelOpen && (
					<motion.div
						className="font-sans"
						initial={{ opacity: "0%", translateY: "50px" }}
						animate={{
							opacity: isChatPanelOpen ? "100%" : "0%",
							translateY: isChatPanelOpen ? "0px" : "50px",
						}}
						exit={{ opacity: "0%", translateY: "50px" }}
					>
						<ChatPanel />
					</motion.div>
				)}
			</AnimatePresence>
			<button
				onClick={handleSwitchPanel}
				className="bg-green-600 hover:bg-green-500 transition-all duration-300 cursor-pointer rounded-full flex justify-center items-center border h-20 w-20 m-6 shadow-xl"
			>
				<WhatsAppIcon size={40} color="white" />
			</button>
		</div>
	);
};

const ChatPanel: FC = () => {
	return (
		<div className="h-80 w-96 flex flex-col justify-between relative pattern py-10 px-5 rounded-xl ltr:ml-7 rtl:mr-7 shadow-xl overflow-hidden">
			<ChatHeader />
			<ChatBubble />
			<ChatWidget />
		</div>
	);
};

const ChatBubble: FC = () => {
	const { t } = useTranslation();

	return (
		<div className="w-56 bg-white p-2 space-y-4 mt-20 text-zinc-900 rounded-es-xl rounded-se-xl rounded-br-xl shadow-md">
			<p>{t("common:widgets.whatsapp.message")}</p>
		</div>
	);
};

const ChatHeader: FC = () => {
	return (
		<div className="h-20 z-10 w-full absolute flex p-4 justify-between left-0 top-0 bg-green-900">
			<Profile />
			<CloseButton />
		</div>
	);
};

const CloseButton: FC = () => {
	const { closePanel } = useContext(ChatPanelContext);
	return (
		<button
			className="text-gray-400 hover:text-gray-300 transition-all duration-200"
			onClick={closePanel}
		>
			<XCircle />
		</button>
	);
};

const Profile: FC = () => {
	const { t } = useTranslation();
	return (
		<div className="flex gap-4 justify-center items-center">
			<div
				className="h-16 w-16 relative rounded-full shadow-xl bg-no-repeat bg-center bg-cover"
				style={{
					backgroundImage: `url(${SARA_SUPPORT.src})`,
				}}
			>
				<div className="h-4 w-4 bg-green-500 border-2 border-green-900 rounded-full bottom-0 right-0 absolute" />
			</div>
			<div className="text-white">
				<h1 className="text-lg font-semibold">
					{t("common:widgets.whatsapp.name")}
				</h1>
				<span className="text-xs">
					{t("common:widgets.whatsapp.status")}
				</span>
			</div>
		</div>
	);
};

const ChatWidget: FC = () => {
	const { t } = useTranslation();
	return (
		<Link
			target="_blank"
			href="https://wa.me/0776662512?text=Hello"
			title="Chat on WhatsApp"
		>
			<div className="h-16 w-72 flex hover:bg-green-500 transition-all duration-300 justify-center items-center gap-4 text-white font-bold bg-green-600 mx-auto rounded-full">
				<WhatsAppIcon color="white" size={30} />
				<p>{t("common:widgets.whatsapp.chat")}</p>
			</div>
		</Link>
	);
};
