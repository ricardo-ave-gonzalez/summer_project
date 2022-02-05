import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import "./SignInSignUp.scss";

export default function SignInSignUp() {
    return (
        <>
            <Container className="signin-signup" fluid>
                <Row>
                    <LeftComponent />
                    <RightComponent />
                </Row>
            </Container>
        </>
    );
}


function LeftComponent() {
    return (
        <Col className="signin-signup__left">
            <h2>componente izquierdo... </h2>
        </Col>
    )
}

function RightComponent() {
    return (
        <Col className="signin-signup__right" xs={6}>
            <h2>componente derecho... </h2>
        </Col>
    )
}