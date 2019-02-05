import React, { Component } from "react";
import MenuItems from './menuItems';

class Menu extends Component {
	state = {};

	render() {
		return ( <div id="menu">
			{this.props.menu.map((section, index) => <MenuItems key={index+"items"} index={index} items={section.items} header={section.header}/>)}
		</div>);
	}
}

export default Menu;
