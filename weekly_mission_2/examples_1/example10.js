// Ejemplo 10: uso de every nos ayuda a validar todos los elementos de una lista, 
// si todos cumplen con la validación que indiques te regresa True, de lo contrario False.
const names10 = ['Explorer 1', 'Explorer 2', 'Explorer 3', 'Explorer 4']
const areAllStr = names10.every((name) => typeof name === 'string')
//   arreglo.every(callback(elemento[, indice[, arreglo]])[, Argumento])

console.log("Ejemplo 10: Son todos los nombres 'cadenas' ?: " + areAllStr)
/*   La sintaxis es:
retorna True o False si el arreglo cumple con las condiciones,  */
// en este caso 'name' es el parámetro de cada elemento del arrelo,
// y le aplica una función flecha para saber si -typeof- de cada parámetro 'name'
// es estrictamente igual a una cadena.