var nameObj = {
  firstName: 'Eubene',
  lastName: 'Sa',
  middleNames: [],

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(nameStr) {
    var nameArr = nameStr.split(' ');
    this.firstName = nameArr.splice(0, 1).pop();
    this.lastName = nameArr.splice(nameArr.length - 1, 1).pop();
    this.middleNames = nameArr;
  }
};

console.log(nameObj.fullName); // Eubene Sa

nameObj.fullName = 'Tea Anne Ray Hendrix';
console.log(nameObj.firstName); // Tea
console.log(nameObj.lastName); // Hendrix
console.log(nameObj.middleNames); // ['Anne', 'Ray']
