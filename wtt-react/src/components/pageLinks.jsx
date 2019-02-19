import React, { Component } from "react";

/**
 * @class PageLinks
 * @extends {Component}
 *
 * COMPONENT PURPOSE:
 * 	Construct / control the top level page navigation
 */
class PageLinks extends Component {
	render() {
		let classes = this.props.show ? "displayNav " : " ";
		classes += this.props.mobile ? "mobileNav" : "desktopNav";
		return (
			<div id="pagelinks" className={classes}>
				<button onClick={this.props.click} value="#homeSection">
					Home
				</button>
				<button onClick={this.props.click} value="#menuSection">
					Menu
				</button>
				<button onClick={this.props.click} value="#contactSection">
					Contact
				</button>
			</div>
		);
	}
}

export default PageLinks;
