import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';

import API			from '../../services/api';
import global_error	from '../../services/global_error';
import st			from '../../services/storage';

import Layout from './layout';

export default class ValueProposal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			next: false,
		};
	}

	async componentDidMount() {
		var {response,error} = await API('/value_proposal/get',{id:this.state.id});
		if(response) this.setState(response);
	}

	set = (field,value) => {
		this.setState({[field]:value});
	}

	send = async () => {
		if(
			1
			// this.state.name.length &&
			// this.state.type.length &&
			// this.state.audience.length &&
			// this.state.pain.length &&
			// this.state.solution.length &&
			// this.state.advantage.length
		) {
			if(this.state.id) {
				let {response,error} = await API('/value_proposal/update',{id:this.state.id,user_id:st.we.id,...this.state});
				if(response) this.setState({next:1});
			} else {
				let {response,error} = await API('/value_proposal/send',{user_id:st.we.id,...this.state});
				if(response) this.setState({next:1});
			}
		}
	}

	render() {
		return (
			this.state.next
			? <Redirect to="/user" />
			: <Layout {...this.state} send={this.send} />
		);
	}
}
