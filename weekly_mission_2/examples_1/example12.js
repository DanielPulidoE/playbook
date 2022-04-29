// Ejemplo 13: Uso de findIndex, este método regresa la posición del primer elemento que cumpla con la validación que indiques.
const names13 = ['Explorer 1', 'Explorer 20', 'Explorer 300']
const result = names13.findIndex((name) => name.length > 7)
console.log("Ejemplo 13: Primer elemento cuya palabra sea mayor a 7 esta en la posición "+ result)
/*   La sintaxis es:
cada elemento del arreglo se le asigna el parámetro 'name',
se le aplica la función flecha para conocer el index en el arreglo del parámetro con longitud mayor a 7.   */