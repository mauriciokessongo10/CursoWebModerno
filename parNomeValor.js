const saudacao = "OI";

function executar() {
  const saudacao = "SALVE";
  return saudacao;
}

//Objetos são grupos aninhados de pares nome/valor

const cliente = {
  nome: "Mauro",
  idade: 23,
  peso: 60,
  endereco: {
    Rua: "Luis ferreira de barro",
    numero: 40,
    cep: 0535,
  },
};

console.log(saudacao);
console.log(executar());
console.log(cliente);
