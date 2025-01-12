import { JSX } from "https://esm.sh/v128/preact@10.22.0/src/index.js"

export type Props = JSX.HTMLAttributes<SVGSVGElement> & {
	bgnd?: string | undefined
	fgnd?: string | undefined
}

export default function Hamburger({
	bgnd = "black",
	fgnd = "white",
	height = 48,
	width = 48,
	...props
}: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			height={height}
			viewBox="0 0 240 240"
			width={width}
			{...props}
		>
			<circle cx="120" cy="120" r="120" fill={bgnd}></circle>
			<line
				x1="64"
				x2="180"
				y1="72"
				y2="72"
				stroke={fgnd}
				stroke-width="20"
				stroke-linecap="round"
			>
			</line>
			<line
				x1="64"
				x2="180"
				y1="120"
				y2="120"
				stroke={fgnd}
				stroke-width="20"
				stroke-linecap="round"
			>
			</line>
			<line
				x1="64"
				x2="180"
				y1="168"
				y2="168"
				stroke={fgnd}
				stroke-width="20"
				stroke-linecap="round"
			>
			</line>
		</svg>
	)
}
