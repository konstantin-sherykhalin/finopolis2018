import React,{Component} from 'react';

import Layout from './layout';

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			page: 'login',
			error: [],
		};
	}

	change_page = (page) => {
		this.setState({page});
	}
	componentDidMount () {
		this.state.error.length ?
		setTimeout(_ => this.setState({error: []}),5000)
		: null
	}
	render() {
		return (
		<div>
		{
			this.state.error.length ?
			(
			<div className="error">
				<p style={{textAlign: 'center'}}>{this.state.error}</p>
			</div>
			) : null
		}
			<Layout page={this.state.page} change_page={this.change_page} />
		</div>
		);
	}
}
