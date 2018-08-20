import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom';

import MainComponent		from './components/main';

var routes = [
	<Route key="1" exact {...{path:'/',			component:MainComponent	}} />,
];

export default () => <Switch>{routes}</Switch>
