import React, { Component } from "react";
import Grid from "./grid";
import { storeFront } from "../images";

class HomeSection extends Component {
	state = {};
	mobileRender = () => {
		return (
			<Grid
				alignItems="center"
				columns="100%"
				rows="40% 40%"
				id="homeSection"
			>
				<p style={{ maxWidth: "60%", justifySelf: "left" }}>
					Wild Tiger Thai Restaurant and Bar
				</p>
				<p style={{ maxWidth: "60%", justifySelf: "right" }}>
					"Vancouver's Local Thai Experience"
				</p>
			</Grid>
		);
	};
	desktopRender = () => {
		return (
			<Grid
				alignItems="center"
				columns="1fr 1fr 1fr 1fr"
				rows="1fr 1fr 1fr 1fr"
				id="homeSection"
			>
				<p
					style={{
						alignSelf: "start",
						justifySelf: "right",
						gridRowStart: 2,
						gridRowEnd: 3
					}}
				>
					Wild Tiger Thai Restaurant and Bar
				</p>
				<p
					style={{
						alignSelf: "start",
						justifySelf: "left",
						gridRowStart: 3,
						gridRowEnd: 4,
						gridColumnStart: 2,
						gridColumnEnd: 3
					}}
				>
					"Vancouver's Local Thai Experience"
				</p>

				<img
					src={storeFront}
					alt="storefront"
					style={{
						gridRowStart: 2,
						gridRowEnd: 4,
						gridColumnStart: 3,
						gridColumnEnd: 5,
						justifySelf: "center",
						borderRadius: "50%",
						maxWidth: "100%",
						maxHeight: "100%"
					}}
				/>
			</Grid>
		);
	};
	render() {
		return this.props.mobile ? this.mobileRender() : this.desktopRender();
	}
}

export default HomeSection;
