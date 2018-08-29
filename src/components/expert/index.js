import React,{Component} from 'react';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';

import API from '../../services/api';

import Layout from './layout';

export default class Expert extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
			items: [],
		};
	}

	async componentDidMount() {
		var {response,error} = await API('/expert/project_list',{rev:1});
		if(response) {
			this.setState({...response});
		}
	}

	render() {
		return <Layout {...this.state} />;
	}
}
