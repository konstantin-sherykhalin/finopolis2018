import React from 'react';

export default (props) => (
	<div className="enter_area">
		<div className="enter_title">Вход</div>
		<div className="enter_field">
			<p>Логин/Телефон</p>
			<input type="text" placeholder="Введите ваш логин или номер телефона" onChange={props.install_phone} />
		</div>
		<div className="enter_field">
			<p>Пароль</p>
			<input type="password" placeholder="Введите пароль" onChange={props.install_pass} />
		</div>
		<div className="enter_submit">
			<button className="reject" onClick={_=>alert("Ну так вспомните его!")}>Забыли пароль?</button>
			<button className="submit" onClick={props.send}>Войти</button>
		</div>
	</div>
);
