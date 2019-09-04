/*setTimeout( () => {
	console.log("Hola mundo");
},3000)*/

let getUsuarioById = (id, callback) => {

	let usuario={
		nombre:"Eddy",
		id
	}
	callback(usuario);
}

getUsuarioById(10,(usuario) => {
	console.log('Usuario de base de datos ', usuario);
});