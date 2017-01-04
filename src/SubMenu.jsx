import React from 'react';
import SubPopupMenu from './SubPopupMenu.jsx';

export default class SubMenu extends React.Component {
	render(){
		return(
			<li className="menu-item">
				{this.props.children}
			</li>
		);
	}
}