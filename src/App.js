import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom';

import Main				from './components/main';
import Enter			from './components/enter';
import User				from './components/user';
import ValueProposal	from './components/value_proposal';
import Expert			from './components/expert';

var routes = [
	<Route key="1" exact path='/'				component={Main} />,
	<Route key="2" exact path='/enter'			component={Enter} />,
	<Route key="3" exact path='/user'			component={User} />,
	<Route key="4" exact path='/value_proposal'	component={ValueProposal} />,
	<Route key="5" exact path='/expert'			component={Expert} />,
];

export default () => <Switch>{routes}</Switch>
