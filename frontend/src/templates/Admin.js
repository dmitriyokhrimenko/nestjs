import React from "react";
import DashboardOverview from "../pages/dashboard/DashboardOverview";
import Sidebar from "../components/Sidebar";
import {Link, Route, Switch} from "react-router-dom";
import ProductsList from "../components/products/ProductsList";
import CreateProduct from "../components/products/CreateProduct";
import Navbar from "../components/Navbar";
import {Routes} from "../routes"
import '../scss/Admin.css';

export default (props = {}) => {
	let bcrumbItems = [{
		link: Routes.Admin.path,
		title: 'Dashboard'
	}]
	return (
		<>
			<main className="content">
				<Navbar/>
				<Sidebar/>
				<Switch>
					<Route path={Routes.CreateProduct.path}>
						<CreateProduct bcrumbItems={bcrumbItems}/>
					</Route>
					<Route path={Routes.Products.path}>
						<ProductsList bcrumbItems={bcrumbItems}/>
					</Route>
					<Route path='/' component={DashboardOverview} />
				</Switch>
			</main>
		</>
	);
};
