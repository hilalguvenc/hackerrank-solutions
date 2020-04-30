function whatIsInAName(collection, source) {
  var sourceKeys = Object.keys(source);
  return collection.filter((obj) => {
    return sourceKeys.every((key) => {
      return source[key] == obj[key];
    });
  });
}
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);
