import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
    faUser,
    faComment
} from '@fortawesome/free-solid-svg-icons';

import BasicModal from '../../components/Modal/BasicModal'
import LogoBlanco from '../../assets/png/logo-white.png'
//import Logo from '../../assets/png/logo.png'

import "./SignInSignUp.scss";

export default function SignInSignUp() {
    const [mostrarModal, setMostrarModal] = useState(true);
    const [contenidoModal, setContenidoModal] = useState(null);

    return (
        <>
            <Container className="signin-signup" fluid>
                <Row>
                    <LeftComponent />
                    <RightComponent />
                </Row>
            </Container>

            <BasicModal 
                show={mostrarModal}
                setShow={setMostrarModal}
            >
                <div><h2>Contenido de Modal</h2></div>
            </BasicModal>
        </>
    );
}


function LeftComponent() {
    return (
        <Col className="signin-signup__left" xs={6}>
            {/* <img src={Logo} alt="Logo" /> */}
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
            <div>
                <img src={LogoBlanco} alt="logoBlanco" />
                <h2>Mira lo que está pasando en el mundo...</h2>
                <Button variant="primary">Regístrate</Button>
                <Button variant="outline-primary">Iniciar sesión</Button>
            </div>
        </Col>
    )
}