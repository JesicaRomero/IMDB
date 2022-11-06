export class Profesional {
  constructor(
    public name: string,
    public age: number,
    public weight: number,
    public height: number,
    public isRetired: boolean,
    public nationality: string,
    public oscarNumber: number,
    public profession: string
  ) {}

  print(): void {
    for (let property in this) {
      console.log(`${property}: ${this[property]}`)
    }
  }
}
