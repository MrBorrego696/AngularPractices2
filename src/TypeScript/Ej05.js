/////////////////////////////////////////////////////////////////////Destructuring
///////////////////////////////////Object Destructuring
// const obj = {first: 'Alan', last: 'Islas', age: 25};
// const f = obj.first;
// const l = obj.last;
// console.log(f);
// console.log(l);
///////////////////////////////////Array Destructuring
// const arr = ['a', 'b'];
// const [x,y] = arr;
// console.log(x);
// console.log(y);
///////////////////2
// function f(options) {
//     console.log(options.x);
//   }
//   f({x:2}); // 2
///////////////////3
function f(_a) {
    var _b = _a.x, x = _b === void 0 ? 5 : _b;
    console.log(x);
}
f({});
