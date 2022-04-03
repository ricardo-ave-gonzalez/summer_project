import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
    faUser,
    faComment
} from '@fortawesome/free-solid-svg-icons';

import BasicModal from '../../components/Modal/BasicModal'
import SignUpForm from '../../components/SignUpForm';
import SignInForm  from '../../components/SignInForm/SignInForm';
import LogoPen from '../../assets/png/logo-pen.png';
import { useAuth0 } from "@auth0/auth0-react";
//import LogoBlanco from '../../assets/png/logo-white.png'
//import Logo from '../../assets/png/logo.png'

import "./SignInSignUp.scss";

export default function SignInSignUp(props) {
    const {setrefreshCheckLogin} = props
    const [mostrarModal, setMostrarModal] = useState(false);
    const [contenidoModal, setContenidoModal] = useState(null);

    const abrirModal = content => {
        setMostrarModal(true);
        setContenidoModal(content);
    }

    return (
        <>
            <Container className="signin-signup" fluid>
                <Row>
                    <LeftComponent />
                    <RightComponent 
                        abrirModal={abrirModal}
                        setMostrarModal={setMostrarModal}
                        setrefreshCheckLogin={setrefreshCheckLogin}
                    />
                </Row>
            </Container>

            <BasicModal
                show={mostrarModal}
                setShow={setMostrarModal}
            >
            {contenidoModal}
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
                    Sigue lo que te gusta
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

function RightComponent(props) {
    const { loginWithRedirect } = useAuth0();
    const { abrirModal, setMostrarModal, setrefreshCheckLogin } = props;
    
    return (
        <Col className="signin-signup__right" xs={6}>
            <div>
                <img src={LogoPen} alt="logoBlanco" />
                <h2>Mira lo que está pasando en el mundo...</h2>
                <Button
                    variant="primary"
                    onClick={() => abrirModal(<SignUpForm setMostrarModal={setMostrarModal} />)}
                >Regístrate</Button>
                <Button 
                    variant="outline-primary"
                    onClick={() => abrirModal(<SignInForm setrefreshCheckLogin={setrefreshCheckLogin}/>)}
                    >Iniciar sesión</Button>
                <Button 
                    variant="outline-primary"
                    onClick={() => loginWithRedirect()}
                    >Twitter</Button>    
            </div>
        </Col>
    )
}