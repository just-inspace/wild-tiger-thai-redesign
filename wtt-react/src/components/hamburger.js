import React from "react";

export default function Hamburger(props) {
	return (
		<svg
			id="menuSVG"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			width="28px"
			height="28px"
			onClick={props.click}
		>
			<path
				style={{
					lineHeight: "normal",
					textIndent: 0,
					textAlign: "start",
					textDecorationLine: "none",
					textDecorationStyle: "solid",
					textDecorationColor: "#000",
					textTransform: "none",
					blockProgression: "tb",
					isolation: "auto",
					mixBlendMode: "normal",
					fontWeight: "400",
					fontFamily: "sans-serif",
					whiteSpace: "normal",
					overflow: "visible"
				}}
				d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"
			/>
		</svg>
	);
}
