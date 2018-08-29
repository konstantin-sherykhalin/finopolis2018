import React from 'react';

export default (props) => props.list.length ? (
	<div id="slide_errors_block">{props.list.map(row => (<div><h5>{row.title}</h5><p>{row.text}</p></div>))}</div>
) : null;
