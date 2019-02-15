import React from "react";
import Transition from "react-transition-group/Transition";

export default function Grid(props) {
	let styles = {
		display: "grid",
		gridTemplateColumns: props.columns,
		gridTemplateRows: props.rows,
		justifyItems: props.justifyItems || "auto",
		alignItems: props.alignItems || "auto",
		justifyContent: props.justifyContent || "auto",
		alignContent: props.alignContent ? props.alignContent : "auto",
		gridAutoFlow: props.gridAutoFlow || "row"
	};

	function animatedView() {
		return (
			<Transition in={props.toggle} timeout={0}>
				{state => (
					<div
						id={props.id}
						style={{
							...styles,
							...props.defaultStyles,
							...props.transitionStyles[state]
						}}
					>
						{props.children}
					</div>
				)}
			</Transition>
		);
	}
	function staticView() {
		return (
			<div
				id={props.id}
				style={{
					...styles
				}}
			>
				{props.children}
			</div>
		);
	}
	return props.animate ? animatedView() : staticView();
}
