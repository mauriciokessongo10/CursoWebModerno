// jurosSimples = Capital * taxaDeJuros * tempo
// jurosComposto = ()

juroSimples = (capitalInicial, taxaJuros, tempoAplicacao) => {
  taxaJuros = taxaJuros / 100;
  const juroSimples = capitalInicial * taxaJuros * tempoAplicacao;
  const montanteJuroSimples = juroSimples + capitalInicial;

  return montanteJuroSimples;
};

juroComposto = (capitalInicial, taxaJuros, tempoAplicacao) => {
  taxaJuros = taxaJuros / 100;
  const juroComposto = capitalInicial * (1 + taxaJuros) ** tempoAplicacao;

  return juroComposto.toFixed(2);
};

console.log(juroSimples(2000, 10, 6));

console.log(juroComposto(2000, 10, 6));
