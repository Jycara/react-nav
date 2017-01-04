import React from 'react';

export default class SubMenuItem extends React.Component {
	render(){
		return(
			<li className="submenu-item">{this.props.title}</li>
		);
	}
}