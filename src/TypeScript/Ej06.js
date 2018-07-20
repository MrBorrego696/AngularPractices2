/////////////////////////////////////////////////////////////////////For OF
///////////////////////////////////For & ForEach
// let array = [1,2,3];
// for (var i = 0;  i < array.length; i++) {
//     console.log(array[i]);
// }
//2da forma
// let array = ['a','b','c'];
// array.forEach(function (value) {
//     console.log(value);
// });
///////////////////////////////////For In
// var obj = {a:1,b:2};
// for (let prop in obj) {
//     console.log(obj[prop]);
// }
// let arreglo = [1,2,3];
// for (let value in arreglo){
//     console.log(typeof(value));
// }
///////////////////////////////////For-of loop
var array = ['a', 2, 3];
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var value = array_1[_i];
    console.log(value);
}
