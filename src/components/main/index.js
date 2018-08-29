import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';

import API			from '../../services/api';
import global_error	from '../../services/global_error';
import st			from '../../services/storage';

import Layout from './layout';

export default class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			error: [],
		};
	}
	componentDidMount () {
		this.state.error.length ?
		setTimeout(_ => this.setState({error: []}),5000)
		: null
	}
	render() {
		return (
		<div>
		{
			this.state.error.length ?
			(

			<div className="error">
				<p style={{textAlign: 'center'}}>{this.state.error}</p>
			</div>

			) : null
		}
			<Layout/>
		</div>
		);
	}
}
