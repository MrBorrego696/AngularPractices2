/////////////////////////////////////////////////////////////////////Template Strings
///////////////////////////////////Multi-Line Strings
//let single = "hello world";
// let single = 'hello' + 'world ' + 'my ' + 'name ' + 'is ' + 'Thanatos';
// console.log(single);
// let mult = `
// hello

// world

// my

// name

// is

// Thanatos
// `;
// console.log(mult);}
///////////////////////////////////Variable Susbstitution
let nombre = "Thanatos";

let multi = `
hello
world
my
name
is
${nombre}
`;
console.log(multi);