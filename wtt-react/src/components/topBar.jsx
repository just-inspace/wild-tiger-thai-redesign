import React, { Component } from "react";
import Hamburger from "./hamburger";
import PageLinks from "./pageLinks";
import { storeLogo } from "../images";

let scrollToElement = require("scroll-to-element");

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
				<img
					src={storeLogo}
					alt="Wild Tiger Thai Logo"
					className="logo"
				/>

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
				<p className="subtitle">Restaurant and Bar</p>
			</div>
		);
	}
}

export default TopBar;
