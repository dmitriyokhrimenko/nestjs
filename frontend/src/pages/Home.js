import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Image, Button, Container } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import GitHubButton from 'react-github-btn';

import { Routes } from "../routes";
import ThemesbergLogoIcon from "../assets/img/themesberg.svg";

export default () => {
	return (
		<section className="section-header overflow-hidden pt-5 pt-lg-6 pb-9 pb-lg-12 bg-primary text-white" id="home">
			<Container>
				<section className="section-header overflow-hidden pt-5 pt-lg-6 pb-9 pb-lg-12 bg-primary text-white" id="home">
					<Container>
						<Row>
							<Col xs={12} className="text-center">
								<div className="react-big-icon d-none d-lg-block"><span className="fab fa-react"></span></div>
								<h1 className="fw-bolder text-secondary">Volt React Dashboard</h1>
								<p className="text-muted fw-light mb-5 h5">Open source powered by React.js and Bootstrap 5</p>
								<div className="d-flex align-items-center justify-content-center">
									<Button variant="secondary" as={Link} to={Routes.DashboardOverview.path} className="text-dark me-3">
										Explore dashboard <FontAwesomeIcon icon={faExternalLinkAlt} className="d-none d-sm-inline ms-1" />
									</Button>
									<GitHubButton className="mt-lg-2" href="https://github.com/themesberg/volt-react-dashboard" data-size="large" data-show-count="true" aria-label="Star themesberg/volt-react-dashboard on GitHub">Star</GitHubButton>
								</div>
								<div className="d-flex justify-content-center flex-column mb-6 mb-lg-5 mt-5">
									<div className="text-center">
										<a href="https://themesberg.com" target="_blank">
											<Image src={ThemesbergLogoIcon} height={25} width={25} className="mb-3" alt="Themesberg Logo" />
											<p className="text-muted font-small m-0">A Themesberg production</p>
										</a>
									</div>
								</div>
							</Col>
						</Row>
						<figure className="position-absolute bottom-0 left-0 w-100 d-none d-md-block mb-n2">
							<svg className="fill-soft" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 185.4">
								<path d="M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z" />
							</svg>
						</figure>
					</Container>
				</section>
				<figure className="position-absolute bottom-0 left-0 w-100 d-none d-md-block mb-n2">
					<svg className="fill-soft" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 185.4">
						<path d="M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z" />
					</svg>
				</figure>
			</Container>
		</section>
	);
};
