import React from 'react';
import logo from '../logo.svg';
import '../App.css';

import kind from '@enact/core/kind';
import Button from '@enact/zircon/Button';
import Toggleable from '@enact/ui/Toggleable';

import originalCss from '../App.css';
import css from './MainView.less';

const EnactKind = kind({
	name: 'EnactKind',
	styles: {
		css,
		className: 'button'
	},
	render: ({selected, ...rest}) => {
		return (
			<Button
				{...rest}
			>
				{`I'm an Enact Zircon Button: ${selected ? 'ON' : 'OFF'}`}
			</Button>
		);
	}
});

const ToggleButton = Toggleable({toggleProp: 'onTap'}, EnactKind);

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
				<ToggleButton />
			</div>
		);
	}
});

export default MainView;
