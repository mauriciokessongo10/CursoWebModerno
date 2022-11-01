const data1 = new Date(0);
const data2 = new Date(0);
// console.log(data1.getFullYear(), data1.getMonth(), data1.getDay());

// console.log(data1 === data2); //é falso porque faz referência a objeto
console.log(data1.getTime() === data2.getTime());
