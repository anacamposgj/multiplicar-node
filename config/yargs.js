//para que se pasen argumentos por la linea de comandos utilizamos YARGS
const opts ={
    base: {
        demanf: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')                              //las opciones, como se repite en ambos comandos las guardamos en otra variable (ops) y se ponen directamente
                .command('listar', 'meter num de la base', opts)
                .command('crear', 'Genera un archivo con la tabla de multiblicar', opts)
                .help() // para que el usuario tenga acceso a los comandos
                .argv


//exportamos

module.exports = {
    argv
}
