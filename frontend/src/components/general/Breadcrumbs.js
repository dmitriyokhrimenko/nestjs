import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Routes} from "../../routes";
import React from "react";
import {Breadcrumb} from "./Breadcrumb";


export const Breadcrumbs = (props = {}) => {
    return (
        <Row>
            <Col md={6}>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb breadcrumb-tertiary text-white">
                        {props.bcrumbItems.map(bcrumbItem => {
                            return <Breadcrumb key={bcrumbItem.title} href={bcrumbItem.link}>{bcrumbItem.title}</Breadcrumb>
                        })}
                    </ol>
                </nav>
            </Col>
            <Col md={{offset: 3, span: 3}}>
                <Link className="btn btn-success" to={Routes.CreateProduct.path}>Create product</Link>
            </Col>
        </Row>
    )
};