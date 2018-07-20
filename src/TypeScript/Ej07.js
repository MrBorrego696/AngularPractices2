/////////////////////////////////////////////////////////////////////Map & Set
///////////////////////////////////Using Object as Map
// let obj = {key: "value", a: 1}
// console.log(obj.a);
// console.log(obj['key']);
///////////////////////////////////Inherited Objects
var base = { a: 1, b: 2 };
var obj = { hasOwnProperty: 1 }; //Object.create(base);
obj[c] = 3;
for (prop in obj) {
    if (obj.hasOwnProperty("test")) {
        console.log(prop);
    }
}
