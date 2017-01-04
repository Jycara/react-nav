import React from 'react';
import MenuItem from './MenuItem.jsx';
import SubMenuItem from './SubMenuItem.jsx';
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
								<SubMenuItem title="item-1-2"></SubMenuItem>
								<SubMenuItem title="item-1-2"></SubMenuItem>
							</ul>
						</MenuItemGroup>
						<MenuItemGroup >
							<div className="submenu-group-title">Item-group-1</div>
							<ul className="submenu-group-list">
								<SubMenuItem title="item-1-2"></SubMenuItem>
								<SubMenuItem title="item-1-2"></SubMenuItem>
							</ul>
						</MenuItemGroup>
						<SubMenuItem title="submenu-item"></SubMenuItem>
						<SubMenuItem title="submenu-item"></SubMenuItem>
					</SubPopupMenu>
				</SubMenu>
				<MenuItem title="MenuItem-1"></MenuItem>
				<MenuItem title="MenuItem-1"></MenuItem>
			</ul>
		);
	}
}