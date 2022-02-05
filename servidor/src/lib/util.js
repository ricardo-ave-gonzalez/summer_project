export function ver(...arr) {
    console.log(arr.join(' '));
}
export function verArr(arr) {
    ver(arr.join(' ------- '))
}
export function juntar(...arr) {
    return arr.join(' ');
}
export function execIfObjNotNull(obj, fn) {
    if (obj === undefined) {
        return;
    }
    if (obj === null) {
        return;
    }
    if (typeof fn !== "function") { 
        let mensaje = 'execIfNotNull - no recibe es una funcion'
        throw new Error(mensaje)
        return;
    }
    fn.apply()
}
export function execIfNotNull(fn, ...argumentos) {
    if (fn === undefined) {
        throw new Error('no esta definida')
        return;
    }
    if (fn === null) {
        throw new Error('la funcion es null')
        return;
    }
    if (typeof fn !== "function") { 
        let mensaje = 'execIfNotNull - no recibe es una funcion'
        throw new Error(mensaje)
        return;
    }
    fn.apply({}, argumentos)
}
export function execIfNotNullNoEx(fn, ...argumentos) {
    if (fn == undefined) {
        return;
    }
    if (fn == null) {
        return;
    }
    if (typeof fn != "function") {
        return;
    }
    fn.apply({}, argumentos)
}
export function throwIfExist(err) {
    if (err) {
        throw err
    }
}