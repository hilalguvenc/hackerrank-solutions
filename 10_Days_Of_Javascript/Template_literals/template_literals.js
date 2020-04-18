function sides(literals, ...expression) {
  let [A, P] = expression;
  let s1 = (P + Math.sqrt(P * P - 16 * A)) / 4;
  let s2 = (P - Math.sqrt(P * P - 16 * A)) / 4;
  [s1, s2] = [s1, s2].sort();
  return [s1, s2];
}
//Input(10,14);