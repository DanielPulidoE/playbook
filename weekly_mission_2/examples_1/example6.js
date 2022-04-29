// Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas
const countries6 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesFirstThreeLetters = countries6.map((country) => country.toUpperCase().slice(0, 3)
)
console.log("Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas")
console.log(countriesFirstThreeLetters)
/*   La sintaxis es:
a la const 'countriesFirstThreeLetters se le asigan que;
cada elemento de la lista será un parámetro 'country' y con .map se van a recorrer
la función flecha imprimirá en consola cada parámetro con MAYUSCULAS
y con .slice se obtiene solo la longitud marcada del string (0 como punto de inicio y 3 como final)   */