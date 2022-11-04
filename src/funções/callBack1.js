const fabricantes = ["BMW", "AUDI", "MERCEDES"];

function imprime(nomes, indices) {
  console.log(`${indices + 1}. ${nomes}`)
}

fabricantes.forEach(imprime)
