let isAtivo = false;

// console.log(isAtivo);
// isAtivo = true;
// console.log(isAtivo);

// isAtivo = 1;
// console.log(!!isAtivo);

// console.log("Os verdadeiros...");
// console.log(!!3);
// console.log(!!-1);
// console.log(!!" "); //espaço vazio
// console.log(!!"texto");
// console.log(!![]);
// console.log(!!Infinity);
// console.log(!!(isAtivo = 31)); //se receber 0, vai ser falso

console.log("Os Falsos");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log((isAtivo = false));

console.log("Finalizando");

let nome = "Nelson"; //por default, é falso
console.log(nome || "Unknown");

