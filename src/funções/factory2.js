function criarProduto(nomeProduto, precoProduto) {
  return {
    nomeProduto,
    precoProduto,
    desconto: 0.1,
  };
}

console.log(criarProduto("Calabresa", 50));
