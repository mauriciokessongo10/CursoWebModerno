// console.log(typeof Object); //é uma função
// console.log(typeof new Object()); //é um objecto

const cliente = function () {};

console.log(typeof cliente); //é uma função
console.log(typeof new cliente()); //é um objecto

class Produto {}
console.log(typeof Produto); //é uma função
console.log(typeof new Produto()); //é um objecto
