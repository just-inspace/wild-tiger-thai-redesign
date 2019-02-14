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

	// Menu Transition Controls
	handleClick = e => {
		const menu = e.target.value;
		if (this.props.animate) {
			if (this.state.activeMenu !== menu) {
				setTimeout(() => this.toggleTransition(menu), 250);
				this.setState({ toggle: false });
			}
		} else {
			this.toggleTransition(menu);
		}
	};
	toggleTransition = menu => {
		this.setState({ activeMenu: menu, toggle: true });
	};

	render() {
		const defaultStyles = {
			transition: `opacity 250ms ease-in-out`,
			opacity: 0
		};
		const transitionStyles = {
			entering: { opacity: 0 },
			entered: { opacity: 1 }
		};
		return (
			<div id="menuSection">
				<MenuNav click={this.handleClick} />
				<Grid
					columns="100px auto 100px"
					rows="auto"
					justifyItems="center"
					toggle={this.state.toggle}
					defaultStyles={defaultStyles}
					transitionStyles={transitionStyles}
					animate={this.props.animate}
				>
					<ImageGroup side="img-left-sm" />
					<Menu menu={this.state[this.state.activeMenu]} />
					<ImageGroup side="img-right-sm" />
				</Grid>
			</div>
		);
	}
}

export default MenuSection;
