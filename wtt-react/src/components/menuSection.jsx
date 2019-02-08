import React, { Component } from "react";
import Menu from "./menu";
import MenuNav from "./menuNav";

import foodMenu from "./data/foodMenu.json";
import drinksMenu from "./data/drinksMenu.json";
import happyHourMenu from "./data/happyHourMenu.json";

class MenuSection extends Component {
	state = {
		foodMenu: foodMenu,
		drinksMenu: drinksMenu,
		happyHourMenu: happyHourMenu,
		activeMenu: "foodMenu"
	};

	// handlers
	handleClick = e => {
		this.setState({ activeMenu: e.target.value });
	};

	render() {
		return (
			<div id="menuSection">
				<MenuNav click={this.handleClick} />
				<Menu
					menu={this.state[this.state.activeMenu]}
					value={this.state.activeMenu}
				/>
			</div>
		);
	}
}

export default MenuSection;
