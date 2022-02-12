import React, { useState } from 'react'
import { Form, Button, Spinner } from 'react-bootstrap'
import { values, size } from 'underscore'
import { toast } from 'react-toastify'
import { isEmailValid } from "../../utils/validations"
import { signInApi, setTokenApi } from '../../api/auth'

import "./SignInForm.scss"

export default function SignInForm(props) {
    const { setrefreshCheckLogin } = props
    const [formData, setformData] = useState(initialFormValue())
    const [signInLoading, setsignInLoading] = useState(false)

    const onSubmit = e => {
        e.preventDefault()

        let validCount = 0
        values(formData).some(z => {
            z && validCount++
            return null;
        })
        if (size(formData) !== validCount) {
            toast.warning("Completa todos los campos del formulario")
        } else {
            if (!isEmailValid(formData.email)) {
                toast.warning("El email es invalido")
            } else {
                setsignInLoading(true);
                signInApi(formData).then(z => {
                    if (z.messagge) {
                        toast.warning(z.messagge)
                    } else {
                        setTokenApi(z.token)
                        setrefreshCheckLogin(true)
                        //console.log(z.token)
                    }
                }).catch(z => {
                    toast.error("Error del servidor, intentelo mas tarde.")
                }).finally(z => {
                    setsignInLoading(true)
                })

            }
        }
    }

    const onChange = e => {
        setformData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="sign-in-form">
            <h2>Entrar</h2>
            <Form onSubmit={onSubmit} onChange={onChange}>
                <Form.Group>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Correo electronico"
                        defaultValue={formData.email}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        defaultValue={formData.password}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    {!signInLoading ? "Iniciar sesión" : <Spinner animation="border" />}
                </Button>
            </Form>
        </div>
    )
}

function initialFormValue() {
    return {
        email: "",
        password: ""
    }
}