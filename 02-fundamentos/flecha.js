/*function sumar(a,b){
	return a + b;
}*/

/*let sumar = (a,b) =>{
	return a + b;
}*/

let deadpool = {
	nombre: "Wade",
	apellido: "Winston",
	poder: "Regeneracion",
	getNombre(){
		return `${ this.nombre } ${ this.apellido } - poder: ${this.poder} `;
	}
};
console.log(deadpool.getNombre());
let sumar = (a,b) => a + b;
let saludar = () => "hola mundo";
console.log(sumar(10,20));
console.log(saludar());