var today = 'Wednesday';

if (true) {
  let today = 'Thursday';
}

console.log(today); // Wednesday

const tomorrow = [1, 2, 3];
tomorrow[0] = 5;
console.log(tomorrow); // [5, 2, 3]

tomorrow = 'Thursday'; // TypeError
