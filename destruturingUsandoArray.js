// const [a] = [10];
// console.log(a);

// const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
// console.log(n1, n3, n5, n6);

// function rand({ min = 0, max = 1000 }) {
//   const valor = Math.random() * (max - min) + min;
//   return Math.floor(valor);
// }
// const obj = { min:50, max:90}
// console.log(rand(obj))
// console.log(rand({ min: 0, max: 1000 }));


function rand([min = 0, max = 1000 ]) {
    if(min < max) [min, max] = [max, min]

    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
  }

  console.log(rand([50, 60]))
