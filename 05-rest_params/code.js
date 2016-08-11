function greet(greeting, ...nameObjArgs) {
  nameObjArgs.forEach(function(nameObj) {
    console.log(`${greeting}, ${nameObj.name}!`);
  });
}

greet('Hello', { name: 'Eubene' }, { name: 'Tea' }, { name: 'Ray' });
// Hello, Eubene!
// Hello, Tea!
// Hello, Ray!
