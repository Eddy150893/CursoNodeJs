let nombre = "Deadpool";
let real = "Wade Winston";


console.log(nombre+" "+real);
console.log(`${ nombre } ${ real }`);

function getNombre(){
	return ` ${ nombre } es ${ real } `;
}


console.log(`El nomde de: ${ getNombre() }`);
