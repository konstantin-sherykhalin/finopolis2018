import React,{Component} from 'react';

import API	from '../../services/api';
import st	from '../../services/storage';

import Layout from './layout';

export default class User extends Component {
	constructor(props) {
		super(props);

		this.state = {
			we: st.we,
<<<<<<< HEAD

			stage: [],
=======
			error: [],
			id_stage: 1,
			id_step: 1,
			stage: {},
			step: {},
>>>>>>> bb6ad193218f3a04497400bba4b6009800443cb9
		};
	}

	async componentDidMount() {
		// Узнаем данные о себе
		var {response,error} = await API('/user/get',{id:st.id});
		if(response) {
			await this.setState({we:response});
			st.set('user',response);
		}
<<<<<<< HEAD

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
	}

	render() {
		return <Layout {...this.state}/>;
=======
		
		
		let {response_stage,error_stage} = await API('/stage/get',{"id": this.state.id_stage})
		let {response_step,error_step} = await API('/step/get',{"id": this.state.id_step, "stage" : this.state.id_stage})
		if (response_stage) this.setState({stage: response_stage});
		else if(error_stage) this.setState({error: this.state.error.push(error.message)});
		if (response_step) this.setState({step: response_step});
		else if(error_step) this.setState({error: this.state.error.push(error.message)});
		
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
			<Layout we={this.state.we}/>
		</div>
		);
>>>>>>> bb6ad193218f3a04497400bba4b6009800443cb9
	}
}
