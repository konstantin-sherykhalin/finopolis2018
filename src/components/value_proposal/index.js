import React,{Component} from 'react';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';

import API from '../../services/api';

import Layout from './layout';

export default class ValueProposal extends Component {
	constructor(props) {
		super(props);

		this.state = {value_proposal: {},id: 1, user_id: 1};
	}
	async componentDidMount() {
		let {response,error} = await API('/value_proposal/get',{"id": this.state.id});
		if (response) {
			let {response_update, error_update} = await API('/value_proposal/update',{"id" : this.state.id, "user_id" :this.state.user_id})
				if (response_update) this.setState({value_proposal: response_update})
		}
		else {
			{/*Для send нужно много данных в виде JSON, см. АПИ В1. В данном случае отправляется пустой объект*/}
			let {response_send, error_send} = await API('/value_proposal/send')
				this.setState({value_proposal: response_send});
		}
	}
	render() {
		return <Layout/>;
	}
}
