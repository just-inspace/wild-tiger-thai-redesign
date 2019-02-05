import React, { Component } from 'react';
class MenuItem extends Component {
    state = {  }
    render() { 
        let { name } = this.props;
        let { description } = this.props;
        let { index } = this.props;
        
        return ( 
            <React.Fragment>
                <h2 key={index + "name"}>{name}</h2>
                <p key={index + "description"}>{description}</p>
            </React.Fragment>
         );
    }
}
 
export default MenuItem;