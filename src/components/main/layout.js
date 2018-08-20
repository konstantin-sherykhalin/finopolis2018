import React from 'react';
import {Link} from 'react-router-dom';

import logo from './logo.svg';
import './style.css';

export default (props) => (
	<div className="app">
		<header className="app_header">
			<img className="app_logo" src={logo} />
			<h1 className="app_title">Финополис 2018</h1>
		</header>
		<div className="content">
			<p>Здесь будет приложение.</p>
		</div>
	</div>
);
