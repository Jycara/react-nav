import React from 'react';
import MenuItemGroup from './MenuItemGroup.jsx';

export default class SubPopupMenu extends React.Component {
	render(){
		return(
			<ul>
				{this.props.children}
			</ul>
		);
	}
}