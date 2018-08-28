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

var routes = [
	<Route key="1" exact path='/enter'			component={Enter} />,
	<Route key="2" exact path='/user'			component={User} />,
	<Route key="3" exact path='/value_proposal'	component={ValueProposal} />,
	<Route key="4" exact path='/expert'			component={Expert} />,
	<Route key="0" path='*'						component={Main} />,
];

export default () => {
	return (
		!st.id && window.location.pathname!='/enter'
		? <Redirect to="/enter" />
		: <Switch>{routes}</Switch>
	);
}
