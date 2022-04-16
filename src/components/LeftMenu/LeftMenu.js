import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHome,
    faUser,
    faUsers,
    faPowerOff
} from '@fortawesome/free-solid-svg-icons'
import { logoutApi } from '../../api/auth'
import skeb from '../../assets/png/logo-white-skeb.png'


import './LeftMenu.scss'

export default function LeftMenu(props) {
    //console.log(props)
    const { setrefreshCheckLogin } = props;

    const logout = () => {
        logoutApi();
        //finalmente despues de hacer destructuring y pasar por todo el flujo
        //podemos reutilizar y cambiar el estado del login desde este componente
        setrefreshCheckLogin(true);
    }

    return (
        <div className="left-menu">
            <img className="logo" src={skeb} alt="Skeb" />

            <Link to="/">
                <FontAwesomeIcon icon={faHome} />Inicio
            </Link>
            <Link to="/users">
                <FontAwesomeIcon icon={faUsers} />Usuarios
            </Link>
            <Link to="/profile">
                <FontAwesomeIcon icon={faUser} />Perfil
            </Link>
            <Link to="" onClick={logout}>
                <FontAwesomeIcon icon={faPowerOff} />Cerrar sesión
            </Link>

            <Button>Twitter</Button>
        </div>
    )
}
