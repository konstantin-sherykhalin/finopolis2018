import React,{Component} from 'react';

import API			from '../../services/api';
import global_error	from '../../services/global_error';
import st			from '../../services/storage';

import Layout from './layout';

export default class User extends Component {
	constructor(props) {
		super(props);

		this.state = {
			we: st.we,
			stage: [
			    {
					id: 0,
					title: 'Исследование пользователей',
					completed: 5,
			        step: [
				        {
			                id: 0,
			                status: 1,
			                title: 'Ценностное предложение',
			            },
			            {
			                id: 1,
			                status: 0,
			                title: 'Подтверждение проблемы',
			            },
			            {
			                id: 2,
			                status: -1,
			                title: 'Моделирование экономики',
			            },
			            {
			                id: 3,
			                status: -1,
			                title: 'MVP',
			            },
			            {
			                id: 4,
			                status: -1,
			                title: 'Подтверждение решения',
			            },
			            {
			                id: 5,
			                status: -1,
			                title: 'Первая продажа',
			            },
			        ],
			    },
			    {
			        id: 0,
			        title: 'Тестирование каналов',
					completed: 0,
			        step: [],
			    }
			],
		};
	}

	async componentDidMount() {
		// Узнаем данные о себе
		var {response,error} = await API('/user/get',{id:st.id});
		if(response) {
			await this.setState({we:response});
			st.set('user',response);
		}

		/*
		var waiting = [];
		var stage = this.state.stage;
		for(let i=0; i<2; i++) {
			stage.push({step:[]});
			waiting.push(API('/stage/get',{id:i}).then(({response}) => stage[i] = Object.assign(stage[i],response)));
		}
		for(let i=0; i<6; i++) {
			waiting.push(API('/step/get',{id:i,stage:0}).then(({response}) => stage[0].step[i] = response));
		}
		await Promise.all(waiting);

		this.setState({stage});
		*/
	}

	status = {
		'-1': {
			style: {
				borderTopColor: '#ddd',
				background: '#808080', color: '#fff',
			},
			text: 'закрыто',
		},
		'0': {
			style: {
				borderTopColor: '#777',
				background: '#fc0', color: '#fff',
			},
			text: 'нужно заполнить',
		},
		'1': {
			style: {
				borderTopColor: '#777',
				background: '#2d0', color: '#fff',
			},
			text: 'готово',
		},
	}

	render() {
		return <Layout {...this.state} status={this.status} />;
	}
}
