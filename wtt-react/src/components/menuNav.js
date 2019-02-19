import React from "react";

/**
 * @export
 * @param {*} props
 * @returns renders the menu controls based on props
 */
export default function MenuNav(props) {
	const { click } = props;
	return (
		<div
			id="menuButtons"
			className={
				props.mobile ? "mobileMenuButtons" : "desktopMenuButtons"
			}
		>
			<button className="menuButton" value="foodMenu" onClick={click}>
				Food
			</button>
			{props.mobile ? "" : <div className="menuSeparator" />}
			<button
				className="menuButton"
				value="happyHourMenu"
				onClick={click}
			>
				Happy Hour
			</button>
			{props.mobile ? "" : <div className="menuSeparator" />}
			<button className="menuButton" value="drinksMenu" onClick={click}>
				Drinks
			</button>
		</div>
	);
}
