import React from 'react';

export default class MenuItem extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			active: false,
			selected: false
		}
	}

	handleHover(){
		this.setState({
			active: true
		})
	}

	handleLeave(){
		this.setState({
			active: false
		})
	}

	handleClick(){
		this.setState({
			selected: true
		})
	}

	render(){
		var actived = this.state.active ? "menu-item-active" : " ";
		var selected = this.state.selected ? "menu-item-selected" : " ";
		var classNames = "menu-item " + actived + selected;
		return(
			<li className={classNames} 
				onMouseOver={this.handleHover.bind(this)}
				onMouseLeave={this.handleLeave.bind(this)}
				onClick={this.handleClick.bind(this)} >{this.props.title}</li>
		);
	}
}