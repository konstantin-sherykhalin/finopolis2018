import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';

import API	from '../../services/api';
import st	from '../../services/storage';

import Layout from './layout';

export default class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return <Layout/>;
	}
}
