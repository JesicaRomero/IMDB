import { writeFileSync } from 'fs'
import { Movie } from './Movie'
import { Imdb } from './Imdb'

let movie1 = new Movie('Titanic', 1997, 'Estadounidense', 'Romance catastrofe')
let movie2 = new Movie(
  'Colega donde esta mi coche',
  2000,
  'Estadounidense',
  'Humor'
)

let imdb = new Imdb([movie1, movie2])

let stringImdb = JSON.stringify(imdb, null, 4)
writeFileSync(`${__dirname}/ImdbBBDD.json`, stringImdb)
