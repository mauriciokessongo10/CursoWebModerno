function Carro(velocidadeMaxima = 200, delta = 5) {
  //atributo privado
  let velocidadeAtual = 0;

  this.acelerar = function () {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta;
    } else {
      velocidadeAtual = velocidadeMaxima;
    }
  };

  //método público para pegar a velocidade atual
  this.getVelocidadeAtual = function () {
    return velocidadeAtual;
  };
}

// const uno = new Carro();
// console.log(uno.getVelocidadeAtual());
// uno.acelerar();
// console.log(uno.getVelocidadeAtual());
// uno.acelerar();
// console.log(uno.getVelocidadeAtual());

//outro objeto
const ferrari = new Carro(400, 20);
console.log(ferrari.getVelocidadeAtual());
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());
