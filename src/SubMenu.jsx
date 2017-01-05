import React from 'react';
import SubPopupMenu from './SubPopupMenu.jsx';

export default class SubMenu extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			active: false,
			selected: false
		}
	}

	handleHover(){
		clearTimeout(this.timer);
		this.setState({
			active: true
		})
	}

	handleLeave(){
		var that = this;
		this.timer = setTimeout(function(){
			that.setState({
				active: false
			});
		}, 300);
	}

	render(){
		var actived = this.state.active ? "submenu-active " : "";
		var selected = this.state.selected ? "submenu-selected " : "";
		var classNames = "menu-item " + actived + selected;
		return(
			<li className={classNames} 
				onMouseOver={this.handleHover.bind(this)} 
				onMouseLeave={this.handleLeave.bind(this)} >
				{this.props.children}
			</li>
		);
	}
}