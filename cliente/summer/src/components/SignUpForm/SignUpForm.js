import React from 'react'
import { Row, Col, Form, Button, Spinner} from 'react-bootstrap'

import "./SignUpForm.scss"

export default function SignUpForm(props) {
    const { setMostrarModal } = props

    const onSubmit = e => {
        e.preventDefault();
        setMostrarModal(false)
    }

    return (
        <div className="sign-up-form">
            <h2>Crea tu cuenta</h2>
            <Form onSubmit={onSubmit}>

                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control typo="text" placeholder="Nombre"/>
                        </Col>
                        <Col>
                            <Form.Control typo="password" placeholder="Contraseña"/>
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control typo="email" placeholder="Correo Electronico"/>
                        </Col>
                        <Col>
                            <Form.Control typo="password" placeholder="Repetir Contraseña"/>
                        </Col>
                    </Row>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Registrarse
                </Button>
            </Form>
        </div>
    );
}
