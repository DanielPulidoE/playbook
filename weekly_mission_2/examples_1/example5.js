// Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a mayúsculas
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map((name) => name.toUpperCase())

console.log("Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a mayúsculas")
console.log(namesToUpperCase)
/*   La sintaxis es:
a la const 'namesToUpperCase' se le asigna que;
cada elemento de la lista será un parámetro 'name' y con .map se van a recorrer
la función flecha imprimirá en consola cada parámetro con MAYUSCULAS   */