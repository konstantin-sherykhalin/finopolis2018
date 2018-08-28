import React,{Component} from 'react';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';

import API	from '../../services/api';
import st	from '../../services/storage';

import Layout from './layout';

export default class User extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return <Layout we={st.we}/>;
	}
}
