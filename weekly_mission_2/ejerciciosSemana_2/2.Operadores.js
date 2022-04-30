const nombres = [
    "Daniel",
    "Reynaldo",
    "Pedrito",
    "Juanito",
    "Pancho"
];
console.log("forEach 1: Imprimiendo los elementos de una lista")
nombres.forEach(nombre => console.log(nombre));
//..........................................

let suma = 0;
const números = [10, 20, 30, 40, 50, 60, 70, 80, 90,]
números.forEach(num => suma += num);
console.log("forEach 2: Calcular la suma de todos los elementos de una lista.");
console.log(suma);
//..........................................
const nombres_2 = [
    "Daniel",
    "Reynaldo",
    "Pedrito",
    "Juanito",
    "Pancho",
]
console.log("forEach 3: Imprimir los elementos de la lista en mayúsculas.");
nombres_2.forEach(elemento => console.log(elemento.toUpperCase()));
//..........................................

const números_2 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
const númeroCuadrado = números_2.map(num => num * num)
console.log("Map 1: Recorrer elementos de la lista y crear nueva lista.");
console.log(números_2.length);
console.log(númeroCuadrado);
//..........................................

const nombres_3 = [
    "Daniel",
    "Reynaldo",
    "Pedrito",
    "Juanito",
    "Pancho"
]
const nombresToLowerCase = nombres_3.map((element) => element.toLocaleLowerCase())
console.log("Map 2: Recorrer e imprimir los elementos de la lista en minúsculas.");
console.log(nombresToLowerCase);
//..........................................

const países_1 = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]
const paísesFirstThreeLetters = países_1.map((element) => element.toLocaleUpperCase().slice(0, 3))
console.log("Map 3: Recorrer e imprimir 3 letras de los elementos de una lista en mayúsculas.");
console.log(paísesFirstThreeLetters);
//..........................................

const países_2 = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]
const paísesTerminanEnLand = países_2.filter((element) => element.endsWith('land'))
console.log("Filter 1: Filtrar países que terminen en 'land'.");
console.log(paísesTerminanEnLand);
//..........................................

const países_3 = ["Finlandia", "Dinamarca", "Suecia", "Noruega", "Islandia"]
const paísesTerminanEnIa = países_3.filter((element) => element.endsWith('ia'))
console.log("Filter 2: Filtrar países que terminen en 'ia'.");
console.log(paísesTerminanEnIa);
//..........................................

const puntos = [
    {nombre: "Daniel", obtuvo: 500},
    {nombre: "Reynaldo", obtuvo: 800},
    {nombre: "Pedrito", obtuvo: 300},
    {nombre: "Juanito", obtuvo: 750},
    {nombre: "Pancho", obtuvo: 600}
]
const puntosMayorQue500 = puntos.filter((element) => element.obtuvo >= 700)
console.log("Filter 3: Filtrar una lista por condicional.")
console.log(puntosMayorQue500);
//..........................................

const númerosReduce = [
    10, 20, 30, 40, 50
]
const resultOfReduce = númerosReduce.reduce((acc, element) => acc + element, 0)
console.log("Reduce : Calcular la suma de lo elementos de una lista.");
console.log(resultOfReduce);
//..........................................

const númerosEvery = [
    'Daniel',
    'Reynaldo',
    'Pedrito',
    'Juanito',
    'Pancho'
]
const allEvery = númerosEvery.every((name) => typeof name === 'string')
console.log("Every: Validar elementos de una lista, si 'todos' cumplen con la validación retorna True, de los contrario False.");
console.log("Son todos los nombres 'cadenas' ?: " + allEvery);
//..........................................

const edadesFind0 = [
    80, 75, 30, 35, 40, 45, 50
]
const edadesFind = edadesFind0.find((age) => age < 35 )
console.log("Find: Encontrar el primer elemento de una lista que cumpla con lo indicado.");
console.log("Primera edad menor a 35 es: " + edadesFind);
//..........................................

const scores0 = [
    { name: 'Daniel', score: 90},
    { name: 'Reynaldo', score: 95},
    { name: 'Pedrito', score: 100},
    { name: 'Juanito', score: 75},
    { name: 'Pancho', score: 85}
]
const scoreLessThan = scores0.find((user) => user.score < 85)
console.log("Find 2: 'find' en una lista de objetos.");
console.log("EL primer nombre con score menor a 85 es: " + scoreLessThan.name);
//..........................................

const nombresFindIndex = ['Daniel', 'Reynaldo', 'Pedrito', 'Juanito', 'Jose']
const findIndexNombres = nombresFindIndex.findIndex((name) => name.length > 7 )
console.log("Find Index: Ubica el lugar en el arreglo del parámetro que cumple las condiciones.");
console.log("La posición del primer elemento cuya palabra sea mayor a 7 está en el index: " + findIndexNombres);
//..........................................

const booleanosLista = [true, true, false, true]
const existeTrue = booleanosLista.some((x) => x === false)
console.log("Some: Uso de 'some' para ver si al menos uno de los elementos es false.");
console.log("Existe algún 'false' en el arreglo ?: " + existeTrue);
//..........................................

const usoSort = ['Daniel', 'Reynaldo', 'Pedrito', 'Juanito', 'Pancho']
console.log("Sort: Uso de 'sort' para ordenar alfabéticamente cadenas de texto.");
console.log(usoSort.sort());
//..........................................

const usoSortDos = [9,8, 7, 6, 5, 4, 3, 2, 1]
console.log("Sort 2: uso de 'sort' con números.");
console.log(usoSortDos.sort());
//..........................................

const usoSortTres = [
    { name: 'Daniel', age: 19 },
    { name: 'Reynaldo', age: 20 },
    { name: 'Pedrito', age: 18 },
    { name: 'Juanito', age: 21 },
  ]
  usoSortTres.sort((a, b) => {
    if (a.age > b.age) return -1
    if (a.age < b.age) return 1
    return 0
  })
  console.log("Sort 3: Ordenando una lista de objetos por la edad de mayor a menor.");
  console.log(usoSortTres);
