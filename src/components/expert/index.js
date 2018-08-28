import React,{Component} from 'react';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';

import API from '../../services/api';

import Layout from './layout';

export default class Expert extends Component {
	constructor(props) {
		super(props);

		this.state = {project_list: {}};
	}
	async componentDidMount() {
		let {response,error} = await API('/expert/project_list');
		if (response)
			this.setState({project_list: response});
	}
	render() {
		return <Layout/>;
	}
}
