class Eubene {
  constructor() {
    this.firstName = 'Eubene',
    this.lastName = 'Sa'
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

var eubene = new Eubene();
console.log(eubene.fullName()); // Eubene Sa
