// Ejemplo 9: Uso del reduce
const numbers9 = [1, 2, 3, 4, 5]
const result_of_reduce = numbers9.reduce((acc, element) => acc + element, 0) // 0 + 1 = 1 + 2 = 3 + 3 = 6 + 4 = 10 + 5 = 15.
// acc: almacena los resultados, element: son los elementos del array, 0 es el valor inicializador.
console.log("Ejemplo 9: Uso de reduce para calcular la suma de los elementos de una lista")
console.log(result_of_reduce)
/*   La sintaxis es:
a la const 'result_of_reduce' se le asigna que;
al array 'numbers9' se aplica .reduce
la función flecha ejecuta la suma de acc + element iniciando desde 0   */