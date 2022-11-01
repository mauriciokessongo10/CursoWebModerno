function tratarErro(erro) {
  //   throw new Error("...");
  throw {
    nome: erro.name,
    mensagem: erro.message,
  };
}

function imprimir(objeto) {
  try {
    console.log(objeto.nome.toUpperCase());
  } catch (e) {
    tratarErro(e);
  } finally {
    console.log("Sempre Irei Executar");
  }
}

const objeto = { nome: "Mauricio" };

imprimir(objeto);
