import React,{Component} from 'react';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';

import Layout from './layout';

export default class Registration extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	change_to_login = () => {
		this.props.change_page('login');
	}

	render() {
		return <Layout/>;
	}
}
