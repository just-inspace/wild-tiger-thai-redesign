import React, { Component } from "react";
class TopBar extends Component {
	state = {};
	handleNavigationMenu = () => {};
	render() {
		return (
			<div id="topnav">
				<a href="#" onClick={this.handleNavigationMenu}>
					<i className="fa fa-bars" aria-hidden="true" />
				</a>
				<div id="pagelinks">
					<a href="#homeSection">Home</a>
					<a href="#menuSection">Menu</a>
					<a href="#contactSection">Contact</a>
				</div>
			</div>
		);
	}
}

export default TopBar;
