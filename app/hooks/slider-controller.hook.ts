'use client';
import { useEffect, useState} from 'react';
import { useInterval} from '@mantine/hooks';
import type { elementType } from '@/app/types/homePage.type';
import { useMembers } from '@/app/hooks/members.hook';

export const useSliderController = () =>
{
	const interval = useInterval( () => onChevronClick(), 3000 );
	const { elements, setElements, currentProfile, setCurrentProfile, } = useMembers();
	const [isMouseOver, setIsMouseOver] = useState(false)
	const onMouseOver = (isMouseOver: boolean) =>
	{
		setIsMouseOver(isMouseOver)
	}
	const onProfileClick = (profile: elementType) => {
		setCurrentProfile(profile);
	};
	const onChevronClick = () =>
	{
			
		const prevState = [ ...elements ];
		const activeElements = prevState.filter(element => element.active);
    	const nextElement = activeElements.sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0)).at(0)
		let nextElementId = nextElement?.id;
		
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
			.map( element => ( element.active = false ) );
		const nextElements = prevState.map(element => {
      if (element.id === nextElementId) {
        element.active = true;
        element.pos = Math.max(...prevState.map(o => o.pos)) + 1;
      }
      return element;
		} );
		
		setElements( nextElements );
		
		 if (nextElementId !== undefined) {
      if (nextElementId < elements.length - 1) {
        setCurrentProfile(nextElements[nextElementId + 1]);
	  } else if ( nextElementId! === elements.length )
	  {
		  nextElementId! = 1;
		  prevState
				.filter(
					(element: elementType | undefined) =>
						element?.active === false
				)
				.map(element => (element.active = true));
			setCurrentProfile(nextElements.at(nextElementId!));
	  }
	  else
	  {
        setCurrentProfile(nextElements[0]);
      }
    }
		};
	useEffect( () =>
	{
		if ( !isMouseOver )
		{
			interval.start()
		} else
		{
			interval.stop()
		}
    return interval.stop;
  }, [interval, isMouseOver]);

	return {
		currentProfile,
		onChevronClick,
		onProfileClick,
		onMouseOver,
		elements
	}
}