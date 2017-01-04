import React from 'react';

export default class SubMenuItem extends React.Component {
	render(){
		return(
			<li className="sub-menu-item">{this.props.title}</li>
		);
	}
}