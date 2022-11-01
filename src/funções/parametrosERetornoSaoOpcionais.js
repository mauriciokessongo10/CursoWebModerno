function area(largura, altura) {
  const area = largura * altura;
  if (area > 20) {
    return "Area Muito Alta";
  } else {
    return area;
  }
}

console.log(area(3, 2));
