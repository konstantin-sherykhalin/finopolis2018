import React from 'react';
import {Link} from 'react-router-dom';

import './style.css';

export default (props) => (
	<div className="content">
		<div className="menu">
		</div>
		<div className="component">
			<div className="form_area">
				<div className="form_title">Ценностное предложение</div>
				<div className="form_field">
					<p>
						<input type="text" placeholder="Название продукта" onChange={({target}) => props.set('name',target.value)} /> &mdash;
						это <input type="text" style={{width:300}} placeholder="служба, приложение и т. д."
						onChange={({target}) => props.set('type',target.value)} />, которое помогает <input type="text" placeholder="сегмент ЦА"
						onChange={({target}) => props.set('audience',target.value)} /> решать <input type="text" placeholder="боль клиента"
						onChange={({target}) => props.set('pain',target.value)} /> при помощи <input type="text" style={{width:500}}
						placeholder="описать ваше решение, технологию" onChange={({target}) => props.set('solution',target.value)} /> и
						дает <input type="text" style={{width:540}} placeholder="выгода (ценность) для клиента в конкретных цифрах"
						onChange={({target}) => props.set('advantage',target.value)} />
					</p>
					{/*
					<p>Замените слова в описании:</p>
					<textarea rows="10">
						&lt;Название продукта&gt; &mdash; это &lt;служба, приложение и т. д.&gt;, которое помогает &lt;сегмент ЦА&gt; решать
						&lt;боль клиента&gt; при помощи &lt;описать вашу технологию&gt; и дает  &lt;выгода (ценность) для клиента в конкретных цифрах&gt;
					</textarea>
					<p>
						<mark onClick={_=>console.log(this)}>Название продукта</mark> &mdash; это служба, приложение и т. д.,
						которое помогает сегмент ЦА; решать боль клиента при помощи описать вашу технологию и дает выгода (ценность)
						для клиента в конкретных цифрах
					</p>
					*/}
				</div>
				<div className="form_submit">
					<button className="reject" onClick={_=>window.history.back()}>Отменить изменения</button>
					<button className="submit" onClick={props.send}>Отправить эксперту</button>
				</div>
			</div>
		</div>
	</div>
);
