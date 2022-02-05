import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
    faUser,
    faComment
} from '@fortawesome/free-solid-svg-icons';
import LogoBlanco from '../../assets/png/logo-white.png'
import Logo from '../../assets/png/logo.png'

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
        <Col className="signin-signup__left" xs={6}>
            <img src={Logo} alt="Logo" />
            <div>
                <h2>
                    <FontAwesomeIcon icon={faSearch} />
                    Sigue lo que te
                </h2>
                <h2>
                    <FontAwesomeIcon icon={faUser} />
                    Enterate de lo que se encuentra aqui..
                </h2>
                <h2>
                    <FontAwesomeIcon icon={faComment} />
                    únete a la conv..
                </h2>
            </div>
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