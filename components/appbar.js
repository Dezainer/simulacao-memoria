import React from 'react';
import ReactDOM from 'react-dom';

var apps = [
	{
		"name"		:"Arquivos",
		"size"		:"1",
		"dimensions":"48",
		"icon"		:"../footage/folder.png"
	},
	{
		"name"		:"Terminal",
		"size"		:"1",
		"dimensions":"48",
		"icon"		:"../footage/terminal.png"
	},
	{
		"name"		:"Sublime",
		"size"		:"2",
		"dimensions":"48",
		"icon"		:"../footage/sublime.png"
	},
	{
		"name"		:"Spotify",
		"size"		:"2",
		"dimensions":"48",
		"icon"		:"../footage/spotify.png"
	},
	{
		"name"		:"Chrome",
		"size"		:"4",
		"dimensions":"48",
		"icon"		:"../footage/chrome.png"
	},
	{
		"name"		:"Configurações",
		"size"		:"3",
		"dimensions":"48",
		"icon"		:"../footage/settings.png"
	},
	{
		"name"		:"Power",
		"size"		:"4",
		"dimensions":"45",
		"icon"		:"../footage/power.png"
	},
	{
		"name"		:"Relógio",
		"size"		:"3",
		"dimensions":"45",
		"icon"		:"../footage/clock.png"
	},
	{
		"name"		:"Lixeira",
		"size"		:"2",
		"dimensions":"48",
		"icon"		:"../footage/trash.png"
	}
];

var open = [
	{
		"name": "Chrome",
		"size": 4
	},
	{
		"name": "Spotify",
		"size": 2
	}
];

var App = React.createClass({

	handleClick: function (name, size) {
		return function () {
			open.push({"name": name, "size": size});
			console.log(open);
		}.bind(this);
	},

	render: function () {
		return(	
			<ul>
				{
					this.props.apps.map(function (apps, index) {
						return(
							<li key={index} onClick={this.handleClick(apps.name, apps.size)}>
								<img className="app" src={apps.icon} width={apps.dimensions} height={apps.dimensions}></img>
							</li>
						);
					}, this)
				}
			</ul>
		)
	}

});

var AppBar = React.createClass({

	render: function () {
		return(
			<div className="appbar">
				<div className="apps">
					<App apps={apps}/>
				</div>
			</div>
		);
	}

});

ReactDOM.render(
	<AppBar/>,
	document.getElementById('appbar')
);





function inner(size) {
	var inner = [];

	for (var i = 0; i < size; i++) {
		inner.push(<li>c{i}</li>);
	}

	return inner;
}

var Manager = React.createClass({

	getInitialState: function () {
		return{
			open: []
		}
	},

	componentWillMount: function () {
		this.setState({open: this.props.open});
	},

	componentWillReceiveProps: function (newProps) {
		this.setState({open: newProps.open});
	},

	render: function () {

		var oList = this.state.open.map(function (open, i) {
			return(
				<div>
					<ul className="outter-list">
						<li className="name"><div className="seta"><span>></span></div>{open.name}</li>
						<ul className="inner-list">
							{inner(open.size)}
						</ul>
					</ul>
				</div>
			);
		});

		return(
			<div className="window" id="drag">
				<div className="header">
					<span className="button" id="close"> </span>
					<span className="button" id="max"> </span>
					<span className="button" id="min"> </span>
				</div>

				<div className="container">
					<h1>Memória Virtual</h1>
					<p>Mostra como o sistema operacional ve a memória</p>

					<div className="content">
						{oList}
					</div>
				</div>
			</div>
		);
	}

});

ReactDOM.render(
	<Manager open={open}/>,
	document.getElementById('manager')
);