import {Placement} from 'popper.js';
import {CSSProperties} from 'react';
import {LineStyle} from 'csstype';

export const getArrowStyle = (
	placement: Placement,
	bubbleBorderWidth: number,
	arrowBorderWidth: number,
	borderStyle: LineStyle,
	borderColor: string,
	tooltipSize: number
): CSSProperties => {
	const isBottom = Boolean(placement && placement.indexOf('bottom') === 0);
	const isLeft = Boolean(placement && placement.indexOf('left') === 0);
	const isRight = Boolean(placement && placement.indexOf('right') === 0);
	const isTop = Boolean(placement && placement.indexOf('top') === 0);

	const offset = Math.ceil(0 - tooltipSize / 2) - bubbleBorderWidth;

	return {
		...(isBottom
			? {
					borderTopWidth: arrowBorderWidth,
					borderTopStyle: borderStyle,
					borderTopColor: borderColor,
					borderLeftWidth: arrowBorderWidth,
					borderLeftStyle: borderStyle,
					borderLeftColor: borderColor,
					borderRightWidth: 0,
					borderBottomWidth: 0,
					top: offset
			  }
			: {}),
		...(isTop
			? {
					borderBottomWidth: arrowBorderWidth,
					borderBottomColor: borderColor,
					borderBottomStyle: borderStyle,
					borderRightWidth: arrowBorderWidth,
					borderRightStyle: borderStyle,
					borderRightColor: borderColor,
					borderLeftWidth: 0,
					borderTopWidth: 0,
					bottom: offset
			  }
			: {}),
		...(isRight
			? {
					borderLeftWidth: arrowBorderWidth,
					borderLeftColor: borderColor,
					borderLeftStyle: borderStyle,
					borderBottomWidth: arrowBorderWidth,
					borderBottomColor: borderColor,
					borderBottomStyle: borderStyle,
					borderRightWidth: 0,
					borderTopWidth: 0,
					left: offset
			  }
			: {}),
		...(isLeft
			? {
					borderRightWidth: arrowBorderWidth,
					borderRightColor: borderColor,
					borderRightStyle: borderStyle,
					borderTopWidth: arrowBorderWidth,
					borderTopColor: borderColor,
					borderTopStyle: borderStyle,
					borderLeftWidth: 0,
					borderBottomWidth: 0,
					right: offset
			  }
			: {}),
		position: 'absolute',
		height: tooltipSize,
		width: tooltipSize,
		transform: 'rotate(45deg)'
	};
};

export const getContainerStyle = (
	placement: Placement,
	borderWidth: number,
	tooltipSize: number
): CSSProperties => {
	const isBottom = Boolean(placement && placement.indexOf('bottom') === 0);
	const isLeft = Boolean(placement && placement.indexOf('left') === 0);
	const isRight = Boolean(placement && placement.indexOf('right') === 0);
	const isTop = Boolean(placement && placement.indexOf('top') === 0);

	const offset = Math.floor(tooltipSize / 2) + borderWidth;

	return {
		...(isBottom ? {marginTop: offset} : {}),
		...(isTop ? {marginBottom: offset} : {}),
		...(isLeft ? {marginRight: offset} : {}),
		...(isRight ? {marginLeft: offset} : {})
	};
};
