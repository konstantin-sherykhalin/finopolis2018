import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => (
	<div className="app">
		<header className="app_header">
			<h1 className="app_title">Финополис 2018</h1>
		</header>
		<div className="content">
			<div className="wall">
				<div>
					<div className="Line">
						<table className="field">
							<tr>
								<td className="boxLeft">Customer Development</td>
								<td className="boxRight">Выполнено на 5%</td>
							</tr>
						</table>
					</div>
					<div className="Line"> 
						<table className="field">
							<tr>
								<td className="boxLeft">Ценностное предложение</td>
								<td className="boxRight">Готов</td>
							</tr>
						</table>
					</div>
					<div className="Line">
						<table className="field">
							<tr>
								<td className="boxLeft">Подтверждение проблемы</td>
								<td className="boxRight">Нужно заполнить</td>
							</tr>
						</table>
					</div>
					<div className="Line">
						<table className="field">
							<tr>
								<td className="boxLeft">Моделирование экономики</td>
								<td className="boxRight">Закрыто</td>
							</tr>
						</table>
					</div>
					<div className="Line">
						<table className="field">
							<tr>
								<td className="boxLeft">MVP</td>
								<td className="boxRight">Статус</td>
							</tr>
						</table>
					</div>
					<div className="Line">
						<table className="field">
							<tr>
								<td className="boxLeft">Подтверждение решения</td>
								<td className="boxRight">Статус</td>
							</tr>
						</table>
					</div>
					<div className="Line">
						<table className="field">
							<tr>
								<td className="boxLeft">Первая продаже</td>
								<td className="boxRight">Статус</td>
							</tr>
						</table>
					</div>
			    </div>
					<div style={{margin: '0.01%'}}>
						<table className="field">
							<tr>
								<td className="boxLeft">Тестирование каналов</td>
								<td className="boxRight">Откроется после CustDev</td>
							</tr>
						</table>
					</div>
			</div>
		</div>
	</div>
);
