// Ejemplo 7: Uso de filter para filtrar una lista de elementos
const countries7 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesContainingLand = countries7.filter((country) => country.includes('land'))// indicación para solo filtrar elementos que incluyan "land"
console.log("Ejemplo 7: Uso de filter para filtrar una lista de elementos")
console.log(countriesContainingLand)
/*   La sintaxis es:
la const 'countriesContainingLand' se le asigna que;
cada elemento de la lista 'countries7' será un parámetro 'country' y se filtrará
y la función flecha tomará de los parámetros 'country' solo los que incluyan 'land'   */