/*
    delta = (b*b) - (4*a*c)
    x1 = (-b + sqrt(delta))/(2*a)
    x2 = (-b + sqrt(delta))/(2*a)
    delta > 0 => x1 != x2
    delta = 0 => x1 == x2
    delta < 0 => x1 && x2 == VAZIO

 */
function formulaBhaskara(a, b, c) {
  let delta = Math.pow(b, 2) - 4 * a * c;
  const array = [];
  array[0] = (-b + Math.sqrt(delta)) / (2 * a);
  array[1] = (-b - Math.sqrt(delta)) / (2 * a);

  if (delta < 0) {
    return "Delta é Negativo";
  } else if (delta >= 0) {
    return array;
  }
}

console.log(formulaBhaskara(1, -4, 3));
