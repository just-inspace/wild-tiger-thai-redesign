import React, { Component } from "react";
class MenuNav extends Component {
	state = {};
	render() {
		const { click } = this.props;
		return (
			<div id="menuButtons">
				<button id="foodButton" value="foodMenu" onClick={click}>Food</button>
				<button id="happyHourButton" value="happyHourMenu" onClick={click}>Happy Hour</button>
				<button id="drinksButton" value="drinksMenu" onClick={click}>Drinks</button>
			</div>
		);
	}
}

export default MenuNav;
