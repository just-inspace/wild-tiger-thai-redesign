import React, { Component } from "react";

class MenuNav extends Component {
	state = {};
	render() {
		const { click } = this.props;
		return (
			<div
				id="menuButtons"
				className={
					this.props.mobile
						? "mobileMenuButtons"
						: "desktopMenuButtons"
				}
			>
				<button className="menuButton" value="foodMenu" onClick={click}>
					Food
				</button>
				{this.props.mobile ? "" : <div className="menuSeparator" />}
				<button
					className="menuButton"
					value="happyHourMenu"
					onClick={click}
				>
					Happy Hour
				</button>
				{this.props.mobile ? "" : <div className="menuSeparator" />}
				<button
					className="menuButton"
					value="drinksMenu"
					onClick={click}
				>
					Drinks
				</button>
			</div>
		);
	}
}

export default MenuNav;
