import React from 'react';

export default (props) => (
	<div className="enter_area">
		<div className="enter_title">Регистрация</div>
		<div className="enter_field">
			<p>Логин/Телефон</p>
			<input type="text" placeholder="Введите ваш логин или номер телефона" onChange={props.install_phone} />
		</div>
		<div className="enter_field">
			<p>Имя</p>
			<input type="text" placeholder="Введите ваше имя" onChange={props.install_name} />
		</div>
		<div className="enter_field">
			<p>Фамилия</p>
			<input type="text" placeholder="Введите вашу фамилию" onChange={props.install_family} />
		</div>
		<div className="enter_field">
			<p>Пароль</p>
			<input type="password" placeholder="Введите пароль" onChange={props.install_pass} />
		</div>
		<div className="enter_submit">
			<button className="submit" onClick={props.send}>Зарегистрироваться</button>
		</div>
	</div>
);
