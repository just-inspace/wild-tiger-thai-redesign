import React, { Component } from "react";
class MenuNav extends Component {
	state = {};
	render() {
		const { click } = this.props;
		return (
			<div id="menuButtons">
				<button class="menuButton" value="foodMenu" onClick={click}>
					Food
				</button>
				<button
					class="menuButton"
					value="happyHourMenu"
					onClick={click}
				>
					Happy Hour
				</button>
				<button class="menuButton" value="drinksMenu" onClick={click}>
					Drinks
				</button>
			</div>
		);
	}
}

export default MenuNav;
