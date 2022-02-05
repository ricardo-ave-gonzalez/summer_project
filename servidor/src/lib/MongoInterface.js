import { MongoClient } from "mongodb";
const url = 'mongodb://localhost:27017'

let objDeprecateCfg = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}

class MongoInterface {
    insert(base, coleccion, documento, callBackFn) {
        MongoClient.connect(url, objDeprecateCfg, function (err, client) {
            if (err) {
                console.log(`se produjo un error ${err}`)
                callBackFn(err)
                return;
            }
            console.log("conectado")

            const db = client.db(base)
            const collection = db.collection(coleccion)

            collection.insertOne(documento, (err2, resultado) => {
                if (err2) {
                    console.log(`se produjo un error ${err2}`);
                    callBackFn(err2);
                    return;
                }
                client.close();
                callBackFn(undefined, resultado);
            });
        });
    }
    findById(base, coleccion, documento, callBackFn) {
        MongoClient.connect(url, objDeprecateCfg, function (err, client) {
            if (err) {
                console.log(`se produjo un error ${err}`)
                callBackFn(err)
                return;
            }
            console.log("conectado")

            const db = client.db(base)
            const collection = db.collection(coleccion)

            collection.findOne(documento, (err2, resultado) => {
                if (err2) {
                    console.log(`se produjo un error ${err2}`);
                    callBackFn(err2);
                    return;
                }
                client.close();
                callBackFn(undefined, resultado);
            });
        });
    }
    findByUsername(base, coleccion, documento, callBackFn) {
        MongoClient.connect(url, objDeprecateCfg, function (err, client) {
            if (err) {
                console.log(`se produjo un error ${err}`)
                callBackFn(err)
                return;
            }
            console.log("conectado")

            const db = client.db(base)
            const collection = db.collection(coleccion)

            collection.findOne(documento, (err2, resultado) => {
                if (err2) {
                    console.log(`se produjo un error ${err2}`);
                    callBackFn(err2);
                    return;
                }
                client.close();
                callBackFn(undefined, resultado);
            });
        });
    }
    insertMany(base, coleccion, documento, callBackFn) {
        MongoClient.connect(url, objDeprecateCfg, function (err, client) {
            if (err) {
                console.log(`se produjo un error ${err}`)
                callBackFn(err)
                return;
            }
            console.log("conectado")

            const db = client.db(base)
            const collection = db.collection(coleccion)

            collection.insertMany(documento, (err2, resultado) => {
                if (err2) {
                    console.log(`se produjo un error ${err2}`);
                    callBackFn(err2);
                    return;
                }
                client.close();
                callBackFn(undefined, resultado);
            });
        });
    }
    query(base, coleccion, query, callBackFn) {
        MongoClient.connect(url, objDeprecateCfg, function (err, client) {
            if (err) {
                console.log(`se produjo un error ${err}`);
                callBackFn(err);
                return;
            }
            console.log("conectado");

            const db = client.db(base);
            const collection = db.collection(coleccion);
            collection.find(query).toArray(function (err2, resultado) {
                if (err2) {
                    console.log(`se produjo un error ${err2}`);
                    callBackFn(err2)
                    return;
                }
                console.log(resultado);
                client.close();
                callBackFn(undefined, resultado);
            });
        });
    }
    update(base, coleccion, publicId, documento, callBackFn) {
        MongoClient.connect(url, objDeprecateCfg, function (err, client) {
            if (err) {
                console.log(`se produjo un error ${err}`);
                callBackFn(err2);
                return;
            }
            console.log("conectado");

            const db = client.db(base);
            const collection = db.collection(coleccion);

            collection.updateOne({ id: publicId }, { $set: documento }, (err2, resultado) => {
                if (err2) {
                    console.log(`se produjo un error ${err2}`);
                    callBackFn(err2);
                    return;
                }
                console.log('RESULTADO' + resultado);
                client.close();
                callBackFn(undefined, resultado.result);
                return;
            });
        });
    }
    delete(base, coleccion, documento, callBackFn) {
        MongoClient.connect(url, objDeprecateCfg, function (err, client) {
            if (err) {
                console.log(`se produjo un error ${err}`);
                callBackFn(err2)
                return;
            }
            console.log("conectado")

            const db = client.db(base)
            const collection = db.collection(coleccion)

            collection.deleteOne(documento, (err2, resultado) => {
                if (err2) {
                    //Meter error generado aqui.
                    //Sacarlo en la callback function
                    console.log(`se produjo un error ${err2}`)
                    callBackFn(err2)
                    return;
                }
                console.log(resultado)
                client.close()
                callBackFn(undefined, resultado.result)
            });
        });
    }

}

export default new MongoInterface();