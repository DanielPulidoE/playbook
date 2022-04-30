//Ejemplo 15: Uso de sort para ordenar elementos
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log("Ejemplo 15: Elementos ordernados usando SORT")
console.log(products.sort())
/*   La sintaxis es:
.sort ordena los elementos 'cadena' del arreglo en orden alfabético.
no olvidar usar () para ejecutar el método.   */

// ....................................................................................
// Ejemplo 16: Ordenando una lista de objetos
const usoSortTres = [
    { name: 'Daniel', age: 19 },
    { name: 'Reynaldo', age: 20 },
    { name: 'Pedrito', age: 18 },
    { name: 'Juanito', age: 21 },
  ]
  usoSortTres.sort((a, b) => {
    if (a.age > b.age) return -1   // if la edad de 'a' es mayor a la edad de 'b' retorna con orden de mayor-menor
    if (a.age < b.age) return 1   // if la edad de 'a' es menor a la edad de 'b' retorna con orden de menor-mayor
    return 0   // si no se cumple if retorna como está
  })
  console.log("Ejemplo 16: Ordenando una lista de objetos por la edad");
  console.log(usoSortTres);
/*   La sintaxis es:
Se usará .sort con la función flecha y como condicionales a los if   */