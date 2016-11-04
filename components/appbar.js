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

// var open = [
// 	{
// 		"name": "Chrome",
// 		"size": 4
// 	},
// 	{
// 		"name": "Spotify",
// 		"size": 2
// 	}
// ];

var App = React.createClass({

	render: function () {
		return(	
			<ul>
				{
					this.props.apps.map(function (apps, index) {
						return(
							<li key={index} onClick={this.props.add(apps.name, apps.size)}>
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
					<App apps={apps} add={this.props.addApp}/>
				</div>
			</div>
		);
	}

});

function inner(size) {
	var inner = [];

	for (var i = 0; i < size; i++) {
		inner.push(<li>c{i}</li>);
	}

	return inner;
}

var Manager = React.createClass({

	render: function () {

		var oList = this.props.open.map(function (open, i) {
			return(
				<div>
					<ul className="outter-list">
						<li className="name">
							<div className="seta"><span>></span></div>
							{open.name}
							<span className="end-task" onClick={this.props.end(open.name, open.size)}>X</span>
						</li>
						<ul className="inner-list">
							{inner(open.size)}
						</ul>
					</ul>
				</div>
			);
		}, this);

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

var Main = React.createClass({

	getInitialState: function () {
		return{
			open: []
		}
	},

	addApp: function (name, size) {
		return function () {
			var open = this.state.open;
			open.push({"name": name, "size": size});
			this.setState({open: open});
		}.bind(this);
	},

	endTask: function (name, size) {
		return function () {
			var open = this.state.open;

			var removedName = open.filter(function (app) {
				return app.name !== name;
			});

			this.setState({open: removedName});
		}.bind(this);
	},

	render: function () {
		return(
			<div>
				<AppBar addApp={this.addApp} />
				<Manager open={this.state.open} end={this.endTask}/>
			</div>
		);
	}

});

ReactDOM.render(
	<Main/>,
	document.getElementById('main')
);