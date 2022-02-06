import { API_HOST } from '../utils/constant'

export function signUpApi(user) {
    //luego agregaremos nginx por ahora testeamos sin proxy
    const url = `${API_HOST}/signup`
    const userTemp = {
        ...user,
        email: user.email.toLowerCase(), //siempre enviamos el mail en minuscula
        fechaNacimiento: new Date()
    }
    delete userTemp.repeatPassword

    const params = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userTemp)
    }

    return fetch(url, params)
    .then(z => {
        if (z.status >= 200 && z.status < 300) {
            return z.json()
        }
        return { code: 404, messagge: "no disponible..." }
    })
    .then(z => { return z })
    .catch(err => { return err })
}