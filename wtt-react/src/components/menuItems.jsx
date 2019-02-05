import React, { Component } from 'react';
import MenuItem from './menuItem';

class MenuItems extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <h1 key={this.props.index} className="menuHeading">{this.props.header}</h1>
                {this.props.items.map((item, index) => <MenuItem key={index+"item"} index={index} name={item.name} description={item.description}/>)}
            </React.Fragment>
         );
    }
}
 
export default MenuItems;