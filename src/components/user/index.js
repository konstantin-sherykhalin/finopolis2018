import React,{Component} from 'react';

import API	from '../../services/api';
import st	from '../../services/storage';

import Layout from './layout';

export default class User extends Component {
	constructor(props) {
		super(props);

		this.state = {
			we: st.we,
		};
	}

	async componentDidMount() {
		// Узнаем данные о себе
		var {response,error} = await API('/user/get',{id:st.id});
		if(response) {
			await this.setState({we:response});
			st.set('user',response);
		}
	}

	render() {
		return <Layout we={this.state.we}/>;
	}
}
