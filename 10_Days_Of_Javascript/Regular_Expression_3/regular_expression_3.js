function regexVar() {
  var re = /\d+/g;
  return re;
}
function main() {
  const re = regexVar();
  const s = readLine();

  const r = s.match(re);

  for (const e of r) {
    console.log(e);
  }
}
/*Input
(102, 1948948 and 1.3 and 4.5);
(1,2,3);
*/
