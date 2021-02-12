import React from "react";
import { Route, Switch } from 'react-router-dom';
import Client from "./Client";
import Admin from "./Admin";

export default () => {
	return (
		<div className="App">
			<Switch>
				<Route path='/admin' component={Admin} />
				<Route path='/' component={Client} />
			</Switch>
		</div>
	);
};
