// const func = [];

// for (var i = 0; i < 10; i++) {
//   func.push(function () {
//     console.log(i);
//   });
// }

// func[2]();
// func[8]();//o valor é o mesmo, não importa o indice, ele pega o útlimo valor do i, e como o contador
//i é var (global), ele é acessado normalmente fora do loop
// com o var, o valor que estava em cada índice não é guardado.
//Só é possível acessar o último valor do contador "i" e este é ATRIBUÍDO PARA TODOS OS ÍNDICES

// const func = [];

// for (let i = 0; i < 10; i++) {
//   func.push(function () {
//     console.log(i);
//   });
// }
// func[5]();
// func[2]();
// func[8]();
/*
    como o contador "i" foi declararado como "let", ele continua mantendo as suas definições de escopo
    ou seja, o contador "i" não pode ser acessado fora do loop
    MAS DIFERENTE DO CONTADOR DO TIPO VAR, O CONTADOR DO TIPO LET CONSERVA O VALOR DE CADA ÍNDICE,
    OU SEJa, 
    MESMO DEPOIS DO LOOP OU EM QUALQUER SITUAÇÃO, É POSSÍVEL ACESSAR O VALOR QUE CADA ÍNDICE RECEBEU, SEM PERDER DADOS
    O CONCEITO CENTRAL FDA DIFERENÇA É CLOSURE
*/
