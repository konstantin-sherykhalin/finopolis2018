import React,{Component} from 'react';

import API			from '../../services/api';
import global_error	from '../../services/global_error';
import st			from '../../services/storage';

import Layout from './layout';

export default class User extends Component {
	constructor(props) {
		super(props);

		this.state = {
			we: st.we,
			stage: [],
		};
	}

	async componentDidMount() {
		// Узнаем данные о себе
		var {response,error} = await API('/user/get',{id:st.id});
		if(response) {
			await this.setState({we:response});
			st.set('user',response);
		}

		var waiting = [];
		var stage = this.state.stage;
		for(let i=0; i<2; i++) {
			stage.push({});
			waiting.push(API('/stage/get',{id:i}).then(({response}) => stage[i] = Object.assign(stage[i],response)));
		}
		stage[0].step = [];
		for(let i=0; i<6; i++) {
			waiting.push(API('/step/get',{id:i,stage:0}).then(({response}) => stage[0].step[i] = response));
		}
		await Promise.all(waiting);

		console.log(stage);
		this.setState({stage});

		console.log(global_error);
		global_error.throw("XSS","XDD");
	}

	render() {
		return <Layout {...this.state}/>;
	}
}
