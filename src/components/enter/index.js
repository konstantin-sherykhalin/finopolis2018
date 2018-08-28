import React,{Component} from 'react';

import Layout from './layout';

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			page: 'login',
		};
	}

	change_page = (page) => {
		this.setState({page});
	}

	render() {
		return <Layout page={this.state.page} change_page={this.change_page} />;
	}
}
