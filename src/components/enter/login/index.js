import React,{Component} from 'react';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';

import Layout from './layout';

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	change_to_registration = () => {
		this.props.change_page('registration');
	}

	render() {
		return <Layout/>;
	}
}
