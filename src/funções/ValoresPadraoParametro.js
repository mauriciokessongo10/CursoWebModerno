//Setando valor padrão com operador lógico ||
// function soma(a, b, c) {
//   a = a || 1;
//   b = b || 1;
//   c = c || 1;

//   return a + b + c;
// }

// console.log(soma(), soma(3), soma(4,6,7));

//Estratégias 2,3 e 4 para setar valor Padrão

// function soma(a, b, c) {
//   a = a !== undefined ? a : 1;
//   b = 1 in arguments ? b : 1; //nos indices de arguments, b está na posição 1. Dentro
//   //Dentro dos argumentos de argument, pegue o valor de b ou pegue 1
//   c = isNaN(c) ? 1 : c;

//   return a + b + c;
// }
// console.log(soma(undefined, 1, "oi"));

//Com a nova versão do ecma script 2015 temos um novo jeiuto de setar valor padrão

function soma3(a = 1, b = 1, c = 1) {
  return a + b + c;
}

console.log(soma3(3, 6, 9));
