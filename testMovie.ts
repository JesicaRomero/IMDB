import { Profesional } from './Profesional'
import { Movie } from './Movie'

let professional = new Profesional(
  'Jesica',
  35,
  65,
  160,
  false,
  'Estadounidense',
  6,
  'actriz'
)
let movie = new Movie('Titanic', 1997, 'Estadounidense', 'Romance catastrofe')

movie.print()
