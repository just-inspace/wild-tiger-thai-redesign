import React, { Component } from "react";
class MenuNav extends Component {
	state = {};
	render() {
		const { click } = this.props;
		return (
			<div id="menuButtons">
				<button className="menuButton" value="foodMenu" onClick={click}>
					Food
				</button>
				<button
					className="menuButton"
					value="happyHourMenu"
					onClick={click}
				>
					Happy Hour
				</button>
				<button className="menuButton" value="drinksMenu" onClick={click}>
					Drinks
				</button>
			</div>
		);
	}
}

export default MenuNav;
