const prod1 = {}; //criação de objeto vazio
//objeto, em javaScript, é uma coleção de chave - valor

// prod1.nome = "Celular";//mesmo sem nome ser declarado como atributo ou chave do objeto, ele foi criado dinamicamente.
// console.log(prod1.nome);
prod1.preco = 498.9;

prod1["Desconto Legal"] = 0.4; //evitar atributos com espaço, no caso o indice "Desconto Legal" vai ser a chave e 0.40 vai ser o valor
console.log(prod1);

//declarando objetos de outro jeito
const prod2 = {
  nome: "camisola",
  preco: 79.9,
  obj: {
    blabla: 1,
    obj: {
      blabla: 2,
    },
  },
};
console.log(prod2);

// '"nome": "camisola", "preco": "79.9"' isso é o mais próximo de JSON. JSON é diferente de objetos ; JSON é um formato textual
