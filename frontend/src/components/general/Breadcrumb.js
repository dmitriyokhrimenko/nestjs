import React from "react";

export const Breadcrumb = (props = {}) => {
    return (
        <li className="breadcrumb-item"><a href={props.href}>{props.children}</a></li>
    )
};