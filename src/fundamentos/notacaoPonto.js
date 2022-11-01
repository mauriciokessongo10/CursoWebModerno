// console.log(typeof console);

const obj1 = {};
obj1.nome = "Bola";
obj1["nome"] = "Bola2";
console.log(obj1.nome);

function objeto(nome) {
  this.nome = nome;
  this.exec = function () {
    console.log("EXECUTANDO...");
  };
}

const obj2 = new objeto("High lieve");
const obj3 = new objeto("Low lieve");

console.log(obj2.nome);
console.log(obj3.nome);
obj2.exec();
