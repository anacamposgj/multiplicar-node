//para que se pasen argumentos por la linea de comandos utilizamos YARGS
//para eso quiero cargar el archivo que esta en config > yargs
// y cojo el argv
const argv = require('./config/yargs').argv
const colors = require('colors');



const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar')

let comando = argv._[0];

// Indicar que hace cada comando y asociar nombre con accion
switch (comando){
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e)); //manejar el error de si no es un numero la base
    break;

    default:
        console.log('Comando no reconocido');
}


console.log(argv.base);


