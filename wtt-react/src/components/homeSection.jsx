import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

class HomeSection extends Component {
	state = {};
	render() {
		return (
			<div id="homeSection">
				<Spring
					from={{ opacity: 0, top: 100, position: "relative" }}
					to={{ opacity: 1, top: 0, position: "inherit" }}
				>
					{props => (
						<React.Fragment>
							<p style={props} id="callout1">
								Wild Tiger Thai Restaurant and Bar
							</p>
							<p style={props} id="calllout2">
								"Vancouver's Local Thai Experience"
							</p>
						</React.Fragment>
					)}
				</Spring>
				<div id="homeimageplaceholder" />
			</div>
		);
	}
}

export default HomeSection;
