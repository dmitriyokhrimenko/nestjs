import React, {useEffect, useState} from "react";
import { Col, Row, Container, Breadcrumb, Table } from 'react-bootstrap';
import axios from 'axios';
import config from '../../config'
import API from '../../api';

export default () => {
	let apiUrl = config.apiUrl;
	const [users, setUsers] = useState([]);
	useEffect(() => {
		API.get(apiUrl + '/users')
			.then(res => {
				setUsers(res.data)
			})
	}, []);
	return (
		<>
			<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
				<Container fluid className='p-0'>
					<Row>
						<Col lg={6}>
							<Breadcrumb listProps={{ className: "breadcrumb-tertiary text-white" }}>
								<Breadcrumb.Item href="#home">Home</Breadcrumb.Item>
								<Breadcrumb.Item href="#library">Library</Breadcrumb.Item>
								<Breadcrumb.Item active>Data</Breadcrumb.Item>
							</Breadcrumb>
						</Col>
					</Row>
					<Row>
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
					</Row>
				</Container>
			</div>
		</>
	)
}