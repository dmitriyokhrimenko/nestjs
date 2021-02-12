import React from "react";
import DashboardOverview from "../pages/dashboard/DashboardOverview";
import Sidebar from "../components/Sidebar";
import {Route, Switch} from "react-router-dom";
import ProductsList from "../components/products/ProductsList";
import Navbar from "../components/Navbar";

export default (props = {}) => {
	return (
		<>
			<main className="content">
				<Navbar/>
				<Sidebar/>
				<Switch>
					<Route path='/admin/products'>
						<ProductsList/>
					</Route>
					<Route path='/' component={DashboardOverview} />
				</Switch>
			</main>
		</>
	);
};
