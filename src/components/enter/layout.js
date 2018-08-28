import React from 'react';

import './style.css';

import Login		from './login';
import Registration	from './registration';

export default (props) => {
	var component;
	if(props.page === 'login')	component = <Login/>;
	else						component = <Registration/>;

	return (
		<div className="container">
			<div className="top">
				<div className="line">
					<div className="left" />
					<div className="center" />
					<div className="right" />
				</div>
				<div className="menu">
					<span className={props.page=='login'	    ? 'selected' : ''} onClick={_=>props.change_page('login')}>Вход</span>
					<span className={props.page=='registration' ? 'selected' : ''} onClick={_=>props.change_page('registration')}>Регистрация</span>
				</div>
			</div>
			<div className="content">
				<div className="component">{component}</div>
			</div>
			<div className="bottom">
				<div className="dark" />
				<div className="line">
					<div className="left" />
					<div className="center" />
					<div className="right" />
				</div>
			</div>
		</div>
	);
}
