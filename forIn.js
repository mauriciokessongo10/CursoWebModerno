// const notas = [7.8, 5.6, 3.5, 2.6, 1.2];

// for (i in notas) {
//   console.log(notas[i]);
// }

const pessoa = {
  nome: "Mauricio",
  idade: 23,
  peso: 60,
  imc: 56.7,
};

for (atributo in pessoa) {
  // console.log(´${atributo} = ${pessoa[atributo]}´)
  console.log(atributo + " = " + pessoa[atributo]);
}
