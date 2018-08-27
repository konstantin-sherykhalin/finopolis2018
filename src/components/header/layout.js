import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => (
	<div style={{textAlign: 'center',backgroundColor: 'aqua',}}>
	<header className="app_header">
	
			<h1 className="app_title">Финополис 2018</h1>
			<ul className="list">
				<li><Link to='/'>Главная</Link></li>
				<li><Link to='/enter'>Вход</Link></li>
				<li><Link to='/user'>Юзер</Link></li>
				<li><Link to='/value_proposal'>Ценовое предложение</Link></li>
				<li><Link to='/expert'>Эксперт</Link></li>
			</ul>
		</header>
	</div>
	
);
