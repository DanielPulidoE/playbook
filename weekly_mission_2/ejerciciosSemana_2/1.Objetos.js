const objeto_1 = {}
console.log("Objeto_1 vacío:")
console.log(objeto_1);
//..........................................
const objeto_2 = {
    nombre: "Daniel",
    edad: 28 + " años",    
}
console.log("Objeto_2 con propiedades:");
console.log(objeto_2);
//..........................................
const objeto_3 = {
    nombre: "Reynaldo",
    edad: 28 + " años",
    ciudad: "Culiacán",
    estado: "Sinaloa",
    lengüajes: [
        "HTML",
        "CSS",
        "JavaScript",
        "Python"
    ],
}
console.log("Objeto_3 con diferentes propiedades:");
console.log(objeto_3);
//..........................................
const objeto_4 = {
    nombre: "Pedrito",
sayHello: function () {
    console.log(`${this.nombre} te manda saludos.`)
}}
console.log("Objeto_4 con métodos");
objeto_4.sayHello();
//..........................................
const objeto_5 = {
    nombre: "Juanito",
    sayHelloTo: function(saludo){
        console.log(`${this.nombre} te manda decir: ${saludo}`)
    }
}
console.log("Objeto_5 con métodos que reciben parámetros:");
objeto_5.sayHelloTo("Hola Pancho!, ¿cómo estás?.");
