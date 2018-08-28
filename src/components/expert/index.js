import React,{Component} from 'react';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';

import API from '../../services/api';

import Layout from './layout';

export default class Expert extends Component {
	constructor(props) {
		super(props);

		this.state = {project_list: {}, error: []};
	}
	async componentDidMount() {
		let {response,error} = await API('/expert/project_list');
		if (response)
			this.setState({project_list: response});
		else if(error) this.setState({error: this.state.error.push(error.message)});
		
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
