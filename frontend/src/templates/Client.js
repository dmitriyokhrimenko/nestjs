import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Card, Image, Button, Container, Navbar, Nav } from '@themesberg/react-bootstrap';
import { Route, Switch, Link, useParams } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { Routes } from "../routes";
import ThemesbergLogo from "../assets/img/themesberg-logo.svg";
import ReactHero from "../assets/img/technologies/react-hero-logo.svg";


import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import Lock from "../pages/Lock";
import NotFoundPage from "../pages/NotFound";
import ServerError from "../pages/ServerError";



export default (query) => {
	let params = useParams();
	console.log(params)
	return (
		<>
			<Navbar variant="dark" expand="lg" bg="dark" className="navbar-transparent navbar-theme-primary sticky-top">
				<Container className="position-relative justify-content-between px-3">
					<Navbar.Brand as={HashLink} to="#home" className="me-lg-3 d-flex align-items-center">
						<Image src={ReactHero} />
						<span className="ms-2 brand-text d-none d-md-inline">Volt React</span>
					</Navbar.Brand>

					<div className="d-flex align-items-center">
						<Navbar.Collapse id="navbar-default-primary">
							<Nav className="navbar-nav-hover align-items-lg-center">
								<Link className="nav-link" to="/signin">SignIn</Link>
								<Link className="nav-link" to="/signup">SignUp</Link>
								<Link className="nav-link" to="/forgotpassword">Forgot password</Link>
								<Link className="nav-link" to="/resetpassword">Reset password</Link>
							</Nav>
						</Navbar.Collapse>
						<Button as={HashLink} to="#download" variant="outline-white" className="ms-3"><FontAwesomeIcon icon={faDownload} className="me-1" /> Download</Button>
					</div>
				</Container>
			</Navbar>

					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/signin' component={Signin} />
						<Route exact path='/signup' component={Signup} />
						<Route exact path='/forgotpassword' component={ForgotPassword} />
						<Route exact path='/resetpassword' component={ResetPassword} />
						<Route exact path='/lock' component={Lock} />
						<Route exact path='/notfound' component={NotFoundPage} />
						<Route exact path='/servererror' component={ServerError} />

						{/*/!* pages *!/*/}
						{/*<RouteWithSidebar exact path={Routes.DashboardOverview.path} component={DashboardOverview} />*/}
						{/*<RouteWithSidebar exact path={Routes.Upgrade.path} component={Upgrade} />*/}
						{/*<RouteWithSidebar exact path={Routes.Transactions.path} component={Transactions} />*/}
						{/*<RouteWithSidebar exact path={Routes.Settings.path} component={Settings} />*/}
						{/*<RouteWithSidebar exact path={Routes.BootstrapTables.path} component={BootstrapTables} />*/}

						{/*/!* components *!/*/}
						{/*<RouteWithSidebar exact path={Routes.Accordions.path} component={Accordion} />*/}
						{/*<RouteWithSidebar exact path={Routes.Alerts.path} component={Alerts} />*/}
						{/*<RouteWithSidebar exact path={Routes.Badges.path} component={Badges} />*/}
						{/*<RouteWithSidebar exact path={Routes.Breadcrumbs.path} component={Breadcrumbs} />*/}
						{/*<RouteWithSidebar exact path={Routes.Buttons.path} component={Buttons} />*/}
						{/*<RouteWithSidebar exact path={Routes.Forms.path} component={Forms} />*/}
						{/*<RouteWithSidebar exact path={Routes.Modals.path} component={Modals} />*/}
						{/*<RouteWithSidebar exact path={Routes.Navs.path} component={Navs} />*/}
						{/*<RouteWithSidebar exact path={Routes.Navbars.path} component={Navbars} />*/}
						{/*<RouteWithSidebar exact path={Routes.Pagination.path} component={Pagination} />*/}
						{/*<RouteWithSidebar exact path={Routes.Popovers.path} component={Popovers} />*/}
						{/*<RouteWithSidebar exact path={Routes.Progress.path} component={Progress} />*/}
						{/*<RouteWithSidebar exact path={Routes.Tables.path} component={Tables} />*/}
						{/*<RouteWithSidebar exact path={Routes.Tabs.path} component={Tabs} />*/}
						{/*<RouteWithSidebar exact path={Routes.Tooltips.path} component={Tooltips} />*/}
						{/*<RouteWithSidebar exact path={Routes.Toasts.path} component={Toasts} />*/}

						{/*/!* documentation *!/*/}
						{/*<RouteWithSidebar exact path={Routes.DocsOverview.path} component={DocsOverview} />*/}
						{/*<RouteWithSidebar exact path={Routes.DocsDownload.path} component={DocsDownload} />*/}
						{/*<RouteWithSidebar exact path={Routes.DocsQuickStart.path} component={DocsQuickStart} />*/}
						{/*<RouteWithSidebar exact path={Routes.DocsLicense.path} component={DocsLicense} />*/}
						{/*<RouteWithSidebar exact path={Routes.DocsFolderStructure.path} component={DocsFolderStructure} />*/}
						{/*<RouteWithSidebar exact path={Routes.DocsBuild.path} component={DocsBuild} />*/}
						{/*<RouteWithSidebar exact path={Routes.DocsChangelog.path} component={DocsChangelog} />*/}

						{/*<Redirect to={Routes.NotFound.path} />*/}
					</Switch>
			<footer className="footer py-6 bg-dark text-white">
				<Container>
					<Row>
						<Col md={4}>
							<Navbar.Brand as={HashLink} to="#home" className="me-lg-3 mb-3 d-flex align-items-center">
								<Image src={ReactHero} />
								<span className="ms-2 brand-text">Volt React</span>
							</Navbar.Brand>
							<p>Volt React is a free and open source admin dashboard template powered by React.js and Bootstrap 5.</p>
						</Col>
						<Col xs={6} md={2} className="mb-5 mb-lg-0">
							<span className="h5">Themesberg</span>
							<ul className="links-vertical mt-2">
								<li><Card.Link target="_blank" href="https://themesberg.com/blog">Blog</Card.Link></li>
								<li><Card.Link target="_blank" href="https://themesberg.com/products">Products</Card.Link></li>
								<li><Card.Link target="_blank" href="https://themesberg.com/about">About Us</Card.Link></li>
								<li><Card.Link target="_blank" href="https://themesberg.com/contact">Contact Us</Card.Link></li>
							</ul>
						</Col>
						<Col xs={6} md={2} className="mb-5 mb-lg-0">
							<span className="h5">Other</span>
							<ul className="links-vertical mt-2">
								<li>
									<Card.Link as={Link} to={Routes.DocsQuickStart.path} target="_blank">Getting started</Card.Link>
								</li>
								<li><Card.Link as={Link} to={Routes.DocsChangelog.path} target="_blank">Changelog</Card.Link></li>
								<li><Card.Link target="_blank" href="https://themesberg.com/licensing">License</Card.Link></li>
							</ul>
						</Col>
						<Col xs={12} md={4} className="mb-5 mb-lg-0">
							<span className="h5 mb-3 d-block">Subscribe</span>
							<form action="#">
								<div className="form-row mb-2">
									<div className="col-12">
										<input type="email" className="form-control mb-2" placeholder="example@company.com" name="email" aria-label="Subscribe form" required />
									</div>
									<div className="col-12">
										<button type="submit" className="btn btn-secondary text-dark shadow-soft btn-block" data-loading-text="Sending">
											<span>Subscribe</span>
										</button>
									</div>
								</div>
							</form>
							<p className="text-muted font-small m-0">We’ll never share your details. See our <Card.Link className="text-white" href="#">Privacy Policy</Card.Link></p>
						</Col>
					</Row>
					<hr className="bg-gray my-5" />
					<Row>
						<Col className="mb-md-2">
							<Card.Link href="https://themesberg.com" target="_blank" className="d-flex justify-content-center">
								<Image src={ThemesbergLogo} height={35} className="d-block mx-auto mb-3" alt="Themesberg Logo" />
							</Card.Link>
							<div className="d-flex text-center justify-content-center align-items-center" role="contentinfo">
								<p className="font-weight-normal font-small mb-0">Copyright © Themesberg 2019-<span className="current-year">2021</span>. All rights reserved.</p>
							</div>
						</Col>
					</Row>
				</Container>
			</footer>
		</>
	);
};
