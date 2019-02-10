import React, { Component } from "react";
let scrollToElement = require("scroll-to-element");

class TopBar extends Component {
	state = {};
	handleNavigationMenu = () => {};

	handleNavigation = e => {
		scrollToElement(e.target.value, {
			offset: 0,
			ease: "in-quad",
			duration: "500"
		});
	};

	render() {
		return (
			<div id="topnav">
				<a href="#home" onClick={this.handleNavigationMenu}>
					<i className="fa fa-bars" aria-hidden="true" />
				</a>
				<div id="pagelinks">
					<button
						onClick={this.handleNavigation}
						value="#homeSection"
					>
						Home
					</button>
					<button
						onClick={this.handleNavigation}
						value="#menuSection"
					>
						Menu
					</button>
					<button
						onClick={this.handleNavigation}
						value="#contactSection"
					>
						Contact
					</button>
				</div>
			</div>
		);
	}
}

export default TopBar;
