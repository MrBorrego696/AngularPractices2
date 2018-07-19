//////////////////////////////////////////////////////Ejercicio1
// {
//     var a = "block";
// }
// console.log(a);


//////////////////////////////////////////////////////Ejercicio2
// function hello() {
//     var a = "function";
//     for (var i = 0; i < 10; i++) {
//         var a = "block";
//     }
//     console.log(a);
// }
// hello();


//////////////////////////////////////////////////////Ejercicio3
// function hello() {
//     var a = "function";
//     for (var i=0; i<5; i++) {
//     (function() {
//         var a = "block";
//     })();
//     }
//     console.log(a);
// }
//     hello();


//////////////////////////////////////////////////////Ejercicio4
// function hello() {
//     var a = "function";
//     for (var i=0; i<5; i++) {
//         let a = "block";
//     }
//     console.log(a);
// }
// hello();


/////////////////////////////////////////////////////////////////////Using let in for loops
//////////////////////////////////////////////////////Ejercicio5
// var funcs = [];
// for (var i=0; i<5; i+=1) {
//     let y = i; //var y = i;
//     funcs.push(function () {
//         console.log(y);
//     })
// }
// funcs.forEach(function (func) {
//     func();
// });


/////////////////////////////////////////////////////////////////////The for loop short-cut
//////////////////////////////////////////////////////Ejercicio6
// var funcs = [];
// for (let i=0; i<5; i+=1) {
//     funcs.push(function(){
//         console.log(i);
//     })
// }
// funcs.forEach(function (func){
//     func();
// });
