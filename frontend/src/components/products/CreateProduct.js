import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container, Breadcrumb, Table, Button, Form } from 'react-bootstrap';
import config from '../../config'
import API from '../../api';
import {Routes} from "../../routes";
import {Breadcrumbs} from "../general/Breadcrumbs";

export default (props = {}) => {
	let apiUrl = config.apiUrl;
	const [users, setUsers] = useState([]);
	// useEffect(() => {
	// 	API.get('/users')
	// 		.then(res => {
	// 			setUsers(res.data)
	// 		})
	// }, []);

	const handleChange = (data) => {
		console.log(data.currentTarget)
	};


	const storeProduct = () => {

		API.post(Routes.StoreProduct.path, {})
			.then(res => {
				setUsers(res.data)
			});
		console.log(6436346)
	};

	return (
		<>
			<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
				<div className={"container-fluid p-0"}>
					<div className={'row'}>
						<div className={'col-md-6 offset-3'}>
							<h1>
								Create new product
							</h1>
							<br/>
						</div>
					</div>
					<div className={'row'}>
						<div className={'col-md-9'}>
							<form action={API.post(Routes.StoreProduct.path)} onChange={handleChange}>
								<div className="form-group row">
									<label className="col-sm-2 col-form-label">Product name</label>
									<div className="col-sm-10">
										<input type="productName" className="form-control" placeholder="Product name"/>
									</div>
								</div>
								<div className="form-group row">
									<label className="col-sm-2 col-form-label">Slug</label>
									<div className="col-sm-10">
										<input type='text' name="slug" className="form-control" placeholder="slug"/>
									</div>
								</div>
								<div className="form-group row">
									<label className="col-sm-2 col-form-label">Vendor</label>
									<div className="col-sm-10">
										<input type='text' name="vendor" className="form-control" placeholder="Vendor"/>
									</div>
								</div>
								<div className="form-group row">
									<label className="col-sm-2 col-form-label">Price</label>
									<div className="col-sm-10">
										<input type='text' name="price" className="form-control" placeholder="price"/>
									</div>
								</div>
								<div className="form-group row">
									<label className="col-sm-2 col-form-label">Old price</label>
									<div className="col-sm-10">
										<input type='text' name="oldPrice" className="form-control" placeholder="Old price"/>
									</div>
								</div>
								<div className="form-group row">
									<label className="col-sm-2 col-form-label">Quantity</label>
									<div className="col-sm-10">
										<input type='text' name="quantity" className="form-control" placeholder="Quantity"/>
									</div>
								</div>
								<div className="form-group row">
									<div className="col-sm-2">Checkbox</div>
									<div className="col-sm-10">
										<div className="form-check">
											<input className="form-check-input" type="checkbox" id="gridCheck1"/>
												<label className="form-check-label" htmlFor="gridCheck1">
													Example checkbox
												</label>
										</div>
									</div>
								</div>
								<div className="form-group row">
									<div className={'col-md-2 offset-11'}>
										<button type="button" className="btn btn-primary" onClick={storeProduct}>Submit</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}