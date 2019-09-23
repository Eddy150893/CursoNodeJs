const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo,listarTabla } = require('./multiplicar/multiplicar.js')

let comando = argv._[0];

switch(comando){
	case 'listar':
		listarTabla( argv.base, argv.limite);
		break;
	case 'crear':
		crearArchivo( argv.base, argv.limite )
			.then ( archivo => console.log(`Archivo creado: ${ archivo }`,colors.green(archivo)) )
    		.catch(e => console.log(e));
		console.log('Crear');
		break;
	default:
		console.log('Comando no reconocido');
		break;
}
//let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];





