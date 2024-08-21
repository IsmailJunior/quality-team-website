"use client";
import { createContext, useState, type ReactNode, type FC } from "react";

export const ChatPanelContext = createContext({
	isChatPanelOpen: false,
	handleSwitchPanel: () => {},
	closePanel: () => {},
});

export const ChatPanelContextProvider: FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [isChatPanelOpen, setIsChatPanelOpen] = useState(false);
	const handleSwitchPanel = () => {
		if (isChatPanelOpen === false) {
			setIsChatPanelOpen(true);
		} else {
			setIsChatPanelOpen(false);
		}
	};
	const closePanel = () => {
		setIsChatPanelOpen(false);
	};
	const ctxValue = {
		isChatPanelOpen,
		handleSwitchPanel,
		closePanel,
	};
	return (
		<ChatPanelContext.Provider value={ctxValue}>
			{children}
		</ChatPanelContext.Provider>
	);
};
