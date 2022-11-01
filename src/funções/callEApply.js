//Call e Apply são formas de chamar e executar uma função em JAVASCRIPT
//A diferença entre Call e Apply é na forma como se coloca os parâmetros na hora de invocar a função a partir
// desses dois métodos
function getPreco(imposto = 0, moeda = "R$") {
  return `${moeda} ${this.preco * (1 - this.disconto) * (1 + imposto)}`;
}
const produto = {
  nome: "Notebook",
  preco: 4589,
  disconto: 0.15,
  getPreco,
};
// globalThis.preco = 20
// global.disconto = 0.1
// console.log(getPreco());
console.log(produto.getPreco());

//outro objeto

const carro = { preco: 49990, disconto: 0.2 };
console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

//A diferença está que no call você coloca o contxto e os parâmetros
console.log(getPreco.call(carro, 0.17, "$")); //dificuldade em saber se os paramteros são colocados em ordem

//no apply voce coloca o contexto lexico e os parâmetros dentro de [] como se estivessem em um array
console.log(getPreco.apply(carro, [0.17, '$']));