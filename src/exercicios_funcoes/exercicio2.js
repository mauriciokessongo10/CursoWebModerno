const classificacaoTriangulo = function (ladoUm, ladoDois, ladoTres) {
  if (ladoUm == ladoDois && ladoDois == ladoTres) {
    return "Triângulo Equilátero";
  } else if (ladoUm == ladoDois || ladoDois == ladoTres || ladoUm == ladoTres) {
    return "Triângulo Isósceles";
  } else {
    return "Triângulo Escaleno";
  }
};

console.log(classificacaoTriangulo(3, 2, 1));
