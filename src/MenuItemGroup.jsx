import React from 'react';

export default class MenuItemGroup extends React.Component {
	render(){
		return(
			<li>
				{this.props.children}
			</li>
		);
	}
}