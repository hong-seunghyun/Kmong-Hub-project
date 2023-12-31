// icon.tsx
import * as React from "react";
import { iconName, IconSet } from "../icon/iconConstants";

interface IconProps {
	icon: iconName;
	size: number;
	color?: string;
	stroke?: string;
	className?: string;
}

const Icon = ({ icon, size, color, stroke, className }: IconProps) => (
	<svg
		height={size}
		viewBox={IconSet[icon].viewBox}
		strokeWidth={IconSet[icon].strokeWidth}
		fill={color}
		stroke={stroke}
		className={className}
		xmlns="http://www.w3.org/2000/svg"
	>
		<path fillRule="evenodd" clipRule="evenodd" d={IconSet[icon].path} />
		<path fillRule="evenodd" clipRule="evenodd" d={IconSet[icon].subPath} />
		<path fillRule="evenodd" clipRule="evenodd" d={IconSet[icon].thrPath} />
		<path fillRule="evenodd" clipRule="evenodd" d={IconSet[icon].fourPath} />
		<path fillRule="evenodd" clipRule="evenodd" d={IconSet[icon].fivePath} />
		<path fillRule="evenodd" clipRule="evenodd" d={IconSet[icon].sixPath} />
		<path fillRule="evenodd" clipRule="evenodd" d={IconSet[icon].sevenPath} />
	</svg>
);
export default Icon;