import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container, Breadcrumb, Table, Button } from 'react-bootstrap';
import config from '../../config'
import API from '../../api';
import {Breadcrumbs} from "../general/Breadcrumbs";
import {Routes} from "../../routes";

export default (props = {}) => {
	let apiUrl = config.apiUrl;
	const [users, setUsers] = useState([]);
	useEffect(() => {
		API.get(apiUrl + '/users')
			.then(res => {
				setUsers(res.data)
			})
	}, []);

	let bcrumbItems = props.bcrumbItems;
	// bcrumbItems.push({
	// 		link: Routes.Products.path,
	// 		title: 'Products'
	// });

	return (
		<>
			<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
				<Container fluid className='p-0'>
					{/*<Breadcrumbs bcrumbItems={bcrumbItems}/>*/}
					<div className={'row'}>
						<div className={'d-grid gap-2 d-md-flex justify-content-md-end'}>
							<Link className="btn btn-success" to={Routes.CreateProduct.path}>Create product</Link>
						</div>
					</div>
					<Row>
						{users.length ?
							<Table>
								<thead className="thead-light">
								<tr>
									<th className="border-0">Id</th>
									<th className="border-0">Login</th>
									<th className="border-0">Email</th>
									<th className="border-0">Password</th>
									<th className="border-0">Birthday</th>
								</tr>
								</thead>
								<tbody>
								{users.map(user => {
									return (
										<tr key={user.id}>
											<td className="border-0">
												{user.id}
											</td>
											<td className="border-0 fw-bold">{user.login}</td>
											<td className="border-0 text-danger">
												{user.email}
											</td>
											<td>{user.password}</td>
										</tr>)
								})}
								</tbody>
							</Table>
						:
							<h4>Nothing found</h4>
						}
					</Row>
				</Container>
			</div>
		</>
	)
}