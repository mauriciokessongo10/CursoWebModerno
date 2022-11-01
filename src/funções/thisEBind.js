const pessoa = {
  saudacao: "Bom dia",
  falar() {
    console.log(this.saudacao);
    // console.log(this == pessoa); verificar se o objeto na qual o this aponta é o objeto pessoa mesmo
  },
};

// pessoa.falar();

const copia = pessoa.falar.bind(pessoa); //o bind informa o objeto na qual o this deve apontar, pois que
//o copia não tem dentro de si declarado uma variável chamada saudacao. Logo, não tem como referenciá-la

copia();
