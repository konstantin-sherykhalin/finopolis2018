import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => (

	<div className="wall">	
		<header className="app_header">
			<h1 className="app_title">Вход</h1>
		</header>
	
		<div className="first">
			<input className="inputs" type="text" placeholder="Логин/Телефон"/><br/>
			<input className="inputs" type="text" placeholder="Пароль"/>
		</div>
			<div className="button">
				<input className="inputs" style={{backgroundColor: '#ff0',color: '#fff'}} type="button" value="Войти"/>
			</div>
		
		
	</div>
);
