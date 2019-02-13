import React, { Component } from "react";
import Menu from "./menu";
import MenuNav from "./menuNav";
import ImageGroup from "./imageGroup";
import Grid from "./grid";

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

	menuRef = React.createRef();

	render() {
		console.log(this.refs);
		return (
			<div id="menuSection">
				<MenuNav click={this.handleClick} />
				<Grid
					columns="100px auto 100px"
					rows="auto"
					justifyItems="center"
				>
					<ImageGroup side="img-left-sm" />
					<Menu
						menu={this.state[this.state.activeMenu]}
						toggle={this.state.toggle}
					/>
					<ImageGroup side="img-right-sm" />
				</Grid>
			</div>
		);
	}
}

export default MenuSection;
