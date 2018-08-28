import React,{Component} from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';

import API	from './services/api';
import st	from './services/storage';

import Main				from './components/main';
import Enter			from './components/enter';
import User				from './components/user';
import ValueProposal	from './components/value_proposal';
import Expert			from './components/expert';

import Header 			from './components/header';
import Footer 			from './components/footer';

// Узнаем данные о себе
if(st.id && !st.we) API('/user/get',{id:st.id}).then(data => st.set('user',data.response));

var routes = [
	<Route key="1" exact path='/'				component={Main} />,
	<Route key="2" exact path='/enter'			component={Enter} />,
	<Route key="3" exact path='/user'			component={User} />,
	<Route key="4" exact path='/value_proposal'	component={ValueProposal} />,
	<Route key="5" exact path='/expert'			component={Expert} />,
];

export default () => {
	return (
		!st.we && window.location.pathname!='/enter'
		? <Redirect to="/enter" />
		: <Switch>{routes}</Switch>
	);
}
