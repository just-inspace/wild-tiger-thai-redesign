import React, { Component } from "react";
class Menu extends Component {
	state = {};

	renderMenu = () => {
		return (
			<p>
				{this.props.menu.map(section => {
					console.log(section);
				})}
			</p>
		);
	};

	render() {
		return <div id="menu">{this.renderMenu()}</div>;
	}
}

export default Menu;
