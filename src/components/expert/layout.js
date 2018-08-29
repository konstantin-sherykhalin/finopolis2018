import React from 'react';
import {Link} from 'react-router-dom';

// import './style.css';

export default (props) => (
	<div className="content">
		<div className="menu">
			<Link to="/user"><span>Смотреть как пользователь</span></Link>
			<Link to="/expert"><span className='selected'>Смотреть как эксперт</span></Link>
		</div>
		<div className="component">
		{props.items.map(row => (
			<div className="stage_area">
				<div className="stage_title" style={props.status[row.state].style}>
					<div className="stage_title_text">{row.title}</div>
					<div className="stage_title_status">{props.status[row.state].text}</div>
				</div>
			</div>
		))}
		</div>
	</div>
);
