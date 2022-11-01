/*
    Quando estamos no paradigma orientado a objetos e   queremos criar muitos objetos da mesma class, pode ser
    cansativo. Razão pela qual temos  o conceito de factory function ou função fábrica
    O que é uma função factory ?
        É uma função que retorna um novo objeto


 */

function criarPessoa() {
  return {
    nome: "Mauro",
    sobrenome: "Kessongo",
  };
}

console.log(criarPessoa());
