var numsObj = {
  a: 1,
  'b': 2,
  c: 3
};

var numsObjKeys = Object.keys(numsObj);
console.log(numsObjKeys); // ['a', 'b', 'c']

numsObjKeys.map(function(key) {
  numsObj[key] *= 2;
});

numsObjKeys.map(function(key) {
  console.log(numsObj[key]);
  // 2
  // 4
  // 6
});
