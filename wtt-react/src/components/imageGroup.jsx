import React, { Component } from "react";
import { images } from "../images";

class ImageGroup extends Component {
	render() {
		return (
			<div
				ref={this.box}
				className={
					this.props.side
						? this.props.side + " sideImages"
						: "contentImages"
				}
			>
				{images
					.slice(this.props.start, this.props.end)
					.map((image, index) => (
						<img
							key={index}
							src={image}
							alt={"food-image-" + index}
							className={"image"}
						/>
					))}
			</div>
		);
	}
}

export default ImageGroup;
