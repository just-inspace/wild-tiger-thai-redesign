import React, { Component } from "react";
import Menu from "./menu";
import MenuNav from "./menuNav";

class MenuSection extends Component {
	state = {
		foodMenu: [
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
						name: "Begg rolls",
						description: "delicious and cheap 4"
					},
					{
						name: "More begg rolls",
						description: "delicious and cheap 4"
					}
				]
			}
		],
		drinksMenu: [
			{
				header: "drink",
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
				header: "drinks",
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
		],
		happyHourMenu: [
			{
				header: "hoppy",
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
				header: "harpy",
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
				header: "happy",
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
		],
		activeMenu: "foodMenu"
	};


	// handlers
	handleClick = (e) => {
		this.setState({activeMenu: e.target.value});
	}

	render() {
		return (
			<div id="menuSection">
				<MenuNav click={this.handleClick}/>
				<Menu menu={this.state[this.state.activeMenu]} />
			</div>
		);
	}
}

export default MenuSection;
