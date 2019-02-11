import React from "react";
import { images } from "../images";

export default function imageGroup() {
	return (
		<div>
			{images.slice(0, 3).map((image, index) => (
				<img
					key={index}
					src={image}
					alt={"food-image-" + index}
					className={"image" + index}
				/>
			))}
		</div>
	);
}
