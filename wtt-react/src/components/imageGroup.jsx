import React from "react";
import { images } from "../images";

/**
 * @export
 * @returns a container for a group of images plus a slice of the images imported to the app
 */
export default function ImageGroup(props) {
	return (
		<div
			style={props.containerStyles}
			className={
				props.side ? props.side + " sideImages" : "contentImages"
			}
		>
			{images.slice(props.start, props.end).map((image, index) => (
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
