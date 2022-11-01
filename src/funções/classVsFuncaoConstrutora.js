// class Pessoa {
//   constructor(nome) {
//     this.nome = nome;
//   }

//   falar() {
//     console.log(`Meu nome é ${this.nome}`);
//   }
// }

// const p1 = new Pessoa("Maurício Classe");
// p1.falar();

//com construtor

function Pessoa(nome) {
  //this.nome = nome;

  this.falar = function () {
    console.log(`Meu nome é ${this.nome}`);
  };
}

const p1 = new Pessoa("Maurício Classe");
p1.falar();
