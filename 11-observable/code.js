var arr = Rx.Observable.from([1, 2, 3]);

arr.subscribe(function(num) {
  console.log(num);
  // 1
  // 2
  // 3
});


// arr = Rx.Observable.interval(500);
// arr.subscribe(function(num) {
//  console.log(num);
//  // 1
//  // 2
//  // 3
//  // ... every 500 ms
// });


var $input = $('input');
var obs = Rx.Observable.fromEvent($input, 'input');

obs
.debounceTime(200)
.map(function(event) {
  return event.target.value;
})
.subscribe(function(value) {
  console.log(value);
});
