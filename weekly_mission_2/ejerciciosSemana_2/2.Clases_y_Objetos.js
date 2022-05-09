class claseVacia {

}
console.log("Clase Vacía: ejemplo de una clase vacía.");
console.log(claseVacia);
//.....................................................................
class claseVacia2 {

}
const objetoDeClase2 = new claseVacia2()
console.log("Instanciar objetos de una clase.");
console.log(objetoDeClase2);
//.....................................................................

class claseVacia3 {
    constructor (nombre, edad, lenguaje){
        this.nombre = nombre
        this.edad = edad
        this.lenguaje = lenguaje
    }
}
const objetoDeClase3 = new claseVacia3("Daniel", 28, ["HTML, CSS, Javascript, Python."])
console.log("Instanciar objetos con atributos.");
console.log(objetoDeClase3);
//.....................................................................
class claseVacia4 {
    constructor (nombre, edad, lenguaje, experiencia){
        this.nombre = nombre
        this.edad = edad
        this.lenguaje = lenguaje
        this.experiencia = experiencia
    }
    getInfo(){
        return `El sujeto ${this.nombre} de ${this.edad} años conoce ${this.lenguaje} y tiene ${this.experiencia} en puntos de experiencia.` 
    }
}
console.log("Instanciar métodos en los sujetos.");
const objetoDeClase4 = new claseVacia4("Daniel", 28, "HTML, CSS, Javascript, Python", 55)
console.log(objetoDeClase4.getInfo());
//.....................................................................

class claseVacia5 {
    constructor(etapa, lenguaje, experiencia){
        this.etapa = etapa
        this.lenguaje = lenguaje
        this.experiencia = experiencia
        this.status = "Activo"
        this.dateCreated = new Date()
    }
    getInfo(){
        return `El sujeto X se encuentra ${this.status} en ${this.etapa} con Nodejs de ${this.lenguaje} y tiene ${this.experiencia} de experiencia. ${this.dateCreated}`
    }
}
console.log("Atributos con valores por default.");
const objetoDeClase5_0 = new claseVacia5("Backend", "Javascript", "2 meses")
console.log(objetoDeClase5_0.getInfo());

const objetoDeClase5_1 = new claseVacia5("Backend", "Javascript", "1 año")
console.log(objetoDeClase5_1.getInfo());
//.....................................................................
class claseVacia6 {
    constructor (nombre, edad){
        this.nombre = nombre
        this.edad = edad
        this.ciudad = "Culiacán"
        this.puntaje = 50
    }
    get getReturnPuntaje() {
        return this.puntaje 
    }
}
console.log("Usando Getters para acceder a los atributos del objeto.");
const objetoDeClase6 = new claseVacia6("Daniel", 28, [])
console.log(objetoDeClase6.getReturnPuntaje);
//.....................................................................
class claseVacia7 {
    constructor (nombre, lenguaje){
        this.nombre = nombre
        this.lenguaje = lenguaje
        this.puntaje = 0
        this.vidas = 0
    }
    get getPuntaje(){
        return this.puntaje
    }
    get getVidas(){
        return this.vidas
    }
    set setPuntaje(puntaje){
        this.puntaje = puntaje
    }
    set setVidas(vidas){
        this.vidas = vidas
    }
}
console.log("Usando Setters para modificar los atributos del objeto.");
const objetoDeCalse7 = new claseVacia7("Daniel Pulido", "Javascript")
console.log(objetoDeCalse7.getPuntaje);
console.log(objetoDeCalse7.getVidas);
objetoDeCalse7.setPuntaje = 50
objetoDeCalse7.setVidas = 1
console.log(objetoDeCalse7.getPuntaje);
console.log(objetoDeCalse7.getVidas);
console.log(objetoDeCalse7);
//.....................................................................
class Toolbox {
    static getMostUsefulTools(){
        return ["Command Line", "git", "Text Editor"]
    }
}
console.log("Uso de métodos Static nos ayudan a escribir métodos en una clase que podemos usar sin necesidad de instanciar algún objeto.");
console.log(Toolbox.getMostUsefulTools());
//.....................................................................
class claseDesarrolladorUno {
    constructor(nombre, lenguaje, conocimientos){
        this.nombre = nombre
        this.lenguaje = lenguaje
        this.conocimientos = conocimientos
    }
    getNombre(){
        return this.nombre
    }
}
console.log("Herencia entre dos clases.");
const objetoDevUno = new claseDesarrolladorUno ("Daniel", "Javascript", ["HTML", "CSS", "Git", "Python"])
console.log(objetoDevUno);
class claseDesarrolladorDos extends claseDesarrolladorUno{
}
const objetoDevDos = new claseDesarrolladorDos("Reynaldo", "Node.js", ["Html", "Css","Javascript", "git", "python"])
console.log(objetoDevDos);
console.log(objetoDevDos.getNombre());
//.....................................................................

class claseVacia10{
    constructor(nombre, usuario, mision){
        this.nombre = nombre
        this.usuario = usuario
        this.mision = mision
    }
    getNombreYUsuario(){
        return `Sujeto: ${this.nombre}, username: ${this.usuario}.`
    }
}
class claseVacia11 extends claseVacia10{
    constructor(nombre, usuario, mision, ciclo){
        super(nombre, usuario, mision)
        this.ciclo = ciclo
    }
    getInfoGeneral(){
        let nombreYUsuario = this.getNombreYUsuario()
        return `${nombreYUsuario} Ciclo: ${this.ciclo}.`
    }
}
const sujeto1 = new claseVacia11 ("Pedrito", "LaunchX", "Node.js", "Abril 2022")
console.log("Overrriding métodos.");
console.log(sujeto1);
console.log(sujeto1.getNombreYUsuario());
console.log(sujeto1.getInfoGeneral());
//.....................................................................