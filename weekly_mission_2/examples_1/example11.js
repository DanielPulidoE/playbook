// Ejemplo 11: Uso de find para encontrar el primer elemento de una lista que cumpla con lo que indiques
const ages = [24, 22, 19, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)
console.log("Ejemplo 11: Primera edad menor a 20 es: "+ age)
/*   La sintaxis es:
cada elemento del arreglo se le asigan el parámetro 'age',
se le aplica la función flecha para conocer el elemento que sea menor a 20.   */
//..........................................................................................................

// Ejemplo 12: Uso de find en una lista de objetos
const scores12 = [
    { name: 'A', score: 95 },
    { name: 'M', score: 80 },
    { name: 'E', score: 50 },
    { name: 'M', score: 85 },
    { name: 'J', score: 100 },
  ]
  
  const score_less_than_80 = scores12.find((user) => user.score < 80)
  console.log("Ejemplo 12. Name score found:" + score_less_than_80.name)
/*   La sintaxis es :
cada elemento del arreglo se le asigna el parámetro 'user',
se le aplica la función flecha para conocer el 'score' del elemento que sea menor a 80.   */
