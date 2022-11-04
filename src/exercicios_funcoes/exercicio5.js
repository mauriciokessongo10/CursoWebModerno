// const converter =

function Convert(Value) {
  let value = Value.toFixed(2);
  value = value.toString().replace(".", ",");
  return "R$" +value;
}
parseFloat();
console.log(Convert(0.30000000000000004));
