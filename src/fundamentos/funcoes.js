//Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
  console.log(a + b);
};
imprimirSoma(2, 3);

//Armazenando uma função Arrow em uma variável (função sem nome)
const soma = (a, b) => {
  return a + b;
};
console.log(soma(5, 15));

//Retorno impl+icito só quando temos uma linha de código

const subtracao = (a, b) => a - b;
console.log(subtracao(2, 3));

const imprime2 = a => console.log(a)
imprime2("Hi Hi")
