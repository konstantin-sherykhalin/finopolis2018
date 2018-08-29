import React from 'react';
import {Link} from 'react-router-dom';

import './style.css';

export default (props) => props.we ? (
	<div className="content">
		<div className="menu">
		</div>
		<div className="component">
		{props.stage.map(stage => stage ? (
			<div className="stage_area">
				<div className="stage_title">
					<div className="stage_title_text">{stage.title}</div>
					<div className="stage_title_status">Выполнено на {stage.completed}%</div>
				</div>
				<div className="stage_steps">
				{stage.step.map(step => step ? (
					<Link style={{textDecoration:'none'}} to="/value_proposal"><div className="step_area" style={props.status[step.status].style}>
						<div className="step_title">{step.title}</div>
						<div className="step_status">{props.status[step.status].text}</div>
					</div></Link>
				) : null)}
				</div>
			</div>
		) : null)}
		</div>
	</div>
) : null;
