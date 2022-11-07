import { Profesional } from './Profesional'

export class Movie {
  public title: string
  public releaseYear: number
  public actors: Profesional[]
  public nacionality: string
  public director!: Profesional
  public writer!: Profesional
  public language: string
  public plataforma: string
  public isMCU: boolean
  public mainCharacterName: string
  public producer: string
  public distributor: string
  public genre: string

  constructor(
    title: string,
    releaseYear: number,
    nacionality: string,
    genre: string
  ) {
    this.title = title
    this.releaseYear = releaseYear
    this.nacionality = nacionality
    this.genre = genre
    this.actors = []
    this.language = ''
    this.plataforma = ''
    this.isMCU = true
    this.mainCharacterName = ''
    this.producer = ''
    this.distributor = ''
  }

  print(): void {
    for (let property in this) {
      if (property === 'actors') {
        console.log(`${property}:}`)
        this.actors.forEach((profesional: Profesional) => profesional.print())
      }
      console.log(`${property}: ${this[property]}`)
    }
  }
}
