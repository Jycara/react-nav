import React from 'react';
import MenuItemGroup from './MenuItemGroup.jsx';

export default class SubPopupMenu extends React.Component {

	constructor(props){
		super(props);
	}



	render(){
		return(
			<ul className="submenu" >
				{this.props.children}
			</ul>
		);
	}
}