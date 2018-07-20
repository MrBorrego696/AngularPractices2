/////////////////////////////////////////////////////////////////////Fat Arrow Functions
///////////////////////////////////Syntax

// setTimeout(function(){
//     console.log('setTimeout called!');
// }, 1000);

// //ES6
// setTimeout(() => {
//     console.log("setTimeout ES6 called!")
// }, 1000);

///////////////////////////////////Arguments
// var add = (a,b) => a + b;

// console.log(add);

// let obj = {
//     name : "Alan",
//     sayLater : function () {
//         console.log(`${this.name}`);
//     }
// };

// obj.sayLater();
///////////////////////////////////Calling context
let obj = {
    name : "Alan",

    sayLater: function(){
        let self = this;
        console.log(self);

        setTimeout(function (){
            console.log(`${self.name}`);
        }, 1000);
    }
}

obj.sayLater();