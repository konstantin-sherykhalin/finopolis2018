import React,{Component} from 'react';

import API			from '../../services/api';
import global_error	from '../../services/global_error';

import Layout from './layout';

export default class Expert extends Component {
	constructor(props) {
		super(props);

		this.state = {
		    count: 1932,
		    items: [
		        {
		            id: 393,
		            title: 'Яндекс',
		            description: 'Система поиска по тексту',
		            user_id: 153,
		            update_timestamp: 1312743206000,
		            state: 0
		        },
		        {
		            id: 384,
		            title: 'ВКонтакте',
		            description: 'Социальная сеть',
		            user_id: 294,
		            update_timestamp: 1500743206000,
		            state: 1
		        },
		        {
		            id: 359,
		            title: 'Путеводитель по инновациям',
		            description: 'Акселератор стартапов',
		            user_id: 329,
		            update_timestamp: 1513743206000,
		            state: -1
		        },
		    ]
		};
	}

	async componentDidMount() {
		/*
		var {response,error} = await API('/expert/project_list',{rev:1});
		if(response) this.setState(response);
		*/
	}

	status = {
		'-1': {
			style: {
				borderTopColor: '#ddd',
				background: '#808080', color: '#fff',
			},
			text: 'бездействует',
		},
		'0': {
			style: {
				borderTopColor: '#777',
				background: '#fc0', color: '#fff',
			},
			text: 'нужна проверка',
		},
		'1': {
			style: {
				borderTopColor: '#777',
				background: '#2d0', color: '#fff',
			},
			text: 'в работе',
		},
	}

	render() {
		return <Layout {...this.state} status={this.status} />
	}
}
