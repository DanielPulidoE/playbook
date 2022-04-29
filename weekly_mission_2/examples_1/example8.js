// Ejemplo 8: Filtrar una lista por condicional
const scores = [
    { name: 'A', score: 95 },
    { name: 'L', score: 98 },
    { name: 'M', score: 80 },
    { name: 'E', score: 50 },
    { name: 'M', score: 85 },
    { name: 'J', score: 100 },
  ]
  
  const scoresGreaterEighty = scores.filter((score) => score.score > 80)
  console.log("Ejemplo 8: Filtrando elementos por score")
  console.log(scoresGreaterEighty)
  /*   La sintaxis es:
a la const 'scoresGreaterEighty' se le asigna que;
cada elemento de la lista 'scores' será un parámetro 'score' y se filtrará 
y la función flecha tomará de los parámetros 'score' solo los que tengan score: mayores a 80   */