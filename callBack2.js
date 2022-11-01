// //Trabalhando sem CallBack
const notasBaixas1 = [6.8, 9.0, 2.4, 5.6, 15.6];

let notasBaixas2 = [];

for (i in notasBaixas1) {
  if (notasBaixas1[i] < 7) {
    notasBaixas2.push(notasBaixas1[i]);
  }
}

console.log(notasBaixas2);

//Com CallBack

const notasBaixas3 = notasBaixas1.filter(function (notasBaixas1) {
  return notasBaixas1 < 7;
});
console.log(notasBaixas3);

const notasBaixas4 = notasBaixas1.filter((notasBaixas1) => notasBaixas1 < 7);
console.log(notasBaixas4);

const notaMenorQueSete = (notasBaixas1) => notasBaixas1 < 7;
const notasBaixas5 = notasBaixas1.filter(notaMenorQueSete);
console.log(notasBaixas5);
