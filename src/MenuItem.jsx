import React from 'react';

export default class MenuItem extends React.Component {
	render(){
		return(
			<li className="menu-item">{this.props.title}</li>
		);
	}
}