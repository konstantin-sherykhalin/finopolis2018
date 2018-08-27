import React from 'react';
import {Link} from 'react-router-dom';

import Login		from './login';
import Registration	from './registration';

export default (props) => {
	var component;
	if(props.page == 'login')	component = <Login			change_page={props.change_page} />;
	else						component = <Registration	change_page={props.change_page} />;

	return (
		<div className="app">
			<header className="app_header">
				<h1 className="app_title">Финополис 2018</h1>
			</header>
			<div className="content">{component}</div>
		</div>
	);
}
