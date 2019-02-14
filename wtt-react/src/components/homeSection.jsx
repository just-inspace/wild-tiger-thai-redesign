import React, { Component } from "react";
import Grid from "./grid";

class HomeSection extends Component {
	state = {};
	mobileRender = () => {
		return (
			<Grid alignItems="end" columns="100%" rows="40% 40%" id="homeSection">
				<p style={{maxWidth:"60%", justifySelf: "left"}}>Wild Tiger Thai Restaurant and Bar</p>
				<p style={{maxWidth:"60%", justifySelf: "right"}}>"Vancouver's Local Thai Experience"</p>
			</Grid>
		);
	}
	desktopRender = () => {
		return (
			<Grid alignItems="center" columns="1fr 1fr 1fr" rows="30% 30% 30%" id="homeSection">
				<p style={{alignSelf:"start", justifySelf: "right", gridRowStart: 2, gridRowEnd: 3}}>Wild Tiger Thai Restaurant and Bar</p>
				<p style={{alignSelf:"start", justifySelf: "left", gridRowStart: 3, gridRowEnd: 4, gridColumnStart: 2, gridColumnEnd: 3}}>"Vancouver's Local Thai Experience"</p>

				<div id="homeimageplaceholder" />
			</Grid>
		)
	}
	render() {
		return (
				this.props.mobile ? this.mobileRender() : this.desktopRender()
		);
	}
}

export default HomeSection;
