import React from 'react';
import logo from '../logo.svg';
import '../App.css';

import kind from '@enact/core/kind';
import Button from '@enact/ui/Button';

import originalCss from '../App.css';
import css from './MainView.less';

const EnactKind = kind({
	name: 'EnactKind',
	styles: {
		css,
		className: 'button'
	},
	render: ({...rest}) => {
		return (
			<Button
				{...rest}
			>
				I'm an Enact UI Button
			</Button>
		);
	}
});

const MainView = kind({
	name: 'MainView',
	styles: {
		css,
		className: 'mainView'
	},
	computed: {
		className: ({className, styler}) => {
			return styler.append(originalCss.App);
		}
	},
	render: ({...rest}) => {
		return (
			<div {...rest}>
				<header className={originalCss['App-header']}>
					<img src={logo} className={originalCss['App-logo']} alt="logo" />
					<h1 className={originalCss['App-title']}>Welcome to React</h1>
				</header>
				<p className={originalCss['App-intro']}>
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<EnactKind />
			</div>
		);
	}
});

export default MainView;
