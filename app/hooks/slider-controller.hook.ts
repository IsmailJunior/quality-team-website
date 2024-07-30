'use client';
import type { elementType } from '@/app/types/homePage.types';
import { useMembers } from '@/app/hooks/members.hook';

export const useSliderController = () =>
{
	const { elements, setElements, currentProfile, setCurrentProfile, } = useMembers();
	const onProfileClick = (profile: elementType) => {
		setCurrentProfile(profile);
	};
		const onChevronClick = () => {
		let prevState = [...elements];
		let nextElementId = prevState
			.filter(element => element.active === true)
			.sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
			.at(0)?.id;
		prevState
			.filter(
				(element: elementType | undefined) => element?.active === false
			)
			.map(element => (element.active = true));
		prevState
			.filter(
				(element: elementType | undefined) =>
					element?.id === nextElementId
			)
			.map(element => (element.active = false));
		prevState
			.filter(
				(element: elementType | undefined) =>
					element?.id === nextElementId
			)
			.map(
				element =>
					(element.pos =
						Math.max.apply(
							null,
							prevState.map(function (o) {
								return o.pos;
							})
						) + 1)
			);
		setElements(prevState);
		if (nextElementId! < elements.length - 1) {
			setCurrentProfile(prevState.at(nextElementId! + 1));
		} else if (nextElementId! === elements.length) {
			nextElementId = 1;
			prevState
				.filter(
					(element: elementType | undefined) =>
						element?.active === false
				)
				.map(element => (element.active = true));
			setCurrentProfile(prevState.at(nextElementId!));
		} else {
			nextElementId = 0;
			prevState
				.filter(
					(element: elementType | undefined) =>
						element?.active === false
				)
				.map(element => (element.active = true));
			setCurrentProfile(prevState.at(nextElementId!));
		}
		};
	return {
		currentProfile,
		onChevronClick,
		onProfileClick,
		elements
	}
}