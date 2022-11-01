class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`Meu nome é ${this.nome}`);
  }
}

const p1 = new Pessoa("Maurício");
p1.falar();

//Usando factory functions

const criarPessoa = (nome) => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`),
  };
};

const novaPessoa = criarPessoa("PessoaComFatory");
novaPessoa.falar();

/*
    Quando executamos ambos os códigos acima, vimos que na classe usamos o "this" e não conseguimos ter acesso ao
    nome porque o this e a classe não carregam o contexto léxico da função por isso que quando executado, ele retorna
    undefined na variável nome

    AO PASSO QUE

    Ao passo que a função facotry carrega o contexto léxico da função, sem precisar usar o "this" e por isso
    quando executado ele mostra o respectivo nome na tela
*/