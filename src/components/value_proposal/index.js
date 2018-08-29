import React,{Component} from 'react';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';

import API from '../../services/api';

import Layout from './layout';

export default class ValueProposal extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	async componentDidMount() {
		var {response,error} = await API('/value_proposal/get',{"id": this.state.id});
		if(response) {
			this.setState({...response});
		}
	}
	render() {
		return <Layout {...this.state} />;
	}
}
