//requireds
const fs = require('node:fs/promises');
const colors = require('colors');

//lista la tabla de x numero hasta una cifra en concreto
//                       si lo igualo a 10 hace que siempre tenga un valor por defecto
let listarTabla = (base, limite = 10 )=>{

    console.log('=================='.rainbow);
    console.log(`tabla de ${ base }`.green);
    console.log('=================='.rainbow);

    for(let i=1; i<=limite; i++){
        var suma = base*i;
        console.log(`${base} * ${i} = ${suma}\n`);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)){
            reject(`No es un numero`);
            return //poque depus del  reject sigue, y no queremos
        }

    let data = '';

    for(let i=1; i<=limite; i++){
        var suma = base*i;
        data += `${base} * ${i} = ${suma}\n`;
    }

    //           carpeta/ nombre fichero    , datos, op, callback
    fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err)=>{
        if(err) reject (err);
        else{
            resolve(`tabla-${base}-al-${limite}.txt`);
        }
    })

    });

}

//exportar el modulo para que se comunique con app
module.exports = {
    crearArchivo,
    listarTabla
}
