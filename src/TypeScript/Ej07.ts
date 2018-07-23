/////////////////////////////////////////////////////////////////////Map & Set
///////////////////////////////////Using Object as Map
// let obj = {key: "value", a: 1}
// console.log(obj.a);
// console.log(obj['key']);

///////////////////////////////////Inherited Objects
// let base = {a:1,b:2};
// let obj = Object.create(base);
// //obj[c] = 3;
// for (prop in obj) {
//     if (obj.hasOwnProperty(prop)) {
//         console.log(prop)
//     }
// }

///////////////////////////////////Inherited Objects
// let obj = {hasOwnProperty: 1};
// obj.hasOwnProperty("test");

///////////////////////////////////proto Property
// let base = {__proto__:1,b:2};
// for (prop in base) console.log(prop)

///////////////////////////////////proto Property
// let map = new Map();
// map.set("A",1);
// map.set("B",2);
// map.set("C",3);
// console.log(map);
//////////2daForma
// let map = new Map()
//     .set("A",1)
//     .set("B",2)
//     .set("C",3);
// console.log(map);
//////////3raForma
// let map = new Map([
//     ["A",1],
//     ["B",1],
//     ["C",1]
// ]);

// console.log(map.get("A"));//extract the value using get
// console.log(map.has("A"));//check if a key present using the has method
// console.log(map.delete("C"));//delte entrie
// console.log(map.size);//check the size of entries
// console.log(map.clear());//empty an entire map using clear
// console.log(map.size);

///////////////////////////////////Looping over a map
let map = new Map([
    [ "APPLE", 1 ],
    [ "ORANGE", 2 ],
    [ "MANGO", 3 ]
]);

for (let key of map.keys()) {
    console.log(key);
}

for (let value of map.values()){
    console.log(value);
}
