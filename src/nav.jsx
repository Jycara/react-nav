import React from 'react';
import MenuItem from './MenuItem.jsx';
import SubMenu from './SubMenu.jsx';
import SubPopupMenu from './SubPopupMenu.jsx';
import MenuItemGroup from './MenuItemGroup.jsx';

export default class Nav extends React.Component {
	render(){
		return(
			<ul className="nav-root">
				<MenuItem title="MenuItem-1"></MenuItem>
				<MenuItem title="MenuItem-1"></MenuItem>
				<SubMenu>
					<div className="submenu-title">SubMenu-Title</div>
					<SubPopupMenu>
						<MenuItemGroup >
							<div className="submenu-group-title">Item-group-1</div>
							<ul className="submenu-group-list">
								<li>item-1-2</li>
								<li>item-1-2</li>
							</ul>
						</MenuItemGroup>
						<MenuItemGroup >
							<div className="submenu-group-title">Item-group-1</div>
							<ul className="submenu-group-list">
								<li>item-1-2</li>
								<li>item-1-2</li>
							</ul>
						</MenuItemGroup>
						<li>submenu-item</li>
						<li>submenu-item</li>
					</SubPopupMenu>
				</SubMenu>
				<MenuItem title="MenuItem-1"></MenuItem>
				<MenuItem title="MenuItem-1"></MenuItem>
			</ul>
		);
	}
}