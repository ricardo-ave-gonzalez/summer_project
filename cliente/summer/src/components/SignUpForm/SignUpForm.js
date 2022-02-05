import React, { useState } from 'react'
import { Row, Col, Form, Button, Spinner } from 'react-bootstrap'

import "./SignUpForm.scss"

export default function SignUpForm(props) {
    const { setMostrarModal } = props
    const [formData, setFormData] = useState(initialFormValue())

    const onSubmit = e => {
        e.preventDefault()
        setMostrarModal(false)

        console.log(formData)
    }

    /**
     * podemos centralizar todos en 
     * un onChange, SOLAMENTE si TODOS son del tipo 
     * input como en nuestro caso.
     * @param {*} e 
     */
    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

    return (
        <div className="sign-up-form">
            <h2>Crea tu cuenta</h2>
            <Form onSubmit={onSubmit} onChange={onChange}>

                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control
                                type="text"
                                placeholder="Nombre"
                                name="nombre"
                                /* onChange={e => 
                                    setFormData({ ...formData, nombre: e.target.value})
                                } */
                                defaultValue={formData.nombre}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="password" 
                                placeholder="Contraseña"
                                name="password"
                                /* onChange={e => 
                                    setFormData({ ...formData, password: e.target.value})
                                } */
                                defaultValue={formData.password}
                             />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control 
                                type="email" 
                                placeholder="Correo Electronico"
                                name="email" 
                                /* onChange={e => 
                                    setFormData({ ...formData, email: e.target.value})
                                }     */
                                defaultValue={formData.email}
                            />
                        </Col>
                        <Col>
                            <Form.Control 
                                type="password" 
                                placeholder="Repetir Contraseña" 
                                name="repeatPassword"
                                /* onChange={e => 
                                    setFormData({ ...formData, repeatPassword: e.target.value})
                                } */
                                defaultValue={formData.repeatPassword}
                            />
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

function initialFormValue() {
    return {
        nombre: "",
        email: "",
        password: "",
        repeatPassword: ""
    }
}
