import React, { Component } from "react";
import Menu from "./menu";
import MenuNav from "./menuNav";

class MenuSection extends Component {
	state = {
		activeMenu: [
			{
				header: "Starters",
				subheading: "buy somethin will ya",
				items: [
					{
						name: "Egg rolls",
						description: "delicious and cheap 4"
					},
					{
						name: "More egg rolls",
						description: "delicious and cheap 4"
					}
				]
			},
			{
				header: "Meals",
				subheading: "buy somethin will ya",
				items: [
					{
						name: "Egg rolls",
						description: "delicious and cheap 4"
					},
					{
						name: "More egg rolls",
						description: "delicious and cheap 4"
					}
				]
			}
		]
	};
	render() {
		return (
			<div id="menuSection">
				<MenuNav />
				<Menu menu={this.state.activeMenu} />
			</div>
		);
	}
}

export default MenuSection;
