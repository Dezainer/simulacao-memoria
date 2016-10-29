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

var App = React.createClass({

	render: function () {
		return(	
			<ul>
				{
					this.props.apps.map(function (apps, i) {
						return(
							<li key={i}>
								<img className="app" src={apps.icon} width={apps.dimensions} height={apps.dimensions}></img>
							</li>
						);
					})
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