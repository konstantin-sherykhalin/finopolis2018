import React,{Component} from 'react';

import Layout from './layout';

export default class Error extends Component {
	constructor(props) {
		super(props);

		this.state = {
			list: [],
		};
	}

	async componentDidUpdate(prevProps,prevState,snapshot) {
		console.log(arguments);
	}

	render() {
		return <Layout {...this.state}/>;
	}
}
