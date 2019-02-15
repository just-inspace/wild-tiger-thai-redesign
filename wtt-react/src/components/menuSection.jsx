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

	renderMobile = (defaultStyles, transitionStyles) => {
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
	};

	renderDesktop = (defaultStyles, transitionStyles) => {
		const half = Math.floor(this.state[this.state.activeMenu].length / 2);
		return (
			<div id="menuSection">
				<MenuNav click={this.handleClick} />
				<Grid
					columns="100px 1fr 1fr 100px"
					rows="auto"
					justifyItems="center"
					toggle={this.state.toggle}
					defaultStyles={defaultStyles}
					transitionStyles={transitionStyles}
					animate={this.props.animate}
					gridAutoFlow="row"
				>
					<ImageGroup
						side="img-left-sm"
						containerStyles={{
							gridColumnStart: 1,
							gridColumnEnd: 2,
							gridRow: "1 / last-line"
						}}
					/>
					<Menu
						menu={this.state[this.state.activeMenu].slice(0, half)}
						additionalStyles={{ maxWidth: "50%" }}
					/>
					<Menu
						menu={this.state[this.state.activeMenu].slice(half)}
						additionalStyles={{ maxWidth: "50%" }}
					/>
					<ImageGroup
						side="img-right-sm"
						containerStyles={{
							gridColumnStart: 4,
							gridColumnEnd: 5,
							gridRow: "1 / last-line"
						}}
					/>
				</Grid>
			</div>
		);
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
		return this.props.mobile
			? this.renderMobile(defaultStyles, transitionStyles)
			: this.renderDesktop(defaultStyles, transitionStyles);
	}
}

export default MenuSection;
