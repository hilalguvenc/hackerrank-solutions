function reverseString(s) {
  try {
    var s = s.split("").reverse().join("");
  } catch (err) {
    console.log(err.message);
  } finally {
    console.log(s);
  }
}
//s = Number(1234);