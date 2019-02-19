import React, { Component } from "react";
import Hamburger from "./hamburger";
import PageLinks from "./pageLinks";
import { storeLogo } from "../images";

// Scroll To Element package. Enable smooth scrolling between page sections
let scrollToElement = require("scroll-to-element");

/**
 * @class TopBar
 * @extends {Component}
 *
 * COMPONENT PURPOSE:
 * 	Display the fixed page header, business name, and navigation controls
 *
 * STATE:
 * 	show: controls visibility of mobile menu
 *
 * HANDLERS:
 * 	handleResponsiveNavClick => adjust state {show} when hamburger menu is clicked
 * 	handleNavigation => menu button clicked. call the scrollToElement function to scroll page
 *
 * CHILD COMPONENTS:
 * 	Hamburger
 * 	PageLinks
 */
class TopBar extends Component {
	state = {
		show: false
	};

	handleResponsiveNavClick = () => {
		this.setState({ show: !this.state.show });
	};

	handleNavigation = e => {
		this.props.mobile && this.handleResponsiveNavClick();
		scrollToElement(e.target.value, {
			offset: 0,
			ease: "in-quad",
			duration: "500"
		});
	};

	render() {
		return (
			<div id="topnav">
				<div
					style={{ display: "flex", float: "left" }}
					className="companyName"
				>
					<img
						className="logo"
						src={storeLogo}
						alt="Wild Tiger Thai Logo"
					/>
					<p className="subtitle">Restaurant and Bar</p>
				</div>
				{this.props.mobile && (
					<Hamburger click={this.handleResponsiveNavClick} />
				)}
				{this.props.mobile ? (
					<PageLinks
						click={this.handleNavigation}
						mobile={true}
						show={this.state.show}
					/>
				) : (
					<PageLinks
						click={this.handleNavigation}
						mobile={false}
						show={true}
					/>
				)}
			</div>
		);
	}
}

export default TopBar;
