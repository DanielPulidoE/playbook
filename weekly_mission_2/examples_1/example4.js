// Ejemplo 4: Uso de map para recorrer los elementos de una lista y crear una nueva lista
const numbers4 = [1, 2, 3, 4, 5]
const numbersSquare = numbers4.map((num) => num * num)

console.log("Ejemplo 4: Imprimiendo la lista de elementos al cuadrado")
console.log(numbersSquare)
/*   La sintaxis es:
a la const 'numbersSquare' se le asigna que;
cada elemento de la lista será un parametro 'num' y con .map se van a recorrer
la función flecha multiplicará cada parámetro por si mismo   */