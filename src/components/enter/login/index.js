import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';

import API			from '../../../services/api';
import global_error	from '../../../services/global_error';
import st			from '../../../services/storage';

import Layout from './layout';

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			phone: '',
			pass: '',
			next: st.id,
			error: [],
		};
	}

	install_phone = ({target}) => {
		var phone = target.value;
		// Проверки на будущее
		// if(/^(\+)?(\d|\(|\)|\s|\-)*$/.test(phone))
		this.setState({phone});
	}
	install_pass = ({target}) => {
		var pass = target.value;
		// if(pass.length>5)
		this.setState({pass});
	}

	send = async () => {
		// if(!this.state.phone.length) {
		// 	alert("Введите номер телефона!");
		// 	return;
		// } else if(!this.state.pass.length) {
		// 	alert("Введите пароль!");
		// 	return;
		// }

		var {response,error} = await API('/user/login',{login:this.state.login,pass:this.state.pass});
		if(response) {
			console.log(response);
			st.set('user_id',response.user_id);
			this.setState({next:response});
		} else if(error) {
			global_error.process(error);
		}

		this.state.error.length ?
		setTimeout(_ => this.setState({error: []}),5000)
		: null
	}

	render() {
		return (
			this.state.next
			? <Redirect to="/user" />
			: <Layout {...this.state} {...this} />
		);
	}
}
