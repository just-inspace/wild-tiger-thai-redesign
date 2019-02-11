import React, { Component } from "react";
import Menu from "./menu";
import MenuNav from "./menuNav";
import ImageGroup from "./imageGroup";

import foodMenu from "./data/foodMenu.json";
import drinksMenu from "./data/drinksMenu.json";
import happyHourMenu from "./data/happyHourMenu.json";

class MenuSection extends Component {
	state = {
		foodMenu: foodMenu,
		drinksMenu: drinksMenu,
		happyHourMenu: happyHourMenu,
		activeMenu: "foodMenu",
		toggle: true
	};

	// handlers
	handleClick = e => {
		if (this.state.activeMenu !== e.target.value) {
			const menu = e.target.value;
			setTimeout(() => this.toggleTransition(menu), 250);
			this.setState({ toggle: false });
		}
	};
	toggleTransition = menu => {
		this.setState({ activeMenu: menu, toggle: true });
	};
	render() {
		return (
			<div id="menuSection">
				<MenuNav click={this.handleClick} />
				<Menu
					menu={this.state[this.state.activeMenu]}
					toggle={this.state.toggle}
				/>
				<ImageGroup />
				<ImageGroup />
			</div>
		);
	}
}

export default MenuSection;
