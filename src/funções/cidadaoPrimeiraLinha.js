//Função em JS é  First-Class Object (citzens)
//High-Order Function

//Criar função de forma literal

function funcUm() {
  return "Angola";
}
//Por default, função em JS retorna undefined ou um retorno pré determinado

// //Armazenar uma função em uma variável
// const funcDois = function () {
//   return "bRAZIL";
// };

// //Armazenar um função em um Array
// const array = [
//   function (a, b) {
//     return a + b;
//   },
//   funcUm,
//   funcDois,
// ];

// console.log(array[0](4, 4));
// console.log(array[1]());
// console.log(array[2]());

//Armazenar uma função em um atributo de um objeto

// const objeto = {};//criando um objeto vazio

// objeto.falar = function () {
//   return "Saudações";
// };
// console.log(objeto.falar());

//Passar uma função como parametro dentro de outra função

// function run(fun) {
//   fun();//invocando a função que recebi como parâmetro
// }

// run(function () {
//   console.log("WORKANDO");
// });

//Uma função pode Retornar / Conter uma outra função

function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}

soma(2, 3)(4);
// const verificacao = soma(2, 3);
// verificacao(4);


// function soma(a, b) {
//     return function (c) {
//       return function(d)
//       {
//         console.log(a+b+c+d)
//       }
//     };
//   }
  
//   soma(2, 3)(4)(5)

