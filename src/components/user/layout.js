import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => (
	<div className="app">
		<header className="app_header">
			<h1 className="app_title">Юзер</h1>
		</header>
		<div className="content">
			<p>Привет %username%</p>
		</div>
	</div>
);
