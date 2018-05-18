import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import kind from '@enact/core/kind';
import Button from '@enact/ui/Button';

// import css from './MainView.less';

const EnactKind = kind({
	name: 'EnactKind',
	render: () => {
		return (
			<Button>I'm an Enact UI Button</Button>
		);
	}
});

const MainView = kind({
	name: 'MainView',
	styles: {
		// css,
		className: 'mainView'
	},
	render: ({...rest}) => {
		return (
			<div {...rest}>
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<EnactKind />
			</div>
		);
	}
});

export default MainView;
